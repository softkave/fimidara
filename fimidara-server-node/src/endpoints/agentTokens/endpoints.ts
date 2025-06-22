import {kEndpointTag} from '../types.js';
import addAgentTokenEndpoint from './addToken/handler.js';
import countWorkspaceAgentTokens from './countWorkspaceTokens/handler.js';
import deleteAgentToken from './deleteToken/handler.js';
import encodeAgentToken from './encodeToken/handler.js';
import {
  addAgentTokenEndpointDefinition,
  countWorkspaceAgentTokensEndpointDefinition,
  deleteAgentTokenEndpointDefinition,
  encodeAgentTokenEndpointDefinition,
  getAgentTokenEndpointDefinition,
  getWorkspaceAgentTokensEndpointDefinition,
  refreshAgentTokenEndpointDefinition,
  updateAgentTokenEndpointDefinition,
} from './endpoints.mfdoc.js';
import getAgentToken from './getToken/handler.js';
import getWorkspaceAgentTokens from './getWorkspaceTokens/handler.js';
import refreshAgentToken from './refreshToken/handler.js';
import {AgentTokensExportedEndpoints} from './types.js';
import updateAgentToken from './updateToken/handler.js';

export function getAgentTokenHttpEndpoints() {
  const agentTokensExportedEndpoints: AgentTokensExportedEndpoints = {
    addToken: {
      tag: [kEndpointTag.public],
      fn: addAgentTokenEndpoint,
      mfdocHttpDefinition: addAgentTokenEndpointDefinition,
    },
    deleteToken: {
      tag: [kEndpointTag.public],
      fn: deleteAgentToken,
      mfdocHttpDefinition: deleteAgentTokenEndpointDefinition,
    },
    getToken: {
      tag: [kEndpointTag.public],
      fn: getAgentToken,
      mfdocHttpDefinition: getAgentTokenEndpointDefinition,
    },
    getWorkspaceTokens: {
      tag: [kEndpointTag.public],
      fn: getWorkspaceAgentTokens,
      mfdocHttpDefinition: getWorkspaceAgentTokensEndpointDefinition,
    },
    countWorkspaceTokens: {
      tag: [kEndpointTag.public],
      fn: countWorkspaceAgentTokens,
      mfdocHttpDefinition: countWorkspaceAgentTokensEndpointDefinition,
    },
    updateToken: {
      tag: [kEndpointTag.public],
      fn: updateAgentToken,
      mfdocHttpDefinition: updateAgentTokenEndpointDefinition,
    },
    refreshToken: {
      tag: [kEndpointTag.public],
      fn: refreshAgentToken,
      mfdocHttpDefinition: refreshAgentTokenEndpointDefinition,
    },
    encodeToken: {
      tag: [kEndpointTag.public],
      fn: encodeAgentToken,
      mfdocHttpDefinition: encodeAgentTokenEndpointDefinition,
    },
  };
  return agentTokensExportedEndpoints;
}
