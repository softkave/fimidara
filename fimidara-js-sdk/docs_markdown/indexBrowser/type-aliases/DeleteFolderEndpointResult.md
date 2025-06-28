[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeleteFolderEndpointResult

# Type Alias: DeleteFolderEndpointResult

> **DeleteFolderEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1646](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1646)

Response for folder deletion, may include job ID for tracking deletion progress

## Properties

### jobId?

> `optional` **jobId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1654](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1654)

Long-running job ID

#### Example

```
job0000_000000000000000000000
```

***

### notes?

> `optional` **notes**: [`EndpointResultNote`](EndpointResultNote.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1655](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1655)
