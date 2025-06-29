[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexNode](../README.md) / getNodeDirContent

# Function: getNodeDirContent()

> **getNodeDirContent**(`props`): `Promise`\<\{ `externalFilesRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `fileStatsRecord`: `Record`\<`string`, `Stats`\>; `folderStatsRecord`: `Record`\<`string`, `Stats`\>; \}\>

Retrieves directory content and converts files to Fimidara external file format.

## Parameters

### props

Configuration object

#### folderpath

`string`

Path to the directory to scan

## Returns

`Promise`\<\{ `externalFilesRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `fileStatsRecord`: `Record`\<`string`, `Stats`\>; `folderStatsRecord`: `Record`\<`string`, `Stats`\>; \}\>

Object containing folder stats, file stats, and external files record
