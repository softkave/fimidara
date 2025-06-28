[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexNode](../README.md) / getNodeDirContent

# Function: getNodeDirContent()

> **getNodeDirContent**(`props`): `Promise`\<\{ `externalFilesRecord`: `Record`\<`string`, [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md)\>; `fileStatsRecord`: `Record`\<`string`, `Stats`\>; `folderStatsRecord`: `Record`\<`string`, `Stats`\>; \}\>

Defined in: [fimidara-js-sdk/src/node/getNodeDirContent.ts:14](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/node/getNodeDirContent.ts#L14)

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
