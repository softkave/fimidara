[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeletePermissionItemsEndpointParams

# Type Alias: DeletePermissionItemsEndpointParams

> **DeletePermissionItemsEndpointParams** = `object`

Parameters for deleting permission items from a workspace.

## Properties

### items

> **items**: [`DeletePermissionItemInput`](DeletePermissionItemInput.md)[]

List of permission items to delete from the workspace.

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID. If not provided, will be inferred from authentication context.

#### Example

```
wrkspce_000000000000000000000
```
