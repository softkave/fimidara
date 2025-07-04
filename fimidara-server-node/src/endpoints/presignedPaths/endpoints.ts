import {populateMountUnsupportedOpNoteInNotFoundError} from '../fileBackends/mountUtils.js';
import {ExportedHttpEndpoint_HandleErrorFn, kEndpointTag} from '../types.js';
import {
  getPresignedPathsForFilesEndpointDefinition,
  issuePresignedPathEndpointDefinition,
} from './endpoints.mfdoc.js';
import getPresignedPathsForFiles from './getPresignedPaths/handler.js';
import issuePresignedPath from './issuePresignedPath/handler.js';
import {PresignedPathsExportedEndpoints} from './types.js';

const handleNotFoundError: ExportedHttpEndpoint_HandleErrorFn = (
  res,
  proccessedErrors
) => {
  populateMountUnsupportedOpNoteInNotFoundError(proccessedErrors);

  // populate notes only, and defer handling to server
  return true;
};

export function getPresignedPathsHttpEndpoints() {
  const presignedPathsExportedEndpoints: PresignedPathsExportedEndpoints = {
    issuePresignedPath: {
      tag: [kEndpointTag.public],
      fn: issuePresignedPath,
      mfdocHttpDefinition: issuePresignedPathEndpointDefinition,
      handleError: handleNotFoundError,
    },
    getPresignedPathsForFiles: {
      tag: [kEndpointTag.public],
      fn: getPresignedPathsForFiles,
      mfdocHttpDefinition: getPresignedPathsForFilesEndpointDefinition,
      handleError: handleNotFoundError,
    },
  };
  return presignedPathsExportedEndpoints;
}
