import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {AddFolderEndpoint} from './addFolder/types.js';
import {CountFolderContentEndpoint} from './countFolderContent/types.js';
import {DeleteFolderEndpoint} from './deleteFolder/types.js';
import {GetFolderEndpoint} from './getFolder/types.js';
import {ListFolderContentEndpoint} from './listFolderContent/types.js';
import {UpdateFolderEndpoint} from './updateFolder/types.js';

export type AddFolderHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<AddFolderEndpoint>;
export type DeleteFolderHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<DeleteFolderEndpoint>;
export type GetFolderHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetFolderEndpoint>;
export type ListFolderContentHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<ListFolderContentEndpoint>;
export type CountFolderContentHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<CountFolderContentEndpoint>;
export type UpdateFolderHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<UpdateFolderEndpoint>;

export type FoldersExportedEndpoints = {
  addFolder: AddFolderHttpEndpoint;
  deleteFolder: DeleteFolderHttpEndpoint;
  getFolder: GetFolderHttpEndpoint;
  listFolderContent: ListFolderContentHttpEndpoint;
  countFolderContent: CountFolderContentHttpEndpoint;
  updateFolder: UpdateFolderHttpEndpoint;
};
