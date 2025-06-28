import {isArray, last} from 'lodash-es';
import path from 'path-browserify';

/**
 * Adds a workspace rootname to a file path or array of path segments.
 *
 * @param fPath - The file path (string) or array of path segments to prepend the rootname to
 * @param workspaceRootname - The workspace rootname (string) or array where the last element will be used as the rootname
 * @returns The path with the rootname prepended, maintaining the same type as the input
 *
 * @example
 * ```typescript
 * // String path
 * fimidaraAddRootnameToPath('src/components/Button.tsx', 'my-workspace')
 * // Returns: 'my-workspace/src/components/Button.tsx'
 *
 * // Array path
 * fimidaraAddRootnameToPath(['src', 'components', 'Button.tsx'], 'my-workspace')
 * // Returns: ['my-workspace', 'src', 'components', 'Button.tsx']
 *
 * // Using array for workspace rootname
 * fimidaraAddRootnameToPath('src/index.ts', ['workspaces', 'my-workspace'])
 * // Returns: 'my-workspace/src/index.ts'
 * ```
 */
export function fimidaraAddRootnameToPath<
  T extends string | string[] = string | string[]
>(fPath: T, workspaceRootname: string | string[]): T {
  const rootname = isArray(workspaceRootname)
    ? last(workspaceRootname)
    : workspaceRootname;

  if (isArray(fPath)) {
    return <T>[rootname, ...fPath];
  }

  return <T>path.posix.normalize(`${rootname}/${fPath}`);
}
