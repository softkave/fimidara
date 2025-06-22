import {FimidaraPermissionAction} from '../../definitions/permissionItem.js';
import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddPermissionItemsEndpoint} from './addItems/types.js';
import {DeletePermissionItemsEndpoint} from './deleteItems/types.js';
import {ResolveEntityPermissionsEndpoint} from './resolveEntityPermissions/types.js';

export interface PermissionItemInputTarget {
  targetId?: string | string[];
  filepath?: string | string[];
  folderpath?: string | string[];
  workspaceRootname?: string;
}

export interface ResolvedEntityPermissionItemTarget {
  targetId?: string;
  filepath?: string;
  folderpath?: string;
  workspaceRootname?: string;
}

export interface PermissionItemInput extends PermissionItemInputTarget {
  action: FimidaraPermissionAction | FimidaraPermissionAction[];
  access: boolean;
  entityId: string | string[];
}

export type AddPermissionItemsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddPermissionItemsEndpoint>;
export type DeletePermissionItemsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeletePermissionItemsEndpoint>;
export type ResolveEntityPermissionsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<ResolveEntityPermissionsEndpoint>;

export type PermissionItemsExportedEndpoints = {
  addItems: AddPermissionItemsHttpEndpoint;
  deleteItems: DeletePermissionItemsHttpEndpoint;
  resolveEntityPermissions: ResolveEntityPermissionsHttpEndpoint;
};
