import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  InferMfdocSdkParamsType as InferSdkParamsType,
  mfdocConstruct,
} from 'mfdoc';
import {EmptyObject} from 'type-fest';
import {PublicWorkspaceResource} from '../../definitions/system.js';
import {PublicUser} from '../../definitions/user.js';
import {kEndpointConstants} from '../constants.js';
import {fReusables, mfdocEndpointHttpHeaderItems} from '../helpers.mfdoc.js';
import {
  HttpEndpointRequestHeaders_ContentType,
  HttpEndpointRequestHeaders_InterServerAuth,
  kEndpointTag,
} from '../types.js';
import {ChangePasswordWithCurrentPasswordEndpointParams} from './changePasswordWithCurrentPassword/types.js';
import {ChangePasswordWithTokenEndpointParams} from './changePasswordWithToken/types.js';
import {kUserConstants} from './constants.js';
import {ForgotPasswordEndpointParams} from './forgotPassword/types.js';
import {LoginEndpointParams, LoginResult} from './login/types.js';
import {LoginWithOAuthEndpointParams} from './loginWithOauth/types.js';
import {RefreshUserTokenEndpointParams} from './refreshToken/types.js';
import {SignupEndpointParams} from './signup/types.js';
import {SignupWithOAuthEndpointParams} from './signupWithOAuth/types.js';
import {
  ChangePasswordWithCurrentPasswordHttpEndpoint,
  ChangePasswordWithTokenHttpEndpoint,
  ConfirmEmailAddressHttpEndpoint,
  ForgotPasswordHttpEndpoint,
  GetUserDataHttpEndpoint,
  LoginHttpEndpoint,
  LoginWithOAuthHttpEndpoint,
  RefreshUserTokenHttpEndpoint,
  SendEmailVerificationCodeHttpEndpoint,
  SignupHttpEndpoint,
  SignupWithOAuthHttpEndpoint,
  UpdateUserHttpEndpoint,
  UserExistsHttpEndpoint,
} from './types.js';
import {
  UpdateUserEndpointParams,
  UpdateUserEndpointResult,
} from './updateUser/types.js';
import {
  UserExistsEndpointParams,
  UserExistsEndpointResult,
} from './userExists/types.js';

const currentPassword = mfdocConstruct.constructString({
  description: 'Current password',
  example: 'myCurrentPassword123',
});
const newPassword = mfdocConstruct.constructString({
  description: 'New password',
  example: 'myNewSecurePassword456',
});

const user = mfdocConstruct.constructObject<PublicUser>({
  name: 'User',
  description:
    'User account information with profile details and associated workspaces',
  fields: {
    ...fReusables.resourceParts,
    firstName: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.firstName,
    }),
    lastName: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.lastName,
    }),
    email: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.emailAddress,
    }),
    passwordLastChangedAt: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.date,
    }),
    requiresPasswordChange: mfdocConstruct.constructObjectField({
      required: false,
      data: mfdocConstruct.constructBoolean({
        description:
          'Whether the user is required to change their password on next login',
        example: false,
      }),
    }),
    isEmailVerified: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructBoolean({
        description: 'Whether the user has verified their email address',
        example: true,
      }),
    }),
    emailVerifiedAt: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.dateOrNull,
    }),
    emailVerificationEmailSentAt: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.dateOrNull,
    }),
    workspaces: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructArray<PublicWorkspaceResource>({
        description: 'List of workspaces the user has access to',
        type: mfdocConstruct.constructObject<PublicWorkspaceResource>({
          name: 'PublicWorkspaceResource',
          fields: fReusables.workspaceResourceParts,
        }),
      }),
    }),
    isOnWaitlist: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructBoolean({
        description: 'Whether the user is on the waitlist for the service',
        example: false,
      }),
    }),
  },
});

const loginResponseBody = mfdocConstruct.constructObject<LoginResult>({
  name: 'LoginResult',
  description:
    'Successful login response containing user data and authentication tokens',
  fields: {
    user: mfdocConstruct.constructObjectField({required: true, data: user}),
    jwtToken: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.tokenString,
    }),
    clientJwtToken: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.tokenString,
    }),
    refreshToken: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.refreshTokenString,
    }),
    jwtTokenExpiresAt: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.jwtTokenExpiresAt,
    }),
  },
});

const signupParams = mfdocConstruct.constructObject<SignupEndpointParams>({
  name: 'SignupEndpointParams',
  description: 'Parameters required to create a new user account',
  fields: {
    firstName: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.firstName,
    }),
    lastName: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.lastName,
    }),
    email: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.emailAddress,
    }),
    password: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.password,
    }),
  },
});

const signupWithOAuthParams =
  mfdocConstruct.constructObject<SignupWithOAuthEndpointParams>({
    name: 'SignupWithOAuthEndpointParams',
    description:
      'Parameters for creating a new user account via OAuth provider',
    fields: {
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.name,
      }),
      email: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.emailAddress,
      }),
      emailVerifiedAt: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.date,
      }),
      oauthUserId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.providedResourceId,
      }),
    },
  });

const loginParams = mfdocConstruct.constructObject<LoginEndpointParams>({
  name: 'LoginParams',
  description: 'Credentials required for user authentication',
  fields: {
    email: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.emailAddress,
    }),
    password: mfdocConstruct.constructObjectField({
      required: true,
      data: currentPassword,
    }),
  },
});

const loginWithOAuthParams =
  mfdocConstruct.constructObject<LoginWithOAuthEndpointParams>({
    name: 'LoginWithOAuthEndpointParams',
    description: 'Parameters for authenticating a user via OAuth provider',
    fields: {
      oauthUserId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.providedResourceId,
      }),
      emailVerifiedAt: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.date,
      }),
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.name,
      }),
      email: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.emailAddress,
      }),
    },
  });

const forgotPasswordParams =
  mfdocConstruct.constructObject<ForgotPasswordEndpointParams>({
    name: 'ForgotPasswordEndpointParams',
    description: 'Email address to send password reset instructions to',
    fields: {
      email: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.emailAddress,
      }),
    },
  });

const changePasswordWithCurrentPasswordParams =
  mfdocConstruct.constructObject<ChangePasswordWithCurrentPasswordEndpointParams>(
    {
      name: 'ChangePasswordWithCurrentPasswordEndpointParams',
      description:
        'Parameters for changing password when current password is known',
      fields: {
        currentPassword: mfdocConstruct.constructObjectField({
          required: true,
          data: currentPassword,
        }),
        password: mfdocConstruct.constructObjectField({
          required: true,
          data: newPassword,
        }),
      },
    }
  );

const changePasswordWithTokenParams =
  mfdocConstruct.constructObject<ChangePasswordWithTokenEndpointParams>({
    name: 'ChangePasswordWithTokenEndpointParams',
    description:
      'Parameters for changing password using a reset token (from forgot password flow)',
    fields: {
      password: mfdocConstruct.constructObjectField({
        required: true,
        data: newPassword,
      }),
    },
  });

const updateUserParams =
  mfdocConstruct.constructObject<UpdateUserEndpointParams>({
    name: 'UpdateUserEndpointParams',
    description:
      'User profile fields that can be updated. All fields are optional.',
    fields: {
      firstName: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.firstName,
      }),
      lastName: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.lastName,
      }),
      email: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.emailAddress,
      }),
    },
  });

const updateUserResponseBody =
  mfdocConstruct.constructObject<UpdateUserEndpointResult>({
    name: 'UpdateUserEndpointResult',
    description: 'Response containing the updated user information',
    fields: {
      user: mfdocConstruct.constructObjectField({
        required: true,
        data: user,
      }),
    },
  });

const userExistsParams =
  mfdocConstruct.constructObject<UserExistsEndpointParams>({
    name: 'UserExistsEndpointParams',
    description: 'Email address to check for existing user account',
    fields: {
      email: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.emailAddress,
      }),
    },
  });

const refreshUserTokenParams =
  mfdocConstruct.constructObject<RefreshUserTokenEndpointParams>({
    name: 'RefreshUserTokenEndpointParams',
    description: 'Refresh token to generate new access tokens',
    fields: {
      refreshToken: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.refreshTokenString,
      }),
    },
  });

const userExistsHttpResponseBody =
  mfdocConstruct.constructObject<UserExistsEndpointResult>({
    name: 'UserExistsEndpointResult',
    description:
      'Response indicating whether a user account exists for the given email',
    fields: {
      exists: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructBoolean({
          description:
            'True if a user account exists with the provided email address',
          example: true,
        }),
      }),
    },
  });

const signupWithOAuthSdkParamsDef = mfdocConstruct.constructObject<
  SignupWithOAuthEndpointParams & {
    interServerAuthSecret: string;
  }
>({
  name: 'SignupWithOAuthEndpointParams',
  description:
    'SDK parameters for OAuth signup including inter-server authentication',
  fields: {
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.name,
    }),
    email: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.emailAddress,
    }),
    emailVerifiedAt: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.date,
    }),
    oauthUserId: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.providedResourceId,
    }),
    interServerAuthSecret: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.tokenString,
    }),
  },
});

const signupWithOAuthSdkParams = mfdocConstruct.constructSdkParamsBody<
  SignupWithOAuthEndpointParams & {
    interServerAuthSecret: string;
  },
  HttpEndpointRequestHeaders_ContentType &
    HttpEndpointRequestHeaders_InterServerAuth,
  EmptyObject,
  EmptyObject,
  SignupWithOAuthEndpointParams
>({
  def: signupWithOAuthSdkParamsDef,
  mappings: key => {
    switch (key) {
      case 'email':
        return ['body', 'email'];
      case 'name':
        return ['body', 'name'];
      case 'oauthUserId':
        return ['body', 'oauthUserId'];
      case 'emailVerifiedAt':
        return ['body', 'emailVerifiedAt'];
      case 'interServerAuthSecret':
        return ['header', 'x-fimidara-inter-server-auth-secret'];
      default:
        return undefined;
    }
  },
  serializeAs: 'json',
});

const signupWithOAuthHttpHeaders = mfdocConstruct.constructObject<
  HttpEndpointRequestHeaders_ContentType &
    HttpEndpointRequestHeaders_InterServerAuth
>({
  name: 'SignupWithOAuthHttpHeaders',
  description: 'Required HTTP headers for OAuth signup endpoint',
  fields: {
    [kEndpointConstants.headers.contentType]:
      mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocEndpointHttpHeaderItems.requestHeaderItem_JsonContentType,
      }),
    [kEndpointConstants.headers.interServerAuthSecret]:
      mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocEndpointHttpHeaderItems.requestHeaderItem_InterServerAuthSecret,
      }),
  },
});

const loginWithOAuthSdkParamsDef = mfdocConstruct.constructObject<
  LoginWithOAuthEndpointParams & {
    interServerAuthSecret: string;
  }
>({
  name: 'LoginWithOAuthEndpointParams',
  description:
    'SDK parameters for OAuth login including inter-server authentication',
  fields: {
    oauthUserId: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.providedResourceId,
    }),
    interServerAuthSecret: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.tokenString,
    }),
    emailVerifiedAt: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.date,
    }),
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.name,
    }),
    email: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.emailAddress,
    }),
  },
});

const loginWithOAuthSdkParams = mfdocConstruct.constructSdkParamsBody<
  LoginWithOAuthEndpointParams & {
    interServerAuthSecret: string;
  },
  HttpEndpointRequestHeaders_ContentType &
    HttpEndpointRequestHeaders_InterServerAuth,
  EmptyObject,
  EmptyObject,
  LoginWithOAuthEndpointParams
>({
  def: loginWithOAuthSdkParamsDef,
  mappings: key => {
    switch (key) {
      case 'oauthUserId':
        return ['body', 'oauthUserId'];
      case 'interServerAuthSecret':
        return ['header', 'x-fimidara-inter-server-auth-secret'];
      default:
        return undefined;
    }
  },
  serializeAs: 'json',
});

const loginWithOAuthHttpHeaders = mfdocConstruct.constructObject<
  HttpEndpointRequestHeaders_ContentType &
    HttpEndpointRequestHeaders_InterServerAuth
>({
  name: 'LoginWithOAuthHttpHeaders',
  description: 'Required HTTP headers for OAuth login endpoint',
  fields: {
    [kEndpointConstants.headers.contentType]:
      mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocEndpointHttpHeaderItems.requestHeaderItem_JsonContentType,
      }),
    [kEndpointConstants.headers.interServerAuthSecret]:
      mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocEndpointHttpHeaderItems.requestHeaderItem_InterServerAuthSecret,
      }),
  },
});

export const signupEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      SignupHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      SignupHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<SignupHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      SignupHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      SignupHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      SignupHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.signup,
    method: HttpEndpointMethod.Post,
    requestBody: signupParams,
    requestHeaders: mfdocEndpointHttpHeaderItems.requestHeaders_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/signup',
    description:
      'Create a new user account with email and password. Returns authentication tokens upon successful registration.',
    tags: [kEndpointTag.private],
  });

export const signupWithOAuthEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >,
    InferSdkParamsType<
      SignupWithOAuthHttpEndpoint['mfdocHttpDefinition']['sdkParamsBody']
    >
  >({
    path: kUserConstants.routes.signupWithOAuth,
    method: HttpEndpointMethod.Post,
    requestBody: signupWithOAuthParams,
    sdkParamsBody: signupWithOAuthSdkParams,
    requestHeaders: signupWithOAuthHttpHeaders,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/signupWithOAuth',
    description:
      'Create a new user account using OAuth provider credentials. Requires inter-server authentication.',
    tags: [kEndpointTag.private],
  });

export const loginEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      LoginHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      LoginHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<LoginHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      LoginHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      LoginHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      LoginHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.login,
    method: HttpEndpointMethod.Post,
    requestBody: loginParams,
    requestHeaders: mfdocEndpointHttpHeaderItems.requestHeaders_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/login',
    description:
      'Authenticate a user with email and password. Returns user data and authentication tokens on success.',
    tags: [kEndpointTag.private],
  });

export const loginWithOAuthEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >,
    InferSdkParamsType<
      LoginWithOAuthHttpEndpoint['mfdocHttpDefinition']['sdkParamsBody']
    >
  >({
    path: kUserConstants.routes.loginWithOAuth,
    method: HttpEndpointMethod.Post,
    requestBody: loginWithOAuthParams,
    sdkParamsBody: loginWithOAuthSdkParams,
    requestHeaders: loginWithOAuthHttpHeaders,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/loginWithOAuth',
    description:
      'Authenticate a user with OAuth provider credentials. Requires inter-server authentication.',
    tags: [kEndpointTag.private],
  });

export const forgotPasswordEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ForgotPasswordHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ForgotPasswordHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ForgotPasswordHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ForgotPasswordHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ForgotPasswordHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ForgotPasswordHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.forgotPassword,
    method: HttpEndpointMethod.Post,
    requestBody: forgotPasswordParams,
    requestHeaders: mfdocEndpointHttpHeaderItems.requestHeaders_JsonContentType,
    name: 'fimidara/users/forgotPassword',
    description:
      'Send a password reset email to the specified email address. The email will contain a token for resetting the password.',
    tags: [kEndpointTag.private],
  });

export const changePasswordWithTokenEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ChangePasswordWithTokenHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ChangePasswordWithTokenHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ChangePasswordWithTokenHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ChangePasswordWithTokenHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ChangePasswordWithTokenHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ChangePasswordWithTokenHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.changePasswordWithToken,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    requestBody: changePasswordWithTokenParams,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/changePasswordWithToken',
    description:
      'Change password using a reset token from the forgot password flow. Uses the Authorization header with the reset token.',
    tags: [kEndpointTag.private],
  });

export const changePasswordWithCurrentPasswordEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ChangePasswordWithCurrentPasswordHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ChangePasswordWithCurrentPasswordHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ChangePasswordWithCurrentPasswordHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ChangePasswordWithCurrentPasswordHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ChangePasswordWithCurrentPasswordHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ChangePasswordWithCurrentPasswordHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.changePasswordWithCurrentPassword,
    method: HttpEndpointMethod.Post,
    requestBody: changePasswordWithCurrentPasswordParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/changePasswordWithCurrentPassword',
    description:
      'Change password when the current password is known. Requires authentication and both current and new passwords.',
    tags: [kEndpointTag.private],
  });

export const confirmEmailAddressEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ConfirmEmailAddressHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ConfirmEmailAddressHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ConfirmEmailAddressHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ConfirmEmailAddressHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ConfirmEmailAddressHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ConfirmEmailAddressHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.confirmEmailAddress,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/confirmEmailAddress',
    description:
      'Confirm email address using a verification token. Uses the Authorization header with the email verification token.',
    tags: [kEndpointTag.private],
  });

export const getUserDataEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetUserDataHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetUserDataHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetUserDataHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetUserDataHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetUserDataHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetUserDataHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.getUserData,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/getUserData',
    description:
      'Retrieve current user data including profile information and associated workspaces. Requires authentication.',
    tags: [kEndpointTag.private],
  });

export const sendEmailVerificationCodeEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      SendEmailVerificationCodeHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      SendEmailVerificationCodeHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      SendEmailVerificationCodeHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      SendEmailVerificationCodeHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      SendEmailVerificationCodeHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      SendEmailVerificationCodeHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.sendEmailVerificationCode,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    name: 'fimidara/users/sendEmailVerificationCode',
    description:
      "Send an email verification code to the authenticated user's email address. Requires authentication.",
    tags: [kEndpointTag.private],
  });

export const updateUserEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateUserHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateUserHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdateUserHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdateUserHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateUserHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateUserHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.updateUser,
    method: HttpEndpointMethod.Post,
    requestBody: updateUserParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateUserResponseBody,
    name: 'fimidara/users/updateUser',
    description:
      'Update user profile information such as name and email address. All fields are optional. Requires authentication.',
    tags: [kEndpointTag.private],
  });

export const userExistsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UserExistsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UserExistsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UserExistsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UserExistsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UserExistsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UserExistsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.userExists,
    method: HttpEndpointMethod.Post,
    requestBody: userExistsParams,
    requestHeaders: mfdocEndpointHttpHeaderItems.requestHeaders_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: userExistsHttpResponseBody,
    name: 'fimidara/users/userExists',
    description:
      'Check if a user account exists for the given email address. Useful for registration flow validation.',
    tags: [kEndpointTag.private],
  });

export const refreshUserTokenEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      RefreshUserTokenHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      RefreshUserTokenHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      RefreshUserTokenHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      RefreshUserTokenHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      RefreshUserTokenHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      RefreshUserTokenHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUserConstants.routes.refreshToken,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    requestBody: refreshUserTokenParams,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: loginResponseBody,
    name: 'fimidara/users/refreshToken',
    description:
      'Generate new access tokens using a valid refresh token. Used to maintain user sessions without re-authentication.',
    tags: [kEndpointTag.private],
  });

export const userEndpointsMddocParts = {user};
