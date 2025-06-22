import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddTagEndpoint} from './addTag/types.js';
import {CountWorkspaceTagsEndpoint} from './countWorkspaceTags/types.js';
import {DeleteTagEndpoint} from './deleteTag/types.js';
import {GetTagEndpoint} from './getTag/types.js';
import {GetWorkspaceTagsEndpoint} from './getWorkspaceTags/types.js';
import {UpdateTagEndpoint} from './updateTag/types.js';

export type AddTagHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddTagEndpoint>;
export type DeleteTagHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteTagEndpoint>;
export type GetWorkspaceTagsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetWorkspaceTagsEndpoint>;
export type CountWorkspaceTagsHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountWorkspaceTagsEndpoint>;
export type GetTagHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetTagEndpoint>;
export type UpdateTagHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateTagEndpoint>;

export type TagsExportedEndpoints = {
  addTag: AddTagHttpEndpoint;
  deleteTag: DeleteTagHttpEndpoint;
  getWorkspaceTags: GetWorkspaceTagsHttpEndpoint;
  countWorkspaceTags: CountWorkspaceTagsHttpEndpoint;
  getTag: GetTagHttpEndpoint;
  updateTag: UpdateTagHttpEndpoint;
};
