[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetPresignedPathsForFilesEndpointParams

# Type Alias: GetPresignedPathsForFilesEndpointParams

> **GetPresignedPathsForFilesEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2401](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2401)

## Properties

### files?

> `optional` **files**: [`FileMatcher`](FileMatcher.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2405](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2405)

List of files to generate presigned paths for. Each file can be identified by either filepath or fileId

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2413](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2413)

ID of the workspace containing the files. If not provided, uses the default workspace

#### Example

```
workspace_01h2x3y4z5a6b7c8d9e0f1g2h3
```
