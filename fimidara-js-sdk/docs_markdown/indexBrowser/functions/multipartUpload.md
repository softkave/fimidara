[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / multipartUpload

# Function: multipartUpload()

> **multipartUpload**(`params`): `Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>

Performs a multipart file upload with automatic chunking, retry logic, and progress tracking.

This function handles large file uploads by splitting them into smaller parts and uploading
them concurrently. It supports resuming interrupted uploads and provides progress callbacks.

## Parameters

### params

[`IMultipartUploadParams`](../interfaces/IMultipartUploadParams.md)

Configuration parameters for the multipart upload

## Returns

`Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>

Promise that resolves to the upload result with optional file details

## Example

```typescript
const result = await multipartUpload({
  endpoints: fimidaraEndpoints,
  clientMultipartId: 'unique-upload-id',
  size: fileSize,
  readFrom: async (start, end, size) => {
    // Read file chunk logic
    return { data: chunkData, size: chunkSize };
  },
  beforePart: (params) => console.log(`Starting part ${params.part}`),
  afterPart: (params) => console.log(`Completed ${params.percentComplete}%`),
});
```
