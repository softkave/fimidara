import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {CountUserCollaborationRequestsEndpoint} from './countUserRequests/types.js';
import {CountWorkspaceCollaborationRequestsEndpoint} from './countWorkspaceRequests/types.js';
import {DeleteCollaborationRequestEndpoint} from './deleteRequest/types.js';
import {GetUserCollaborationRequestEndpoint} from './getUserRequest/types.js';
import {GetUserCollaborationRequestsEndpoint} from './getUserRequests/types.js';
import {GetWorkspaceCollaborationRequestEndpoint} from './getWorkspaceRequest/types.js';
import {GetWorkspaceCollaborationRequestsEndpoint} from './getWorkspaceRequests/types.js';
import {RespondToCollaborationRequestEndpoint} from './respondToRequest/types.js';
import {RevokeCollaborationRequestEndpoint} from './revokeRequest/types.js';
import {SendCollaborationRequestEndpoint} from './sendRequest/types.js';
import {UpdateCollaborationRequestEndpoint} from './updateRequest/types.js';

export type SendCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<SendCollaborationRequestEndpoint>;
export type DeleteCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteCollaborationRequestEndpoint>;
export type GetWorkspaceCollaborationRequestsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceCollaborationRequestsEndpoint>;
export type GetUserCollaborationRequestsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetUserCollaborationRequestsEndpoint>;
export type CountWorkspaceCollaborationRequestsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountWorkspaceCollaborationRequestsEndpoint>;
export type CountUserCollaborationRequestsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountUserCollaborationRequestsEndpoint>;
export type RespondToCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<RespondToCollaborationRequestEndpoint>;
export type RevokeCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<RevokeCollaborationRequestEndpoint>;
export type UpdateCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateCollaborationRequestEndpoint>;
export type GetUserCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetUserCollaborationRequestEndpoint>;
export type GetWorkspaceCollaborationRequestHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceCollaborationRequestEndpoint>;

export type CollaborationRequestsExportedEndpoints = {
  sendRequest: SendCollaborationRequestHttpEndpoint;
  deleteRequest: DeleteCollaborationRequestHttpEndpoint;
  getWorkspaceRequests: GetWorkspaceCollaborationRequestsHttpEndpoint;
  getUserRequests: GetUserCollaborationRequestsHttpEndpoint;
  countWorkspaceRequests: CountWorkspaceCollaborationRequestsHttpEndpoint;
  countUserRequests: CountUserCollaborationRequestsHttpEndpoint;
  respondToRequest: RespondToCollaborationRequestHttpEndpoint;
  revokeRequest: RevokeCollaborationRequestHttpEndpoint;
  updateRequest: UpdateCollaborationRequestHttpEndpoint;
  getUserRequest: GetUserCollaborationRequestHttpEndpoint;
  getWorkspaceRequest: GetWorkspaceCollaborationRequestHttpEndpoint;
};
