[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadParams

# Interface: IMultipartUploadParams

Parameters for performing a multipart file upload

## Extends

- `Pick`\<[`UploadFileEndpointParams`](../type-aliases/UploadFileEndpointParams.md), `"description"` \| `"encoding"` \| `"mimetype"` \| `"fileId"` \| `"filepath"`\>

## Properties

### afterPart()?

> `optional` **afterPart**: (`params`) => `OrPromise`\<`void`\>

Optional callback executed after each part upload

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

***

### beforePart()?

> `optional` **beforePart**: (`params`) => `OrPromise`\<`void`\>

Optional callback executed before each part upload

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

***

### clientMultipartId

> **clientMultipartId**: `string`

Unique identifier for this multipart upload session

***

### description?

> `optional` **description**: `string`

Resource description

#### Example

```
This is a resource description.
```

#### Inherited from

`Pick.description`

***

### encoding?

> `optional` **encoding**: `string`

File encoding

#### Example

```
utf8
```

#### Inherited from

`Pick.encoding`

***

### endpoints

> **endpoints**: [`FimidaraEndpoints`](../classes/FimidaraEndpoints.md)

Fimidara API endpoints instance

***

### fileId?

> `optional` **fileId**: `string`

File ID

#### Example

```
file000_000000000000000000000
```

#### Inherited from

`Pick.fileId`

***

### filepath?

> `optional` **filepath**: `string`

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

#### Inherited from

`Pick.filepath`

***

### firePartEventsForResumedParts?

> `optional` **firePartEventsForResumedParts**: `boolean`

If `true`, part events will be fired for resumed parts. Default is `true`.

***

### maxRetryCount?

> `optional` **maxRetryCount**: `number`

The maximum number of times to retry failed parts. This threshold is shared
across all parts, although if a part fails more than 3 times, it will be
marked failed and the upload will fail as a whole. Default is `10`, max is
`50`.

***

### mimetype?

> `optional` **mimetype**: `string`

File MIME type

#### Example

```
image/jpeg
```

#### Inherited from

`Pick.mimetype`

***

### numConcurrentParts?

> `optional` **numConcurrentParts**: `number`

Number of parts to upload concurrently (defaults to auto-calculated)

***

### readFrom()

> **readFrom**: (`start`, `end`, `size`) => `Promise`\<\{ `data`: `string` \| `Readable` \| `Blob` \| `Buffer`\<`ArrayBufferLike`\>; `size`: `number`; \}\>

Function to read file data for a specific byte range

#### Parameters

##### start

`number`

##### end

`number`

##### size

`number`

#### Returns

`Promise`\<\{ `data`: `string` \| `Readable` \| `Blob` \| `Buffer`\<`ArrayBufferLike`\>; `size`: `number`; \}\>

***

### resume?

> `optional` **resume**: `boolean`

If `true`, upload will be resumed from the last part uploaded. If `false`,
upload will start afresh. Default is `true`.

***

### shouldWaitForCompleteUploadJob?

> `optional` **shouldWaitForCompleteUploadJob**: `boolean`

If `true`, the upload will wait for the complete upload job to finish.
Default is `true`.

***

### size

> **size**: `number`

Total size of the file to upload in bytes
