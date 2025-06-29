[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendConfigEndpointParams

# Type Alias: UpdateFileBackendConfigEndpointParams

> **UpdateFileBackendConfigEndpointParams** = `object`

Parameters for updating an existing file backend config

## Properties

### config

> **config**: [`UpdateFileBackendConfigInput`](UpdateFileBackendConfigInput.md)

Config update data containing only the fields to change

***

### configId

> **configId**: `string`

ID of the config to update

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
