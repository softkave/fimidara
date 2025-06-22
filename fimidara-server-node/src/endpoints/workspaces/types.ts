import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddWorkspaceEndpoint} from './addWorkspace/types.js';
import {CountUserWorkspacesEndpoint} from './countUserWorkspaces/types.js';
import {DeleteWorkspaceEndpoint} from './deleteWorkspace/types.js';
import {GetUserWorkspacesEndpoint} from './getUserWorkspaces/types.js';
import {GetWorkspaceEndpoint} from './getWorkspace/types.js';
import {UpdateWorkspaceEndpoint} from './updateWorkspace/types.js';

export type AddWorkspaceHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddWorkspaceEndpoint>;
export type DeleteWorkspaceHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteWorkspaceEndpoint>;
export type GetUserWorkspacesHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetUserWorkspacesEndpoint>;
export type CountUserWorkspacesHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountUserWorkspacesEndpoint>;
export type GetWorkspaceHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceEndpoint>;
export type UpdateWorkspaceHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateWorkspaceEndpoint>;

export type WorkspacesExportedEndpoints = {
  addWorkspace: AddWorkspaceHttpEndpoint;
  // deleteWorkspace: DeleteWorkspaceHttpEndpoint;
  getUserWorkspaces: GetUserWorkspacesHttpEndpoint;
  countUserWorkspaces: CountUserWorkspacesHttpEndpoint;
  getWorkspace: GetWorkspaceHttpEndpoint;
  updateWorkspace: UpdateWorkspaceHttpEndpoint;
};
