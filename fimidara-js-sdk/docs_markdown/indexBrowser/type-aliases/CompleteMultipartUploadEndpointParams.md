[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CompleteMultipartUploadEndpointParams

# Type Alias: CompleteMultipartUploadEndpointParams

> **CompleteMultipartUploadEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1040](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1040)

Parameters for completing a multipart upload by specifying all uploaded parts

## Properties

### clientMultipartId

> **clientMultipartId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1064](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1064)

Client generated unique identifier for the multipart upload

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1056](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1056)

File ID

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1048](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1048)

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### parts

> **parts**: [`CompleteMultipartUploadInputPart`](CompleteMultipartUploadInputPart.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1068](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1068)

List of all uploaded parts in order
