[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeleteFileEndpointParams

# Type Alias: DeleteFileEndpointParams

> **DeleteFileEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1588](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1588)

Parameters for deleting a file or specific multipart upload parts

## Properties

### clientMultipartId?

> `optional` **clientMultipartId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1612](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1612)

Client generated unique identifier for multipart uploads. It is used to identify the same multipart upload across multiple requests

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1604](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1604)

File ID

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1596](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1596)

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### part?

> `optional` **part**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1620](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1620)

Part number of the multipart upload

#### Example

```
1
```
