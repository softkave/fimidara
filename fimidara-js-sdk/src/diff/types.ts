/**
 * Represents an external file for comparison with Fimidara files.
 * Contains the minimum required properties for file diffing operations.
 */
export type FimidaraDiffExternalFile = Pick<File, 'name' | 'lastModified'>;
