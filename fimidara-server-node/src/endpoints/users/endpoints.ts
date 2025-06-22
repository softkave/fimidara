import {kEndpointTag} from '../types.js';
import changePasswordWithCurrentPassword from './changePasswordWithCurrentPassword/handler.js';
import changePasswordWithToken from './changePasswordWithToken/handler.js';
import confirmEmailAddress from './confirmEmailAddress/handler.js';
import {
  changePasswordWithCurrentPasswordEndpointDefinition,
  changePasswordWithTokenEndpointDefinition,
  confirmEmailAddressEndpointDefinition,
  forgotPasswordEndpointDefinition,
  getUserDataEndpointDefinition,
  loginEndpointDefinition,
  loginWithOAuthEndpointDefinition,
  refreshUserTokenEndpointDefinition,
  sendEmailVerificationCodeEndpointDefinition,
  signupEndpointDefinition,
  signupWithOAuthEndpointDefinition,
  updateUserEndpointDefinition,
  userExistsEndpointDefinition,
} from './endpoint.mfdoc.js';
import forgotPassword from './forgotPassword/handler.js';
import getUserData from './getUserData/handler.js';
import login from './login/handler.js';
import loginWithOAuth from './loginWithOauth/handler.js';
import refreshUserToken from './refreshToken/handler.js';
import sendEmailVerificationCode from './sendEmailVerificationCode/handler.js';
import signup from './signup/handler.js';
import signupWithOAuth from './signupWithOAuth/handler.js';
import {UsersExportedEndpoints} from './types.js';
import updateUser from './updateUser/handler.js';
import userExists from './userExists/handler.js';

export function getUsersHttpEndpoints() {
  const usersExportedEndpoints: UsersExportedEndpoints = {
    getUserData: {
      tag: [kEndpointTag.private],
      fn: getUserData,
      mfdocHttpDefinition: getUserDataEndpointDefinition,
    },
    updateUser: {
      tag: [kEndpointTag.private],
      fn: updateUser,
      mfdocHttpDefinition: updateUserEndpointDefinition,
    },
    changePasswordWithCurrentPassword: {
      tag: [kEndpointTag.private],
      fn: changePasswordWithCurrentPassword,
      mfdocHttpDefinition: changePasswordWithCurrentPasswordEndpointDefinition,
    },
    changePasswordWithToken: {
      tag: [kEndpointTag.private],
      fn: changePasswordWithToken,
      mfdocHttpDefinition: changePasswordWithTokenEndpointDefinition,
    },
    confirmEmailAddress: {
      tag: [kEndpointTag.private],
      fn: confirmEmailAddress,
      mfdocHttpDefinition: confirmEmailAddressEndpointDefinition,
    },
    forgotPassword: {
      tag: [kEndpointTag.private],
      fn: forgotPassword,
      mfdocHttpDefinition: forgotPasswordEndpointDefinition,
    },
    login: {
      tag: [kEndpointTag.private],
      fn: login,
      mfdocHttpDefinition: loginEndpointDefinition,
    },
    sendEmailVerificationCode: {
      tag: [kEndpointTag.private],
      fn: sendEmailVerificationCode,
      mfdocHttpDefinition: sendEmailVerificationCodeEndpointDefinition,
    },
    refreshToken: {
      tag: [kEndpointTag.private],
      fn: refreshUserToken,
      mfdocHttpDefinition: refreshUserTokenEndpointDefinition,
    },
    signup: {
      tag: [kEndpointTag.private],
      fn: signup,
      mfdocHttpDefinition: signupEndpointDefinition,
    },
    userExists: {
      tag: [kEndpointTag.private],
      fn: userExists,
      mfdocHttpDefinition: userExistsEndpointDefinition,
    },
    loginWithOAuth: {
      tag: [kEndpointTag.private],
      fn: loginWithOAuth,
      mfdocHttpDefinition: loginWithOAuthEndpointDefinition,
    },
    signupWithOAuth: {
      tag: [kEndpointTag.private],
      fn: signupWithOAuth,
      mfdocHttpDefinition: signupWithOAuthEndpointDefinition,
    },
  };

  return usersExportedEndpoints;
}
