import {kEndpointTag} from '../types.js';
import addWorkspace from './addWorkspace/handler.js';
import countUserWorkspaces from './countUserWorkspaces/handler.js';
import {
  addWorkspaceEndpointDefinition,
  countUserWorkspacesEndpointDefinition,
  getUserWorkspacesEndpointDefinition,
  getWorkspaceEndpointDefinition,
  updateWorkspaceEndpointDefinition,
} from './endpoints.mfdoc.js';
import getUserWorkspaces from './getUserWorkspaces/handler.js';
import getWorkspace from './getWorkspace/handler.js';
import {WorkspacesExportedEndpoints} from './types.js';
import updateWorkspace from './updateWorkspace/handler.js';

export function getWorkspacesHttpEndpoints() {
  const workspacesExportedEndpoints: WorkspacesExportedEndpoints = {
    addWorkspace: {
      tag: [kEndpointTag.private],
      fn: addWorkspace,
      mfdocHttpDefinition: addWorkspaceEndpointDefinition,
    },
    // deleteWorkspace: {
    //   fn: deleteWorkspace,
    //   mfdocHttpDefinition: deleteWorkspaceEndpointDefinition,
    // },
    getUserWorkspaces: {
      tag: [kEndpointTag.private],
      fn: getUserWorkspaces,
      mfdocHttpDefinition: getUserWorkspacesEndpointDefinition,
    },
    countUserWorkspaces: {
      tag: [kEndpointTag.private],
      fn: countUserWorkspaces,
      mfdocHttpDefinition: countUserWorkspacesEndpointDefinition,
    },
    getWorkspace: {
      tag: [kEndpointTag.public],
      fn: getWorkspace,
      mfdocHttpDefinition: getWorkspaceEndpointDefinition,
    },
    updateWorkspace: {
      tag: [kEndpointTag.public],
      fn: updateWorkspace,
      mfdocHttpDefinition: updateWorkspaceEndpointDefinition,
    },
  };
  return workspacesExportedEndpoints;
}
