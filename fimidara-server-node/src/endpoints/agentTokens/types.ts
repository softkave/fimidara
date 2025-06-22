import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddAgentTokenEndpoint} from './addToken/types.js';
import {CountWorkspaceAgentTokensEndpoint} from './countWorkspaceTokens/types.js';
import {DeleteAgentTokenEndpoint} from './deleteToken/types.js';
import {EncodeAgentTokenEndpoint} from './encodeToken/types.js';
import {GetAgentTokenEndpoint} from './getToken/types.js';
import {GetWorkspaceAgentTokensEndpoint} from './getWorkspaceTokens/types.js';
import {RefreshAgentTokenEndpoint} from './refreshToken/types.js';
import {UpdateAgentTokenEndpoint} from './updateToken/types.js';

export type AddAgentTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddAgentTokenEndpoint>;
export type DeleteAgentTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteAgentTokenEndpoint>;
export type GetWorkspaceAgentTokensHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceAgentTokensEndpoint>;
export type CountWorkspaceAgentTokensHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountWorkspaceAgentTokensEndpoint>;
export type GetAgentTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetAgentTokenEndpoint>;
export type UpdateAgentTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateAgentTokenEndpoint>;
export type RefreshAgentTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<RefreshAgentTokenEndpoint>;
export type EncodeAgentTokenHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<EncodeAgentTokenEndpoint>;

export type AgentTokensExportedEndpoints = {
  addToken: AddAgentTokenHttpEndpoint;
  deleteToken: DeleteAgentTokenHttpEndpoint;
  getWorkspaceTokens: GetWorkspaceAgentTokensHttpEndpoint;
  countWorkspaceTokens: CountWorkspaceAgentTokensHttpEndpoint;
  getToken: GetAgentTokenHttpEndpoint;
  updateToken: UpdateAgentTokenHttpEndpoint;
  refreshToken: RefreshAgentTokenHttpEndpoint;
  encodeToken: EncodeAgentTokenHttpEndpoint;
};
