[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolveEntityPermissionsEndpointParams

# Type Alias: ResolveEntityPermissionsEndpointParams

> **ResolveEntityPermissionsEndpointParams** = `object`

Parameters for resolving entity permissions within a workspace.

## Properties

### items

> **items**: [`ResolveEntityPermissionItemInput`](ResolveEntityPermissionItemInput.md)[]

List of permission resolution requests to process.

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID. If not provided, will be inferred from authentication context.

#### Example

```
wrkspce_000000000000000000000
```
