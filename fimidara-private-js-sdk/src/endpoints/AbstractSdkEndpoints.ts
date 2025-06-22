/**
 * Do not modify in generated SDK.
 */

import {MfdocEndpointsBase} from 'mfdoc-js-sdk-base';
import {getDefaultSdkConfig} from './getDefaultSdkConfig.js';
import type {SdkConfig} from './SdkConfig.js';

export abstract class AbstractSdkEndpoints<
  TConfig extends SdkConfig = SdkConfig,
> extends MfdocEndpointsBase<TConfig> {
  constructor(
    config: TConfig,
    inheritConfigFrom?: MfdocEndpointsBase<TConfig>,
  ) {
    super({...getDefaultSdkConfig(), ...config}, inheritConfigFrom);
  }
}
