[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexNode](../README.md) / diffNodeFiles

# Function: diffNodeFiles()

> **diffNodeFiles**\<`TFimidaraFile`\>(`props`): `Promise`\<\{ `externalFilesRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `fileStatsRecord`: `Record`\<`string`, `Stats`\>; `folderStatsRecord`: `Record`\<`string`, `Stats`\>; `newExternalFileList`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)[]; `newExternalFileRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `newFimidaraFileList`: `TFimidaraFile`[]; `newFimidaraFileRecord`: `Record`\<`string`, `TFimidaraFile`\>; `unmodifiedExternalFileList`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)[]; `unmodifiedExternalFileRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `unmodifiedFimidaraFileList`: `TFimidaraFile`[]; `unmodifiedFimidaraFileRecord`: `Record`\<`string`, `TFimidaraFile`\>; `updatedExternalFileList`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)[]; `updatedExternalFileRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `updatedFimidaraFileList`: `TFimidaraFile`[]; `updatedFimidaraFileRecord`: `Record`\<`string`, `TFimidaraFile`\>; \}\>

Compares local Node.js filesystem content with Fimidara files to identify differences

## Type Parameters

### TFimidaraFile

`TFimidaraFile` *extends* `Pick`\<[`File`](../../indexBrowser/type-aliases/File.md), `"lastUpdatedAt"` \| `"name"` \| `"ext"`\> = `Pick`\<[`File`](../../indexBrowser/type-aliases/File.md), `"lastUpdatedAt"` \| `"name"` \| `"ext"`\>

Type extending FimidaraFile with required properties

## Parameters

### props

`object` & `Partial`\<\{ `externalFilesRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `fileStatsRecord`: `Record`\<`string`, `Stats`\>; `folderStatsRecord`: `Record`\<`string`, `Stats`\>; \}\>

Configuration object containing folder path and Fimidara files

## Returns

`Promise`\<\{ `externalFilesRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `fileStatsRecord`: `Record`\<`string`, `Stats`\>; `folderStatsRecord`: `Record`\<`string`, `Stats`\>; `newExternalFileList`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)[]; `newExternalFileRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `newFimidaraFileList`: `TFimidaraFile`[]; `newFimidaraFileRecord`: `Record`\<`string`, `TFimidaraFile`\>; `unmodifiedExternalFileList`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)[]; `unmodifiedExternalFileRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `unmodifiedFimidaraFileList`: `TFimidaraFile`[]; `unmodifiedFimidaraFileRecord`: `Record`\<`string`, `TFimidaraFile`\>; `updatedExternalFileList`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)[]; `updatedExternalFileRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `updatedFimidaraFileList`: `TFimidaraFile`[]; `updatedFimidaraFileRecord`: `Record`\<`string`, `TFimidaraFile`\>; \}\>

Promise resolving to directory content and diff results
