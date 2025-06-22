import {kEndpointTag} from '../types.js';
import addPermissionGroup from './addPermissionGroup/handler.js';
import assignPermissionGroups from './assignPermissionGroups/handler.js';
import countWorkspacePermissionGroups from './countWorkspacePermissionGroups/handler.js';
import deletePermissionGroup from './deletePermissionGroup/handler.js';
import {
  addPermissionGroupEndpointDefinition,
  assignPermissionGroupsEndpointDefinition,
  countWorkspacePermissionGroupsEndpointDefinition,
  deletePermissionGroupEndpointDefinition,
  getEntityAssignedPermissionGroupsEndpointDefinition,
  getPermissionGroupEndpointDefinition,
  getWorkspacePermissionGroupsEndpointDefinition,
  unassignPermissionGroupsEndpointDefinition,
  updatePermissionGroupEndpointDefinition,
} from './endpoints.mfdoc.js';
import getEntityAssignedPermissionGroups from './getEntityAssignedPermissionGroups/handler.js';
import getPermissionGroup from './getPermissionGroup/handler.js';
import getWorkspacePermissionGroups from './getWorkspacePermissionGroups/handler.js';
import {PermissionGroupsExportedEndpoints} from './types.js';
import updatePermissionGroup from './udpatePermissionGroup/handler.js';
import unassignPermissionGroups from './unassignPermissionGroups/handler.js';

export function getPermissionGroupsHttpEndpoints() {
  const permissionGroupsExportedEndpoints: PermissionGroupsExportedEndpoints = {
    addPermissionGroup: {
      tag: [kEndpointTag.public],
      fn: addPermissionGroup,
      mfdocHttpDefinition: addPermissionGroupEndpointDefinition,
    },
    assignPermissionGroups: {
      tag: [kEndpointTag.public],
      fn: assignPermissionGroups,
      mfdocHttpDefinition: assignPermissionGroupsEndpointDefinition,
    },
    unassignPermissionGroups: {
      tag: [kEndpointTag.public],
      fn: unassignPermissionGroups,
      mfdocHttpDefinition: unassignPermissionGroupsEndpointDefinition,
    },
    deletePermissionGroup: {
      tag: [kEndpointTag.public],
      fn: deletePermissionGroup,
      mfdocHttpDefinition: deletePermissionGroupEndpointDefinition,
    },
    getPermissionGroup: {
      tag: [kEndpointTag.public],
      fn: getPermissionGroup,
      mfdocHttpDefinition: getPermissionGroupEndpointDefinition,
    },
    getEntityAssignedPermissionGroups: {
      tag: [kEndpointTag.public],
      fn: getEntityAssignedPermissionGroups,
      mfdocHttpDefinition: getEntityAssignedPermissionGroupsEndpointDefinition,
    },
    getWorkspacePermissionGroups: {
      tag: [kEndpointTag.public],
      fn: getWorkspacePermissionGroups,
      mfdocHttpDefinition: getWorkspacePermissionGroupsEndpointDefinition,
    },
    countWorkspacePermissionGroups: {
      tag: [kEndpointTag.public],
      fn: countWorkspacePermissionGroups,
      mfdocHttpDefinition: countWorkspacePermissionGroupsEndpointDefinition,
    },
    updatePermissionGroup: {
      tag: [kEndpointTag.public],
      fn: updatePermissionGroup,
      mfdocHttpDefinition: updatePermissionGroupEndpointDefinition,
    },
  };
  return permissionGroupsExportedEndpoints;
}
