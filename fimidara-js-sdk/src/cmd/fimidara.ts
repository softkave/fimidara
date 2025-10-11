import assert from 'assert';
import {FimidaraEndpoints} from '../indexIsomorphic.js';
import {IFimidaraCmdOpts} from './types.js';

export function getFimidara(opts: IFimidaraCmdOpts) {
  assert.ok(opts.authToken, 'authToken not provided');
  return new FimidaraEndpoints({
    authToken: opts.authToken,
    serverURL: opts.serverURL,
  });
}
