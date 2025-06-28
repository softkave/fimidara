import {fimidaraAddRootnameToPath} from './fimidaraAddRootnameToPath.js';

/**
 * Converts a file object with a namepath array to a string path representation.
 *
 * @param file - Object containing a namepath array representing the folder structure
 * @param rootname - Optional root name to prepend to the path
 * @returns The folder path as a string, with rootname prepended if provided
 *
 * @example
 * ```typescript
 * const folder = { namepath: ['documents', 'work', 'reports'] };
 * stringifyFimidaraFolderpath(folder); // Returns: "documents/work/reports"
 * stringifyFimidaraFolderpath(folder, 'workspace-rootname'); // Returns: "workspace-rootname/documents/work/reports"
 * ```
 */
export function stringifyFimidaraFolderpath(
  file: {namepath: string[]},
  rootname?: string
) {
  const name = file.namepath.join('/');
  return rootname ? fimidaraAddRootnameToPath(name, rootname) : name;
}
