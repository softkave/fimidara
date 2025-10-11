import assert from 'assert';
import {kIjxSemantic, kIjxUtils} from '../../../contexts/ijx/injectables.js';
import {User} from '../../../definitions/user.js';
import {appAssert} from '../../../utils/assertion.js';
import {validate} from '../../../utils/validate.js';
import {getLoginResult} from '../login/utils.js';
import {INTERNAL_sendEmailVerificationCode} from '../sendEmailVerificationCode/handler.js';
import {INTERNAL_signupUserWithOAuth} from '../signupWithOAuth/utils.js';
import {LoginWithOAuthEndpoint} from './types.js';
import {loginWithOAuthJoiSchema} from './validation.js';

const loginWithOAuth: LoginWithOAuthEndpoint = async reqData => {
  const data = validate(reqData.data, loginWithOAuthJoiSchema);
  let user = await kIjxSemantic.user().getByOAuthUserId(data.oauthUserId);

  if (!user) {
    user = await kIjxSemantic
      .utils()
      .withTxn(opts => INTERNAL_signupUserWithOAuth({data, opts}));

    if (!data.emailVerifiedAt && !user.emailVerifiedAt) {
      kIjxUtils.promises().callAndForget(() => {
        assert.ok(user);
        return INTERNAL_sendEmailVerificationCode(user);
      });
    }
  }

  if (data.emailVerifiedAt && !user.isEmailVerified) {
    await kIjxSemantic.utils().withTxn(async txn => {
      appAssert(user);
      const updates: Partial<User> = {
        isEmailVerified: true,
        emailVerifiedAt: data.emailVerifiedAt,
      };

      await kIjxSemantic.user().updateOneById(user.resourceId, updates, txn);
      user = {...user, ...updates};
    });
  }

  return await getLoginResult(user);
};

export default loginWithOAuth;
