[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeleteFolderEndpointResult

# Type Alias: DeleteFolderEndpointResult

> **DeleteFolderEndpointResult** = `object`

Response for folder deletion, may include job ID for tracking deletion progress

## Properties

### jobId?

> `optional` **jobId**: `string`

Long-running job ID

#### Example

```
job0000_000000000000000000000
```

***

### notes?

> `optional` **notes**: [`EndpointResultNote`](EndpointResultNote.md)[]
