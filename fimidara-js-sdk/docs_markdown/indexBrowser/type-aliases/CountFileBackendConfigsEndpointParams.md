[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CountFileBackendConfigsEndpointParams

# Type Alias: CountFileBackendConfigsEndpointParams

> **CountFileBackendConfigsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1233](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1233)

Parameters for counting file backend configs with optional filtering

## Properties

### backend?

> `optional` **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1249](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1249)

Filter configs by backend type (optional)

#### Example

```
fimidara
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1241](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1241)

Workspace ID to filter configs (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
