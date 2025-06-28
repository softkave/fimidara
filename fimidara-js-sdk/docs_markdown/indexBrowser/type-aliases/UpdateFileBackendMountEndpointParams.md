[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendMountEndpointParams

# Type Alias: UpdateFileBackendMountEndpointParams

> **UpdateFileBackendMountEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5043](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5043)

Parameters for updating an existing file backend mount

## Properties

### mount

> **mount**: [`UpdateFileBackendMountInput`](UpdateFileBackendMountInput.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5063](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5063)

Mount update data containing only the fields to change

***

### mountId

> **mountId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5059](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5059)

ID of the mount to update

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5051](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5051)

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
