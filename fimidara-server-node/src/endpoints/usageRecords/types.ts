import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {CountWorkspaceSummedUsageEndpoint} from './countWorkspaceSummedUsage/types.js';
import {GetUsageCostsEndpoint} from './getUsageCosts/types.js';
import {GetWorkspaceSummedUsageEndpoint} from './getWorkspaceSummedUsage/types.js';

export type GetUsageCostsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetUsageCostsEndpoint>;
export type GetWorkspaceSummedUsageHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceSummedUsageEndpoint>;
export type CountWorkspaceSummedUsageHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountWorkspaceSummedUsageEndpoint>;

export type UsageRecordsExportedEndpoints = {
  getUsageCosts: GetUsageCostsHttpEndpoint;
  getWorkspaceSummedUsage: GetWorkspaceSummedUsageHttpEndpoint;
  countWorkspaceSummedUsage: CountWorkspaceSummedUsageHttpEndpoint;
};
