[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CompleteMultipartUploadEndpointResult

# Type Alias: CompleteMultipartUploadEndpointResult

> **CompleteMultipartUploadEndpointResult** = `object`

Response containing the completed file and optional job information

## Properties

### file

> **file**: [`File`](File.md)

File resource with metadata and location information

***

### jobId?

> `optional` **jobId**: `string`

Job ID for tracking the file assembly process if it runs asynchronously

#### Example

```
job-456e7890-e89b-12d3-a456-426614174001
```
