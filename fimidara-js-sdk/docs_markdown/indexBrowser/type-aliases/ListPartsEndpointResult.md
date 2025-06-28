[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ListPartsEndpointResult

# Type Alias: ListPartsEndpointResult

> **ListPartsEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4201](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4201)

Response containing the list of uploaded parts and pagination info

## Properties

### clientMultipartId?

> `optional` **clientMultipartId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4209](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4209)

Client generated unique identifier for multipart uploads. It is used to identify the same multipart upload across multiple requests

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### page

> **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4217](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4217)

Page number, starting from 0

***

### parts

> **parts**: [`PartDetails`](PartDetails.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4213](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4213)

List of uploaded file parts
