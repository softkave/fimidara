[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspacePermissionGroupsEndpointParams

# Type Alias: GetWorkspacePermissionGroupsEndpointParams

> **GetWorkspacePermissionGroupsEndpointParams** = `object`

Parameters for retrieving permission groups in a workspace with pagination

## Properties

### page?

> `optional` **page**: `number`

Page number for pagination (0-based)

***

### pageSize?

> `optional` **pageSize**: `number`

Number of permission groups to return per page

#### Example

```
20
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID to retrieve permission groups from. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
