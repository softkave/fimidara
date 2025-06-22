import {kEndpointTag} from '../types.js';
import countWorkspaceSummedUsage from './countWorkspaceSummedUsage/handler.js';
import {
  countWorkspaceSummedUsageEndpointDefinition,
  getUsageCostsEndpointDefinition,
  getWorkspaceSummedUsageEndpointDefinition,
} from './endpoints.mfdoc.js';
import getUsageCosts from './getUsageCosts/handler.js';
import getWorkspaceSummedUsage from './getWorkspaceSummedUsage/handler.js';
import {UsageRecordsExportedEndpoints} from './types.js';

export function getUsageRecordsHttpEndpoints() {
  const usageRecordsExportedEndpoints: UsageRecordsExportedEndpoints = {
    getUsageCosts: {
      tag: [kEndpointTag.public],
      fn: getUsageCosts,
      mfdocHttpDefinition: getUsageCostsEndpointDefinition,
    },
    getWorkspaceSummedUsage: {
      tag: [kEndpointTag.public],
      fn: getWorkspaceSummedUsage,
      mfdocHttpDefinition: getWorkspaceSummedUsageEndpointDefinition,
    },
    countWorkspaceSummedUsage: {
      tag: [kEndpointTag.public],
      fn: countWorkspaceSummedUsage,
      mfdocHttpDefinition: countWorkspaceSummedUsageEndpointDefinition,
    },
  };
  return usageRecordsExportedEndpoints;
}
