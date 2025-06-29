[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendMountEndpointParams

# Type Alias: UpdateFileBackendMountEndpointParams

> **UpdateFileBackendMountEndpointParams** = `object`

Parameters for updating an existing file backend mount

## Properties

### mount

> **mount**: [`UpdateFileBackendMountInput`](UpdateFileBackendMountInput.md)

Mount update data containing only the fields to change

***

### mountId

> **mountId**: `string`

ID of the mount to update

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
