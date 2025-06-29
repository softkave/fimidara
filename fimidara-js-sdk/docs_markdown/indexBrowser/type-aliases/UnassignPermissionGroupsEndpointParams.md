[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UnassignPermissionGroupsEndpointParams

# Type Alias: UnassignPermissionGroupsEndpointParams

> **UnassignPermissionGroupsEndpointParams** = `object`

Parameters for removing permission group assignments from entities

## Properties

### entityId

> **entityId**: `string` \| `string`[]

Entity ID or array of entity IDs (users, collaborators, or agent tokens) to remove permission groups from

#### Example

```
user_01234567890
```

***

### permissionGroupId

> **permissionGroupId**: `string` \| `string`[]

Permission group ID or array of permission group IDs to unassign

#### Example

```
perm_group_01234567890
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID where the unassignment will take place. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
