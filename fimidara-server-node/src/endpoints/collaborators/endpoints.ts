import {kEndpointTag} from '../types.js';
import countWorkspaceCollaborators from './countWorkspaceCollaborators/handler.js';
import {
  countWorkspaceCollaboratorsEndpointDefinition,
  getCollaboratorEndpointDefinition,
  getCollaboratorsWithoutPermissionEndpointDefinition,
  getWorkspaceCollaboratorsEndpointDefinition,
  removeCollaboratorEndpointDefinition,
} from './endpoints.mfdoc.js';
import getCollaborator from './getCollaborator/handler.js';
import getCollaboratorsWithoutPermission from './getCollaboratorsWithoutPermission/handler.js';
import getWorkspaceCollaborators from './getWorkspaceCollaborators/handler.js';
import removeCollaborator from './removeCollaborator/handler.js';
import {CollaboratorsExportedEndpoints} from './types.js';

export function getCollaboratorsHttpEndpoints() {
  const collaboratorsExportedEndpoints: CollaboratorsExportedEndpoints = {
    getCollaborator: {
      tag: [kEndpointTag.public],
      fn: getCollaborator,
      mfdocHttpDefinition: getCollaboratorEndpointDefinition,
    },
    getWorkspaceCollaborators: {
      tag: [kEndpointTag.public],
      fn: getWorkspaceCollaborators,
      mfdocHttpDefinition: getWorkspaceCollaboratorsEndpointDefinition,
    },
    countWorkspaceCollaborators: {
      tag: [kEndpointTag.public],
      fn: countWorkspaceCollaborators,
      mfdocHttpDefinition: countWorkspaceCollaboratorsEndpointDefinition,
    },
    removeCollaborator: {
      tag: [kEndpointTag.public],
      fn: removeCollaborator,
      mfdocHttpDefinition: removeCollaboratorEndpointDefinition,
    },
    getCollaboratorsWithoutPermission: {
      tag: [kEndpointTag.private],
      fn: getCollaboratorsWithoutPermission,
      mfdocHttpDefinition: getCollaboratorsWithoutPermissionEndpointDefinition,
    },
  };

  return collaboratorsExportedEndpoints;
}
