import {kEndpointTag} from '../types.js';
import addPermissionItems from './addItems/handler.js';
import deletePermissionItems from './deleteItems/handler.js';
import {
  addPermissionItemsEndpointDefinition,
  deletePermissionItemsEndpointDefinition,
  resolveEntityPermissionsEndpointDefinition,
} from './endpoints.mfdoc.js';
import resolveEntityPermissions from './resolveEntityPermissions/handler.js';
import {PermissionItemsExportedEndpoints} from './types.js';

export function getPermissionItemsHttpEndpoints() {
  const permissionItemsExportedEndpoints: PermissionItemsExportedEndpoints = {
    addItems: {
      tag: [kEndpointTag.public],
      fn: addPermissionItems,
      mfdocHttpDefinition: addPermissionItemsEndpointDefinition,
    },
    deleteItems: {
      tag: [kEndpointTag.public],
      fn: deletePermissionItems,
      mfdocHttpDefinition: deletePermissionItemsEndpointDefinition,
    },
    resolveEntityPermissions: {
      tag: [kEndpointTag.public],
      fn: resolveEntityPermissions,
      mfdocHttpDefinition: resolveEntityPermissionsEndpointDefinition,
    },
  };
  return permissionItemsExportedEndpoints;
}
