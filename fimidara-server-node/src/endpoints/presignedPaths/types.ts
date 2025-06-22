import {ExportedHttpEndpointWithMfdocDefinition} from '../types.js';
import {GetPresignedPathsForFilesEndpoint} from './getPresignedPaths/types.js';
import {IssuePresignedPathEndpoint} from './issuePresignedPath/types.js';

export type IssuePresignedPathHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<IssuePresignedPathEndpoint>;
export type GetPresignedPathsForFilesHttpEndpoint =
  ExportedHttpEndpointWithMfdocDefinition<GetPresignedPathsForFilesEndpoint>;

export type PresignedPathsExportedEndpoints = {
  issuePresignedPath: IssuePresignedPathHttpEndpoint;
  getPresignedPathsForFiles: GetPresignedPathsForFilesHttpEndpoint;
};

export type FileMatcherPathParameters = {
  filepathOrId?: string;
};
