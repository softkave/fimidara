import assert from 'assert';
import {isNumber} from 'lodash-es';
import {PartialDeep} from 'type-fest';
import {FimidaraEndpoints} from '../../endpoints/publicEndpoints.js';
import {GetWorkspaceSummedUsageEndpointParams} from '../../endpoints/publicTypes.js';
import {ITestVars} from '../utils.common.js';

export async function getWorkspaceSummedUsageTestExecFn(
  endpoint: FimidaraEndpoints,
  vars: ITestVars,
  props: PartialDeep<GetWorkspaceSummedUsageEndpointParams> = {}
) {
  const input: GetWorkspaceSummedUsageEndpointParams = {
    ...(props as any),
  };
  const result = await endpoint.usageRecords.getWorkspaceSummedUsage(input);
  result.records.forEach(record => {
    assert.ok(record.workspaceId === vars.workspaceId);
  });
}

export async function getUsageCostsTestExecFn(endpoint: FimidaraEndpoints) {
  const result = await endpoint.usageRecords.getUsageCosts();
  assert.ok(isNumber(result.costs['bin']));
  assert.ok(isNumber(result.costs['bout']));
  assert.ok(isNumber(result.costs['storage']));
  assert.ok(isNumber(result.costs['storageEver']));
  return result;
}
