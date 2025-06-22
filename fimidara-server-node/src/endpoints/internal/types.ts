import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {GetUsersEndpoint} from './getUsers/types.js';
import {GetWaitlistedUsersEndpoint} from './getWaitlistedUsers/types.js';
import {GetWorkspacesEndpoint} from './getWorkspaces/types.js';
import {UpgradeWaitlistedUsersEndpoint} from './upgradeWaitlistedUsers/types.js';

export type GetWaitlistedUsersHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWaitlistedUsersEndpoint>;
export type UpgradeWaitlistedUsersHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpgradeWaitlistedUsersEndpoint>;
export type GetUsersHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetUsersEndpoint>;
export type GetWorkspacesHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspacesEndpoint>;

export type InternalsExportedEndpoints = {
  getWaitlistedUsers: GetWaitlistedUsersHttpEndpoint;
  upgradeWaitlistedUsers: UpgradeWaitlistedUsersHttpEndpoint;
  getUsers: GetUsersHttpEndpoint;
  getWorkspaces: GetWorkspacesHttpEndpoint;
};
