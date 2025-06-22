import {EmptyObject} from 'softkave-js-utils';
import {
  ExportedHttpEndpointWithMfdocDefinition,
  HttpEndpointRequestHeaders_ContentType,
  HttpEndpointRequestHeaders_InterServerAuth,
  HttpEndpointResponseHeaders_ContentType_ContentLength,
} from '../types.js';
import {ChangePasswordWithCurrentPasswordEndpoint} from './changePasswordWithCurrentPassword/types.js';
import {ChangePasswordWithTokenEndpoint} from './changePasswordWithToken/types.js';
import {ConfirmEmailAddressEndpoint} from './confirmEmailAddress/types.js';
import {ForgotPasswordEndpoint} from './forgotPassword/types.js';
import {GetUserDataEndpoint} from './getUserData/types.js';
import {LoginEndpoint, LoginResult} from './login/types.js';
import {
  LoginWithOAuthEndpoint,
  LoginWithOAuthEndpointParams,
} from './loginWithOauth/types.js';
import {RefreshUserTokenEndpoint} from './refreshToken/types.js';
import {SendEmailVerificationCodeEndpoint} from './sendEmailVerificationCode/types.js';
import {SignupEndpoint} from './signup/types.js';
import {
  SignupWithOAuthEndpoint,
  SignupWithOAuthEndpointParams,
} from './signupWithOAuth/types.js';
import {UpdateUserEndpoint} from './updateUser/types.js';
import {UserExistsEndpoint} from './userExists/types.js';

export type SignupHttpEndpoint = ExportedHttpEndpointWithMfdocDefinition<
  SignupEndpoint,
  HttpEndpointRequestHeaders_ContentType
>;
export type LoginHttpEndpoint = ExportedHttpEndpointWithMfdocDefinition<
  LoginEndpoint,
  HttpEndpointRequestHeaders_ContentType
>;
export type ForgotPasswordHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<
    ForgotPasswordEndpoint,
    HttpEndpointRequestHeaders_ContentType
  >;
export type ChangePasswordWithCurrentPasswordHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<ChangePasswordWithCurrentPasswordEndpoint>;
export type ChangePasswordWithTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<ChangePasswordWithTokenEndpoint>;
export type UpdateUserHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateUserEndpoint>;
export type GetUserDataHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetUserDataEndpoint>;
export type UserExistsHttpEndpoint = ExportedHttpEndpointWithMfdocDefinition<
  UserExistsEndpoint,
  HttpEndpointRequestHeaders_ContentType
>;
export type ConfirmEmailAddressHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<ConfirmEmailAddressEndpoint>;
export type SendEmailVerificationCodeHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<SendEmailVerificationCodeEndpoint>;
export type RefreshUserTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<RefreshUserTokenEndpoint>;
export type LoginWithOAuthHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<
    LoginWithOAuthEndpoint,
    HttpEndpointRequestHeaders_ContentType &
      HttpEndpointRequestHeaders_InterServerAuth,
    /** TPathParameters */ EmptyObject,
    /** TQuery */ EmptyObject,
    /** TRequestBody */ LoginWithOAuthEndpointParams,
    /** TResponseHeaders */ HttpEndpointResponseHeaders_ContentType_ContentLength,
    /** TResponseBody */ LoginResult,
    /** TSdkparams */ LoginWithOAuthEndpointParams & {
      interServerAuthSecret: string;
    }
  >;
export type SignupWithOAuthHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<
    SignupWithOAuthEndpoint,
    HttpEndpointRequestHeaders_ContentType &
      HttpEndpointRequestHeaders_InterServerAuth,
    /** TPathParameters */ EmptyObject,
    /** TQuery */ EmptyObject,
    /** TRequestBody */ SignupWithOAuthEndpointParams,
    /** TResponseHeaders */ HttpEndpointResponseHeaders_ContentType_ContentLength,
    /** TResponseBody */ LoginResult,
    /** TSdkparams */ SignupWithOAuthEndpointParams & {
      interServerAuthSecret: string;
    }
  >;

export type UsersExportedEndpoints = {
  updateUser: UpdateUserHttpEndpoint;
  getUserData: GetUserDataHttpEndpoint;
  signup: SignupHttpEndpoint;
  login: LoginHttpEndpoint;
  forgotPassword: ForgotPasswordHttpEndpoint;
  changePasswordWithCurrentPassword: ChangePasswordWithCurrentPasswordHttpEndpoint;
  changePasswordWithToken: ChangePasswordWithTokenHttpEndpoint;
  userExists: UserExistsHttpEndpoint;
  confirmEmailAddress: ConfirmEmailAddressHttpEndpoint;
  sendEmailVerificationCode: SendEmailVerificationCodeHttpEndpoint;
  refreshToken: RefreshUserTokenHttpEndpoint;
  loginWithOAuth: LoginWithOAuthHttpEndpoint;
  signupWithOAuth: SignupWithOAuthHttpEndpoint;
};
