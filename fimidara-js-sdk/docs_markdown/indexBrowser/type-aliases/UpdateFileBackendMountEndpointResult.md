[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendMountEndpointResult

# Type Alias: UpdateFileBackendMountEndpointResult

> **UpdateFileBackendMountEndpointResult** = `object`

Response when successfully updating a file backend mount

## Properties

### jobId?

> `optional` **jobId**: `string`

Background job ID if the update triggered file migration (optional)

#### Example

```
job0000_000000000000000000000
```

***

### mount

> **mount**: [`FileBackendMount`](FileBackendMount.md)

The updated file backend mount
