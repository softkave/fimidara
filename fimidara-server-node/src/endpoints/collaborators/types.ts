import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {CountWorkspaceCollaboratorsEndpoint} from './countWorkspaceCollaborators/types.js';
import {GetCollaboratorEndpoint} from './getCollaborator/types.js';
import {GetCollaboratorsWithoutPermissionEndpoint} from './getCollaboratorsWithoutPermission/types.js';
import {GetWorkspaceCollaboratorsEndpoint} from './getWorkspaceCollaborators/types.js';
import {RemoveCollaboratorEndpoint} from './removeCollaborator/types.js';

export type GetCollaboratorHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetCollaboratorEndpoint>;
export type GetWorkspaceCollaboratorsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceCollaboratorsEndpoint>;
export type CountWorkspaceCollaboratorsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountWorkspaceCollaboratorsEndpoint>;
export type RemoveCollaboratorHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<RemoveCollaboratorEndpoint>;
export type GetCollaboratorsWithoutPermissionHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetCollaboratorsWithoutPermissionEndpoint>;

export type CollaboratorsExportedEndpoints = {
  getCollaborator: GetCollaboratorHttpEndpoint;
  getWorkspaceCollaborators: GetWorkspaceCollaboratorsHttpEndpoint;
  countWorkspaceCollaborators: CountWorkspaceCollaboratorsHttpEndpoint;
  removeCollaborator: RemoveCollaboratorHttpEndpoint;
  getCollaboratorsWithoutPermission: GetCollaboratorsWithoutPermissionHttpEndpoint;
};
