[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ListPartsEndpointResult

# Type Alias: ListPartsEndpointResult

> **ListPartsEndpointResult** = `object`

Response containing the list of uploaded parts and pagination info

## Properties

### clientMultipartId?

> `optional` **clientMultipartId**: `string`

Client generated unique identifier for multipart uploads. It is used to identify the same multipart upload across multiple requests

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### page

> **page**: `number`

Page number, starting from 0

***

### parts

> **parts**: [`PartDetails`](PartDetails.md)[]

List of uploaded file parts
