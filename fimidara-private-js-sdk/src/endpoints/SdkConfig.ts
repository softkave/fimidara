/**
 * Modify this file to change the SDK config.
 */

import type {IRefreshAuthToken, MfdocJsConfigBase} from 'mfdoc-js-sdk-base';

export type FimidaraJsConfigAuthToken = string | IRefreshAuthToken;

export interface SdkConfig extends MfdocJsConfigBase {
  authToken?: FimidaraJsConfigAuthToken;
}
