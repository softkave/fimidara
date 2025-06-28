[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendMountEndpointResult

# Type Alias: UpdateFileBackendMountEndpointResult

> **UpdateFileBackendMountEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5068](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5068)

Response when successfully updating a file backend mount

## Properties

### jobId?

> `optional` **jobId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5080](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5080)

Background job ID if the update triggered file migration (optional)

#### Example

```
job0000_000000000000000000000
```

***

### mount

> **mount**: [`FileBackendMount`](FileBackendMount.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5072](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5072)

The updated file backend mount
