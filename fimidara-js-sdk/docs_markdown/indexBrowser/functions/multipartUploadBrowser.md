[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / multipartUploadBrowser

# Function: multipartUploadBrowser()

> **multipartUploadBrowser**(`params`): `Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/multipart/multipartBrowser.ts:31](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipartBrowser.ts#L31)

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
