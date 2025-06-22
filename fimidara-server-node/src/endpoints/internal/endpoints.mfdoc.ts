import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {PublicUser} from '../../definitions/user.js';
import {PublicWorkspace} from '../../definitions/workspace.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {userEndpointsMddocParts} from '../users/endpoint.mfdoc.js';
import {workspaceEndpointsMddocParts} from '../workspaces/endpoints.mfdoc.js';
import {internalConstants} from './constants.js';
import {
  GetUsersEndpointParams,
  GetUsersEndpointResult,
} from './getUsers/types.js';
import {
  GetWaitlistedUsersEndpointParams,
  GetWaitlistedUsersEndpointResult,
} from './getWaitlistedUsers/types.js';
import {
  GetWorkspacesEndpointParams,
  GetWorkspacesEndpointResult,
} from './getWorkspaces/types.js';
import {
  GetUsersHttpEndpoint,
  GetWaitlistedUsersHttpEndpoint,
  GetWorkspacesHttpEndpoint,
  UpgradeWaitlistedUsersHttpEndpoint,
} from './types.js';
import {UpgradeWaitlistedUsersEndpointParams} from './upgradeWaitlistedUsers/types.js';

const getWaitlistedUsersParams =
  mfdocConstruct.constructObject<GetWaitlistedUsersEndpointParams>({
    name: 'GetWaitlistedUsersEndpointParams',
    description:
      'Parameters for retrieving waitlisted users. This endpoint requires no additional parameters.',
    fields: {},
  });

const getWaitlistedUsersResponseBody =
  mfdocConstruct.constructObject<GetWaitlistedUsersEndpointResult>({
    name: 'GetWaitlistedUsersEndpointResult',
    description:
      'Response containing the list of users currently on the waitlist.',
    fields: {
      users: mfdocConstruct.constructObjectField({
        required: true,
        description:
          'Array of users who are currently waitlisted and pending approval.',
        data: mfdocConstruct.constructArray<PublicUser>({
          type: userEndpointsMddocParts.user,
          description: 'List of waitlisted user objects.',
        }),
      }),
    },
  });

const getUsersParams = mfdocConstruct.constructObject<GetUsersEndpointParams>({
  name: 'GetUsersEndpointParams',
  description:
    'Parameters for retrieving all users. This endpoint requires no additional parameters.',
  fields: {},
});

const getUsersResponseBody =
  mfdocConstruct.constructObject<GetUsersEndpointResult>({
    name: 'GetUsersEndpointResult',
    description: 'Response containing the list of all users in the system.',
    fields: {
      users: mfdocConstruct.constructObjectField({
        required: true,
        description:
          'Array of all users in the system, including both active and waitlisted users.',
        data: mfdocConstruct.constructArray<PublicUser>({
          type: userEndpointsMddocParts.user,
          description: 'List of user objects.',
        }),
      }),
    },
  });

const getWorkspacesParams =
  mfdocConstruct.constructObject<GetWorkspacesEndpointParams>({
    name: 'GetWorkspacesEndpointParams',
    description:
      'Parameters for retrieving all workspaces. This endpoint requires no additional parameters.',
    fields: {},
  });

const getWorkspacesResponseBody =
  mfdocConstruct.constructObject<GetWorkspacesEndpointResult>({
    name: 'GetWorkspacesEndpointResult',
    description:
      'Response containing the list of all workspaces in the system.',
    fields: {
      workspaceList: mfdocConstruct.constructObjectField({
        required: true,
        description: 'Array of all workspaces available in the system.',
        data: mfdocConstruct.constructArray<PublicWorkspace>({
          type: workspaceEndpointsMddocParts.workspace,
          description: 'List of workspace objects.',
        }),
      }),
    },
  });

const upgradeWaitlistedUsersParams =
  mfdocConstruct.constructObject<UpgradeWaitlistedUsersEndpointParams>({
    name: 'UpgradeWaitlistedUsersEndpointParams',
    description: 'Parameters for upgrading waitlisted users to active status.',
    fields: {
      userIds: mfdocConstruct.constructObjectField({
        required: true,
        description:
          'Array of user IDs to upgrade from waitlisted to active status.',
        data: mfdocConstruct.constructArray<string>({
          type: fReusables.id,
          description: 'List of user IDs to upgrade.',
        }),
      }),
    },
  });

export const getWaitlistedUsersEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: internalConstants.routes.getWaitlistedUsers,
    method: HttpEndpointMethod.Post,
    requestBody: getWaitlistedUsersParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWaitlistedUsersResponseBody,
    name: 'fimidara/internal/getWaitlistedUsers',
    description:
      'Retrieves a list of all users currently on the waitlist. This is an internal endpoint used for administrative purposes to manage user approvals.',
    tags: [kEndpointTag.private],
  });

export const upgradeWaitlistedUsersEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpgradeWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpgradeWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpgradeWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpgradeWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpgradeWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpgradeWaitlistedUsersHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: internalConstants.routes.upgradeWaitlistedUsers,
    method: HttpEndpointMethod.Post,
    requestBody: upgradeWaitlistedUsersParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.emptySuccessResponseBody,
    name: 'fimidara/internal/upgradeWaitlistedUsers',
    description:
      'Upgrades specified waitlisted users to active status, allowing them full access to the system. This is an internal endpoint used for administrative user management.',
    tags: [kEndpointTag.private],
  });

export const getUsersEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetUsersHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetUsersHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<GetUsersHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      GetUsersHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetUsersHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetUsersHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: internalConstants.routes.getUsers,
    method: HttpEndpointMethod.Post,
    requestBody: getUsersParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getUsersResponseBody,
    name: 'fimidara/internal/getUsers',
    description:
      'Retrieves a comprehensive list of all users in the system, including both active and waitlisted users. This is an internal endpoint used for administrative user management and reporting.',
    tags: [kEndpointTag.private],
  });

export const getWorkspacesEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspacesHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspacesHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspacesHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspacesHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspacesHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspacesHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: internalConstants.routes.getWorkspaces,
    method: HttpEndpointMethod.Post,
    requestBody: getWorkspacesParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspacesResponseBody,
    name: 'fimidara/internal/getWorkspaces',
    description:
      'Retrieves a list of all workspaces in the system. This is an internal endpoint used for administrative workspace management and system monitoring.',
    tags: [kEndpointTag.private],
  });
