[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexNode](../README.md) / nodeFileToExternalFile

# Function: nodeFileToExternalFile()

> **nodeFileToExternalFile**(`props`): `Promise`\<\{ `externalFile?`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md); `stats`: `Stats`; \}\>

Defined in: [fimidara-js-sdk/src/node/nodeFileToExternalFile.ts:16](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/node/nodeFileToExternalFile.ts#L16)

Converts a Node.js file or directory to a Fimidara external file representation.

## Parameters

### props

Configuration object containing either a dirent or filepath

#### dirent?

`Pick`\<`Dirent`\<`string`\>, `"name"` \| `"parentPath"`\>

Optional Node.js Dirent object with parentPath and name

#### filepath?

`string`

Optional absolute or relative file path

## Returns

`Promise`\<\{ `externalFile?`: [`FimidaraDiffExternalFile`](../../indexBrowser/type-aliases/FimidaraDiffExternalFile.md); `stats`: `Stats`; \}\>

Promise resolving to an object containing file stats and optional external file representation

## Throws

When neither dirent nor filepath is provided
