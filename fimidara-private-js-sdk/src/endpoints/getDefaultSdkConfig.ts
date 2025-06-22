/**
 * Modify this file to change the default SDK config.
 */

import {kDefaultServerURL} from '../constants.js';
import type {SdkConfig} from './SdkConfig.js';

/**
 * Default SDK config.
 */
export function getDefaultSdkConfig(): Partial<SdkConfig> {
  return {serverURL: kDefaultServerURL};
}
