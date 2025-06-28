[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / StartMultipartUploadEndpointParams

# Type Alias: StartMultipartUploadEndpointParams

> **StartMultipartUploadEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4706](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4706)

Parameters for starting a multipart upload session

## Properties

### clientMultipartId

> **clientMultipartId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4730](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4730)

Client generated unique identifier for the multipart upload

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4722](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4722)

File ID

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4714](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4714)

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```
