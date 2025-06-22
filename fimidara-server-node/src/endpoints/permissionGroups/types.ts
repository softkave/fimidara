import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddPermissionGroupEndpoint} from './addPermissionGroup/types.js';
import {AssignPermissionGroupsEndpoint} from './assignPermissionGroups/types.js';
import {CountWorkspacePermissionGroupsEndpoint} from './countWorkspacePermissionGroups/types.js';
import {DeletePermissionGroupEndpoint} from './deletePermissionGroup/types.js';
import {GetEntityAssignedPermissionGroupsEndpoint} from './getEntityAssignedPermissionGroups/types.js';
import {GetPermissionGroupEndpoint} from './getPermissionGroup/types.js';
import {GetWorkspacePermissionGroupsEndpoint} from './getWorkspacePermissionGroups/types.js';
import {UpdatePermissionGroupEndpoint} from './udpatePermissionGroup/types.js';
import {UnassignPermissionGroupsEndpoint} from './unassignPermissionGroups/types.js';

export type AddPermissionGroupHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddPermissionGroupEndpoint>;
export type DeletePermissionGroupHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeletePermissionGroupEndpoint>;
export type GetWorkspacePermissionGroupsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspacePermissionGroupsEndpoint>;
export type GetPermissionGroupHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetPermissionGroupEndpoint>;
export type UpdatePermissionGroupHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdatePermissionGroupEndpoint>;
export type CountWorkspacePermissionGroupsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountWorkspacePermissionGroupsEndpoint>;
export type AssignPermissionGroupsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AssignPermissionGroupsEndpoint>;
export type UnassignPermissionGroupsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UnassignPermissionGroupsEndpoint>;
export type GetEntityAssignedPermissionGroupsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetEntityAssignedPermissionGroupsEndpoint>;

export type PermissionGroupsExportedEndpoints = {
  addPermissionGroup: AddPermissionGroupHttpEndpoint;
  deletePermissionGroup: DeletePermissionGroupHttpEndpoint;
  getWorkspacePermissionGroups: GetWorkspacePermissionGroupsHttpEndpoint;
  getPermissionGroup: GetPermissionGroupHttpEndpoint;
  updatePermissionGroup: UpdatePermissionGroupHttpEndpoint;
  countWorkspacePermissionGroups: CountWorkspacePermissionGroupsHttpEndpoint;
  assignPermissionGroups: AssignPermissionGroupsHttpEndpoint;
  unassignPermissionGroups: UnassignPermissionGroupsHttpEndpoint;
  getEntityAssignedPermissionGroups: GetEntityAssignedPermissionGroupsHttpEndpoint;
};
