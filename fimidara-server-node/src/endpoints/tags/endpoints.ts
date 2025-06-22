import {kEndpointTag} from '../types.js';
import addTag from './addTag/handler.js';
import countWorkspaceTags from './countWorkspaceTags/handler.js';
import deleteTag from './deleteTag/handler.js';
import {
  addTagEndpointDefinition,
  countWorkspaceTagsEndpointDefinition,
  deleteTagEndpointDefinition,
  getTagEndpointDefinition,
  getWorkspaceTagsEndpointDefinition,
  updateTagEndpointDefinition,
} from './endpoints.mfdoc.js';
import getTag from './getTag/handler.js';
import getWorkspaceTags from './getWorkspaceTags/handler.js';
import {TagsExportedEndpoints} from './types.js';
import updateTag from './updateTag/handler.js';

export function getTagsHttpEndpoints() {
  const tagsExportedEndpoints: TagsExportedEndpoints = {
    addTag: {
      tag: [kEndpointTag.public],
      fn: addTag,
      mfdocHttpDefinition: addTagEndpointDefinition,
    },
    deleteTag: {
      tag: [kEndpointTag.public],
      fn: deleteTag,
      mfdocHttpDefinition: deleteTagEndpointDefinition,
    },
    getTag: {
      tag: [kEndpointTag.public],
      fn: getTag,
      mfdocHttpDefinition: getTagEndpointDefinition,
    },
    getWorkspaceTags: {
      tag: [kEndpointTag.public],
      fn: getWorkspaceTags,
      mfdocHttpDefinition: getWorkspaceTagsEndpointDefinition,
    },
    countWorkspaceTags: {
      tag: [kEndpointTag.public],
      fn: countWorkspaceTags,
      mfdocHttpDefinition: countWorkspaceTagsEndpointDefinition,
    },
    updateTag: {
      tag: [kEndpointTag.public],
      fn: updateTag,
      mfdocHttpDefinition: updateTagEndpointDefinition,
    },
  };
  return tagsExportedEndpoints;
}
