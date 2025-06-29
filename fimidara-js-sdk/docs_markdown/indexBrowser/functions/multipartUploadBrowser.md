[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / multipartUploadBrowser

# Function: multipartUploadBrowser()

> **multipartUploadBrowser**(`params`): `Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>

Performs a multipart upload in browser environments.

## Parameters

### params

[`IMultipartUploadBrowserParams`](../interfaces/IMultipartUploadBrowserParams.md)

Configuration parameters for the multipart upload

## Returns

`Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>

Promise that resolves when the upload completes

## Example

```typescript
const result = await multipartUploadBrowser({
  data: fileBlob,
  uploadId: 'upload-123',
  partSize: 5 * 1024 * 1024, // 5MB chunks
  // ... other params
});
```
