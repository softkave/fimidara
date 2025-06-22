import {kEndpointTag} from '../types.js';
import {getResourcesEndpointDefinition} from './endpoints.mfdoc.js';
import getResources from './getResources/handler.js';
import {ResourcesExportedEndpoints} from './types.js';

export function getResourcesHttpEndpoints() {
  const resourcesExportedEndpoints: ResourcesExportedEndpoints = {
    getResources: {
      tag: [kEndpointTag.public],
      fn: getResources,
      mfdocHttpDefinition: getResourcesEndpointDefinition,
    },
  };
  return resourcesExportedEndpoints;
}
