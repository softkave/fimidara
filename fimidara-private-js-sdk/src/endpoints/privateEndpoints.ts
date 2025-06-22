// This file is auto-generated, do not modify directly.
// Reach out to a code owner to suggest changes.

import {
  type MfdocEndpointResultWithBinaryResponse,
  type MfdocEndpointOpts,
  type MfdocEndpointDownloadBinaryOpts,
  type MfdocEndpointUploadBinaryOpts,
} from 'mfdoc-js-sdk-base';
import {AbstractSdkEndpoints} from './AbstractSdkEndpoints.js';
import {
  type AddWorkspaceEndpointParams,
  type AddWorkspaceEndpointResult,
  type CountItemsResult,
  type DeleteWorkspaceEndpointParams,
  type LongRunningJobResult,
  type GetUserWorkspacesEndpointParams,
  type GetUserWorkspacesEndpointResult,
  type ChangePasswordWithCurrentPasswordEndpointParams,
  type LoginResult,
  type ChangePasswordWithTokenEndpointParams,
  type ForgotPasswordEndpointParams,
  type LoginParams,
  type LoginWithOAuthEndpointParams,
  type RefreshUserTokenEndpointParams,
  type SignupEndpointParams,
  type SignupWithOAuthEndpointParams,
  type UpdateUserEndpointParams,
  type UpdateUserEndpointResult,
  type UserExistsEndpointParams,
  type UserExistsEndpointResult,
  type GetUserCollaborationRequestEndpointParams,
  type GetUserCollaborationRequestEndpointResult,
  type GetUserCollaborationRequestsEndpointParams,
  type GetUserCollaborationRequestsEndpointResult,
  type GetWorkspaceCollaborationRequestEndpointParams,
  type GetWorkspaceCollaborationRequestEndpointResult,
  type RespondToCollaborationRequestEndpointParams,
  type RespondToCollaborationRequestEndpointResult,
  type UpdateCollaborationRequestEndpointParams,
  type UpdateCollaborationRequestEndpointResult,
  type GetUsersEndpointParams,
  type GetUsersEndpointResult,
  type GetWaitlistedUsersEndpointParams,
  type GetWaitlistedUsersEndpointResult,
  type GetWorkspacesEndpointParams,
  type GetWorkspacesEndpointResult,
  type UpgradeWaitlistedUsersEndpointParams,
  type EmptyEndpointResult,
} from './privateTypes.js';

export class WorkspacesEndpoints extends AbstractSdkEndpoints {
  /**
   * Create a new workspace with the specified name and optional description
   */
  addWorkspace = async (
    props: AddWorkspaceEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<AddWorkspaceEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/workspaces/addWorkspace',
        method: 'POST',
      },
      opts,
    );
  };
  countUserWorkspaces = async (
    opts?: MfdocEndpointOpts,
  ): Promise<CountItemsResult> => {
    return this.executeJson(
      {
        path: '/v1/workspaces/countUserWorkspaces',
        method: 'POST',
      },
      opts,
    );
  };
  deleteWorkspace = async (
    props?: DeleteWorkspaceEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LongRunningJobResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/workspaces/deleteWorkspace',
        method: 'DELETE',
      },
      opts,
    );
  };
  getUserWorkspaces = async (
    props?: GetUserWorkspacesEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetUserWorkspacesEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/workspaces/getUserWorkspaces',
        method: 'POST',
      },
      opts,
    );
  };
}
export class UsersEndpoints extends AbstractSdkEndpoints {
  /**
   * Change password when the current password is known. Requires authentication and both current and new passwords.
   */
  changePasswordWithCurrentPassword = async (
    props: ChangePasswordWithCurrentPasswordEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/changePasswordWithCurrentPassword',
        method: 'POST',
      },
      opts,
    );
  };
  changePasswordWithToken = async (
    props: ChangePasswordWithTokenEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/changePasswordWithToken',
        method: 'POST',
      },
      opts,
    );
  };
  confirmEmailAddress = async (
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    return this.executeJson(
      {
        path: '/v1/users/confirmEmailAddress',
        method: 'POST',
      },
      opts,
    );
  };
  forgotPassword = async (
    props: ForgotPasswordEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<void> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/forgotPassword',
        method: 'POST',
      },
      opts,
    );
  };
  getUserData = async (opts?: MfdocEndpointOpts): Promise<LoginResult> => {
    return this.executeJson(
      {
        path: '/v1/users/getUserData',
        method: 'POST',
      },
      opts,
    );
  };
  login = async (
    props: LoginParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/login',
        method: 'POST',
      },
      opts,
    );
  };
  loginWithOAuth = async (
    props: LoginWithOAuthEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    const mapping = {
      oauthUserId: ['body', 'oauthUserId'],
      interServerAuthSecret: ['header', 'x-fimidara-inter-server-auth-secret'],
    } as const;
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/loginWithOAuth',
        method: 'POST',
      },
      opts,
      mapping,
    );
  };
  refreshToken = async (
    props: RefreshUserTokenEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/refreshToken',
        method: 'POST',
      },
      opts,
    );
  };
  sendEmailVerificationCode = async (
    opts?: MfdocEndpointOpts,
  ): Promise<void> => {
    return this.executeJson(
      {
        path: '/v1/users/sendEmailVerificationCode',
        method: 'POST',
      },
      opts,
    );
  };
  signup = async (
    props: SignupEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/signup',
        method: 'POST',
      },
      opts,
    );
  };
  signupWithOAuth = async (
    props: SignupWithOAuthEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<LoginResult> => {
    const mapping = {
      name: ['body', 'name'],
      email: ['body', 'email'],
      emailVerifiedAt: ['body', 'emailVerifiedAt'],
      oauthUserId: ['body', 'oauthUserId'],
      interServerAuthSecret: ['header', 'x-fimidara-inter-server-auth-secret'],
    } as const;
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/signupWithOAuth',
        method: 'POST',
      },
      opts,
      mapping,
    );
  };
  updateUser = async (
    props?: UpdateUserEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<UpdateUserEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/updateUser',
        method: 'POST',
      },
      opts,
    );
  };
  userExists = async (
    props: UserExistsEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<UserExistsEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/users/userExists',
        method: 'POST',
      },
      opts,
    );
  };
}
export class CollaborationRequestsEndpoints extends AbstractSdkEndpoints {
  /**
   * Get the total count of collaboration requests you have received. Useful for displaying notification badges in your UI.
   */
  countUserRequests = async (
    opts?: MfdocEndpointOpts,
  ): Promise<CountItemsResult> => {
    return this.executeJson(
      {
        path: '/v1/collaborationRequests/countUserRequests',
        method: 'POST',
      },
      opts,
    );
  };
  getUserRequest = async (
    props: GetUserCollaborationRequestEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetUserCollaborationRequestEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/collaborationRequests/getUserRequest',
        method: 'POST',
      },
      opts,
    );
  };
  getUserRequests = async (
    props?: GetUserCollaborationRequestsEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetUserCollaborationRequestsEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/collaborationRequests/getUserRequests',
        method: 'POST',
      },
      opts,
    );
  };
  getWorkspaceRequest = async (
    props: GetWorkspaceCollaborationRequestEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetWorkspaceCollaborationRequestEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/collaborationRequests/getWorkspaceRequest',
        method: 'POST',
      },
      opts,
    );
  };
  respondToRequest = async (
    props: RespondToCollaborationRequestEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<RespondToCollaborationRequestEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/collaborationRequests/respondToRequest',
        method: 'POST',
      },
      opts,
    );
  };
  updateRequest = async (
    props: UpdateCollaborationRequestEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<UpdateCollaborationRequestEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/collaborationRequests/updateRequest',
        method: 'POST',
      },
      opts,
    );
  };
}
export class InternalEndpoints extends AbstractSdkEndpoints {
  /**
   * Retrieves a comprehensive list of all users in the system, including both active and waitlisted users. This is an internal endpoint used for administrative user management and reporting.
   */
  getUsers = async (
    props?: GetUsersEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetUsersEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/internals/getUsers',
        method: 'POST',
      },
      opts,
    );
  };
  getWaitlistedUsers = async (
    props?: GetWaitlistedUsersEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetWaitlistedUsersEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/internals/getWaitlistedUsers',
        method: 'POST',
      },
      opts,
    );
  };
  getWorkspaces = async (
    props?: GetWorkspacesEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<GetWorkspacesEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/internals/getWorkspaces',
        method: 'POST',
      },
      opts,
    );
  };
  upgradeWaitlistedUsers = async (
    props: UpgradeWaitlistedUsersEndpointParams,
    opts?: MfdocEndpointOpts,
  ): Promise<EmptyEndpointResult> => {
    return this.executeJson(
      {
        data: props,
        path: '/v1/internals/upgradeWaitlistedUsers',
        method: 'POST',
      },
      opts,
    );
  };
}
export class FimidaraEndpoints extends AbstractSdkEndpoints {
  workspaces = new WorkspacesEndpoints(this.config, this);
  users = new UsersEndpoints(this.config, this);
  collaborationRequests = new CollaborationRequestsEndpoints(this.config, this);
  internal = new InternalEndpoints(this.config, this);
}
