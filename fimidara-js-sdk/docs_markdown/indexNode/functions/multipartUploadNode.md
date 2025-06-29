[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexNode](../README.md) / multipartUploadNode

# Function: multipartUploadNode()

> **multipartUploadNode**(`params`): `Promise`\<[`UploadFileEndpointResult`](../../indexBrowser/type-aliases/UploadFileEndpointResult.md)\>

Performs multipart upload from Node.js-compatible data sources.

Supports uploading from:
- Buffer data
- String data (converted to Buffer)
- Readable streams
- Local files

## Parameters

### params

[`IMultipartUploadNodeParams`](../interfaces/IMultipartUploadNodeParams.md)

Upload configuration and data source

## Returns

`Promise`\<[`UploadFileEndpointResult`](../../indexBrowser/type-aliases/UploadFileEndpointResult.md)\>

Promise that resolves when upload completes

## Example

```typescript
// Upload from Buffer
await multipartUploadNode({
  data: Buffer.from('Hello World'),
  // ... other params
});

// Upload from local file
await multipartUploadNode({
  localFilepath: '/path/to/file.txt',
  // ... other params
});
```
