import {populateMountUnsupportedOpNoteInNotFoundError} from '../fileBackends/mountUtils.js';
import {ExportedHttpEndpoint_HandleErrorFn, kEndpointTag} from '../types.js';
import addFolder from './addFolder/handler.js';
import countFolderContent from './countFolderContent/handler.js';
import deleteFolder from './deleteFolder/handler.js';
import {
  addFolderEndpointDefinition,
  countFolderContentEndpointDefinition,
  deleteFolderEndpointDefinition,
  getFolderEndpointDefinition,
  listFolderContentEndpointDefinition,
  updateFolderEndpointDefinition,
} from './endpoints.mfdoc.js';
import getFolder from './getFolder/handler.js';
import listFolderContent from './listFolderContent/handler.js';
import {FoldersExportedEndpoints} from './types.js';
import updateFolder from './updateFolder/handler.js';

const handleNotFoundError: ExportedHttpEndpoint_HandleErrorFn = (
  res,
  proccessedErrors
) => {
  populateMountUnsupportedOpNoteInNotFoundError(proccessedErrors);

  // populate notes only, and defer handling to server
  return true;
};

export function getFoldersHttpEndpoints() {
  const foldersExportedEndpoints: FoldersExportedEndpoints = {
    addFolder: {
      tag: [kEndpointTag.public],
      fn: addFolder,
      mfdocHttpDefinition: addFolderEndpointDefinition,
      handleError: handleNotFoundError,
    },
    deleteFolder: {
      tag: [kEndpointTag.public],
      fn: deleteFolder,
      mfdocHttpDefinition: deleteFolderEndpointDefinition,
      handleError: handleNotFoundError,
    },
    getFolder: {
      tag: [kEndpointTag.public],
      fn: getFolder,
      mfdocHttpDefinition: getFolderEndpointDefinition,
      handleError: handleNotFoundError,
    },
    listFolderContent: {
      tag: [kEndpointTag.public],
      fn: listFolderContent,
      mfdocHttpDefinition: listFolderContentEndpointDefinition,
      handleError: handleNotFoundError,
    },
    countFolderContent: {
      tag: [kEndpointTag.public],
      fn: countFolderContent,
      mfdocHttpDefinition: countFolderContentEndpointDefinition,
      handleError: handleNotFoundError,
    },
    updateFolder: {
      tag: [kEndpointTag.public],
      fn: updateFolder,
      mfdocHttpDefinition: updateFolderEndpointDefinition,
      handleError: handleNotFoundError,
    },
  };

  return foldersExportedEndpoints;
}
