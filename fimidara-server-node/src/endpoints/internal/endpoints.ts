import {kEndpointTag} from '../types.js';
import {
  getUsersEndpointDefinition,
  getWaitlistedUsersEndpointDefinition,
  getWorkspacesEndpointDefinition,
  upgradeWaitlistedUsersEndpointDefinition,
} from './endpoints.mfdoc.js';
import getUsers from './getUsers/handler.js';
import getWaitlistedUsers from './getWaitlistedUsers/handler.js';
import getWorkspaces from './getWorkspaces/handler.js';
import {InternalsExportedEndpoints} from './types.js';
import upgradeWaitlistedUsers from './upgradeWaitlistedUsers/handler.js';

export function getInternalsHttpEndpoints() {
  const internalsExportedEndpoints: InternalsExportedEndpoints = {
    getWaitlistedUsers: {
      tag: [kEndpointTag.private],
      fn: getWaitlistedUsers,
      mfdocHttpDefinition: getWaitlistedUsersEndpointDefinition,
    },
    upgradeWaitlistedUsers: {
      tag: [kEndpointTag.private],
      fn: upgradeWaitlistedUsers,
      mfdocHttpDefinition: upgradeWaitlistedUsersEndpointDefinition,
    },
    getUsers: {
      tag: [kEndpointTag.private],
      fn: getUsers,
      mfdocHttpDefinition: getUsersEndpointDefinition,
    },
    getWorkspaces: {
      tag: [kEndpointTag.private],
      fn: getWorkspaces,
      mfdocHttpDefinition: getWorkspacesEndpointDefinition,
    },
  };
  return internalsExportedEndpoints;
}
