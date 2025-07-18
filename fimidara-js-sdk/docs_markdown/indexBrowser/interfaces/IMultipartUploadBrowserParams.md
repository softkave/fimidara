[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadBrowserParams

# Interface: IMultipartUploadBrowserParams

Parameters for browser-based multipart upload operations.
Extends the base multipart upload params but uses browser-compatible data types.

## Extends

- `Omit`\<[`IMultipartUploadParams`](IMultipartUploadParams.md), `"readFrom"` \| `"size"`\>

## Properties

### afterPart()?

> `optional` **afterPart**: (`params`) => `OrPromise`\<`void`\>

Optional callback executed after each part upload

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

#### Inherited from

`Omit.afterPart`

***

### beforePart()?

> `optional` **beforePart**: (`params`) => `OrPromise`\<`void`\>

Optional callback executed before each part upload

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

#### Inherited from

`Omit.beforePart`

***

### clientMultipartId

> **clientMultipartId**: `string`

Unique identifier for this multipart upload session

#### Inherited from

`Omit.clientMultipartId`

***

### data

> **data**: `string` \| `Blob`

The data to upload - can be a string or Blob

***

### description?

> `optional` **description**: `string`

Resource description

#### Example

```
This is a resource description.
```

#### Inherited from

`Omit.description`

***

### encoding?

> `optional` **encoding**: `string`

File encoding

#### Example

```
utf8
```

#### Inherited from

`Omit.encoding`

***

### endpoints

> **endpoints**: [`FimidaraEndpoints`](../classes/FimidaraEndpoints.md)

Fimidara API endpoints instance

#### Inherited from

`Omit.endpoints`

***

### fileId?

> `optional` **fileId**: `string`

File ID

#### Example

```
file000_000000000000000000000
```

#### Inherited from

`Omit.fileId`

***

### filepath?

> `optional` **filepath**: `string`

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

#### Inherited from

`Omit.filepath`

***

### firePartEventsForResumedParts?

> `optional` **firePartEventsForResumedParts**: `boolean`

If `true`, part events will be fired for resumed parts. Default is `true`.

#### Inherited from

`Omit.firePartEventsForResumedParts`

***

### maxRetryCount?

> `optional` **maxRetryCount**: `number`

The maximum number of times to retry failed parts. This threshold is shared
across all parts, although if a part fails more than 3 times, it will be
marked failed and the upload will fail as a whole. Default is `10`, max is
`50`.

#### Inherited from

`Omit.maxRetryCount`

***

### mimetype?

> `optional` **mimetype**: `string`

File MIME type

#### Example

```
image/jpeg
```

#### Inherited from

`Omit.mimetype`

***

### numConcurrentParts?

> `optional` **numConcurrentParts**: `number`

Number of parts to upload concurrently (defaults to auto-calculated)

#### Inherited from

`Omit.numConcurrentParts`

***

### resume?

> `optional` **resume**: `boolean`

If `true`, upload will be resumed from the last part uploaded. If `false`,
upload will start afresh. Default is `true`.

#### Inherited from

`Omit.resume`

***

### shouldWaitForCompleteUploadJob?

> `optional` **shouldWaitForCompleteUploadJob**: `boolean`

If `true`, the upload will wait for the complete upload job to finish.
Default is `true`.

#### Inherited from

`Omit.shouldWaitForCompleteUploadJob`

***

### size?

> `optional` **size**: `number`

Optional size override. If not provided, will use the Blob's size
