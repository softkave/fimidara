[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UploadFileEndpointParams

# Type Alias: UploadFileEndpointParams

> **UploadFileEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5297](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5297)

Complete parameters for file upload including metadata and binary data

## Properties

### clientMultipartId?

> `optional` **clientMultipartId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5357](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5357)

Client generated unique identifier for multipart uploads. It is used to identify the same multipart upload across multiple requests

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### data

> **data**: `string` \| `Readable` \| `Blob` \| `Buffer`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5317](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5317)

File binary

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5325](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5325)

Resource description

#### Example

```
This is a resource description.
```

***

### encoding?

> `optional` **encoding**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5341](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5341)

File encoding

#### Example

```
utf8
```

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5313](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5313)

File ID

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5305](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5305)

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### mimetype?

> `optional` **mimetype**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5349](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5349)

File MIME type

#### Example

```
image/jpeg
```

***

### part?

> `optional` **part**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5365](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5365)

Part number of the multipart upload. -1 can be used to signify the end of a multipart upload.

#### Example

```
1
```

***

### size

> **size**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5333](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5333)

File size in bytes

#### Example

```
1024000
```
