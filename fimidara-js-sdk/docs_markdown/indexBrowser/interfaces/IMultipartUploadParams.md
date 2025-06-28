[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadParams

# Interface: IMultipartUploadParams

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:97](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L97)

Parameters for performing a multipart file upload

## Extends

- `Pick`\<[`UploadFileEndpointParams`](../type-aliases/UploadFileEndpointParams.md), `"description"` \| `"encoding"` \| `"mimetype"` \| `"fileId"` \| `"filepath"`\>

## Properties

### afterPart()?

> `optional` **afterPart**: (`params`) => `OrPromise`\<`void`\>

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:117](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L117)

Optional callback executed after each part upload

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

***

### beforePart()?

> `optional` **beforePart**: (`params`) => `OrPromise`\<`void`\>

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:115](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L115)

Optional callback executed before each part upload

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

***

### clientMultipartId

> **clientMultipartId**: `string`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:105](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L105)

Unique identifier for this multipart upload session

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5325](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5325)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5341](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5341)

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

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:103](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L103)

Fimidara API endpoints instance

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5313](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5313)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5305](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5305)

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

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:128](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L128)

If `true`, part events will be fired for resumed parts. Default is `true`.

***

### maxRetryCount?

> `optional` **maxRetryCount**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:135](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L135)

The maximum number of times to retry failed parts. This threshold is shared
across all parts, although if a part fails more than 3 times, it will be
marked failed and the upload will fail as a whole. Default is `10`, max is
`50`.

***

### mimetype?

> `optional` **mimetype**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5349](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5349)

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

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:119](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L119)

Number of parts to upload concurrently (defaults to auto-calculated)

***

### readFrom()

> **readFrom**: (`start`, `end`, `size`) => `Promise`\<\{ `data`: `string` \| `Readable` \| `Blob` \| `Buffer`\<`ArrayBufferLike`\>; `size`: `number`; \}\>

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:109](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L109)

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

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:124](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L124)

If `true`, upload will be resumed from the last part uploaded. If `false`,
upload will start afresh. Default is `true`.

***

### shouldWaitForCompleteUploadJob?

> `optional` **shouldWaitForCompleteUploadJob**: `boolean`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:140](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L140)

If `true`, the upload will wait for the complete upload job to finish.
Default is `true`.

***

### size

> **size**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:107](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L107)

Total size of the file to upload in bytes
