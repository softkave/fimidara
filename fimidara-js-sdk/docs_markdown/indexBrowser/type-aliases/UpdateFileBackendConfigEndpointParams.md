[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendConfigEndpointParams

# Type Alias: UpdateFileBackendConfigEndpointParams

> **UpdateFileBackendConfigEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4956](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4956)

Parameters for updating an existing file backend config

## Properties

### config

> **config**: [`UpdateFileBackendConfigInput`](UpdateFileBackendConfigInput.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4976](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4976)

Config update data containing only the fields to change

***

### configId

> **configId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4972](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4972)

ID of the config to update

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4964](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4964)

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
