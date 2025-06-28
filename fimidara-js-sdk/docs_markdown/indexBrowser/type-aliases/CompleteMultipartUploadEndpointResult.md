[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CompleteMultipartUploadEndpointResult

# Type Alias: CompleteMultipartUploadEndpointResult

> **CompleteMultipartUploadEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1216](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1216)

Response containing the completed file and optional job information

## Properties

### file

> **file**: [`File`](File.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1220](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1220)

File resource with metadata and location information

***

### jobId?

> `optional` **jobId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1228](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1228)

Job ID for tracking the file assembly process if it runs asynchronously

#### Example

```
job-456e7890-e89b-12d3-a456-426614174001
```
