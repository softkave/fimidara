import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddFileBackendConfigEndpoint} from './addConfig/types.js';
import {AddFileBackendMountEndpoint} from './addMount/types.js';
import {CountFileBackendConfigsEndpoint} from './countConfigs/types.js';
import {CountFileBackendMountsEndpoint} from './countMounts/types.js';
import {DeleteFileBackendConfigEndpoint} from './deleteConfig/types.js';
import {DeleteFileBackendMountEndpoint} from './deleteMount/types.js';
import {GetFileBackendConfigEndpoint} from './getConfig/types.js';
import {GetFileBackendConfigsEndpoint} from './getConfigs/types.js';
import {GetFileBackendMountEndpoint} from './getMount/types.js';
import {GetFileBackendMountsEndpoint} from './getMounts/types.js';
import {ResolveFileBackendMountsEndpoint} from './resolveMounts/types.js';
import {UpdateFileBackendConfigEndpoint} from './updateConfig/types.js';
import {UpdateFileBackendMountEndpoint} from './updateMount/types.js';

export type AddFileBackendMountHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddFileBackendMountEndpoint>;
export type DeleteFileBackendMountHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteFileBackendMountEndpoint>;
export type GetFileBackendMountsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetFileBackendMountsEndpoint>;
export type CountFileBackendMountsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountFileBackendMountsEndpoint>;
export type GetFileBackendMountHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetFileBackendMountEndpoint>;
export type UpdateFileBackendMountHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateFileBackendMountEndpoint>;
export type ResolveFileBackendMountsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<ResolveFileBackendMountsEndpoint>;

export type AddFileBackendConfigHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddFileBackendConfigEndpoint>;
export type DeleteFileBackendConfigHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteFileBackendConfigEndpoint>;
export type GetFileBackendConfigsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetFileBackendConfigsEndpoint>;
export type CountFileBackendConfigsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountFileBackendConfigsEndpoint>;
export type GetFileBackendConfigHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetFileBackendConfigEndpoint>;
export type UpdateFileBackendConfigHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateFileBackendConfigEndpoint>;

export type FileBackendsExportedEndpoints = {
  addMount: AddFileBackendMountHttpEndpoint;
  deleteMount: DeleteFileBackendMountHttpEndpoint;
  getMounts: GetFileBackendMountsHttpEndpoint;
  countMounts: CountFileBackendMountsHttpEndpoint;
  getMount: GetFileBackendMountHttpEndpoint;
  updateMount: UpdateFileBackendMountHttpEndpoint;
  resolveMounts: ResolveFileBackendMountsHttpEndpoint;

  addConfig: AddFileBackendConfigHttpEndpoint;
  deleteConfig: DeleteFileBackendConfigHttpEndpoint;
  getConfigs: GetFileBackendConfigsHttpEndpoint;
  countConfigs: CountFileBackendConfigsHttpEndpoint;
  getConfig: GetFileBackendConfigHttpEndpoint;
  updateConfig: UpdateFileBackendConfigHttpEndpoint;
};
