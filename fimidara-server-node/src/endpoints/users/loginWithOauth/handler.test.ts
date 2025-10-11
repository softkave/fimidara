import assert from 'assert';
import {afterAll, beforeAll, describe, expect, test} from 'vitest';
import {kIjxSemantic, kIjxUtils} from '../../../contexts/ijx/injectables.js';
import {UserWithWorkspace} from '../../../definitions/user.js';
import {getTimestamp} from '../../../utils/dateFns.js';
import RequestData from '../../RequestData.js';
import {completeTests} from '../../testHelpers/helpers/testFns.js';
import {
  assertEndpointResultOk,
  initTests,
  insertUserWithOAuthForTest,
  mockExpressRequest,
} from '../../testHelpers/utils.js';
import login from './handler.js';
import {LoginWithOAuthEndpointParams} from './types.js';

beforeAll(async () => {
  await initTests();
});

afterAll(async () => {
  await completeTests();
});

describe('loginWithOAuth', () => {
  test('user login successful with token reuse', async () => {
    const {user, userToken, oauthUserId} = await insertUserWithOAuthForTest();
    const reqData =
      RequestData.fromExpressRequest<LoginWithOAuthEndpointParams>(
        mockExpressRequest(),
        {
          oauthUserId,
          name: user.firstName + ' ' + user.lastName,
          email: user.email,
        }
      );

    const result = await login(reqData);
    assertEndpointResultOk(result);

    expect(result.user).toMatchObject(user);
    expect(result.jwtToken).toBeTruthy();
    expect(result.clientJwtToken).toBeTruthy();
    expect(result.refreshToken).toBeTruthy();
    expect(result.jwtTokenExpiresAt).toBeTruthy();

    const jwtToken = kIjxUtils.session().decodeToken(result.jwtToken);
    expect(jwtToken.sub.id).toBe(userToken.resourceId);
  });

  describe.each([
    {
      userEmailVerified: false,
      emailVerifiedAt: undefined,
    },
    {
      userEmailVerified: true,
      emailVerifiedAt: undefined,
    },
    {
      userEmailVerified: true,
      emailVerifiedAt: getTimestamp(),
    },
    {
      userEmailVerified: false,
      emailVerifiedAt: getTimestamp(),
    },
  ])(
    'login updates existing user',
    async ({userEmailVerified, emailVerifiedAt}) => {
      let rawUser: UserWithWorkspace | undefined;
      let oauthUserId: string;

      beforeAll(async () => {
        ({rawUser, oauthUserId} = await insertUserWithOAuthForTest({
          userInput: {
            emailVerifiedAt: userEmailVerified ? getTimestamp() : undefined,
          },
        }));
      });

      test(`userEmailVerified=${userEmailVerified} with emailVerifiedAt=${emailVerifiedAt}`, async () => {
        assert.ok(rawUser, 'rawUser is not defined');
        assert.ok(oauthUserId, 'oauthUserId is not defined');

        const reqData =
          RequestData.fromExpressRequest<LoginWithOAuthEndpointParams>(
            mockExpressRequest(),
            {
              oauthUserId,
              emailVerifiedAt,
              name: rawUser.firstName + ' ' + rawUser.lastName,
              email: rawUser.email,
            }
          );
        const result = await login(reqData);
        assertEndpointResultOk(result);

        const savedUser = await kIjxSemantic
          .user()
          .assertGetOneByQuery({resourceId: result.user.resourceId});

        expect(savedUser.isEmailVerified).toBe(
          userEmailVerified || !!emailVerifiedAt
        );
        expect(savedUser.oauthUserId).toBe(oauthUserId);
      });
    }
  );
});
