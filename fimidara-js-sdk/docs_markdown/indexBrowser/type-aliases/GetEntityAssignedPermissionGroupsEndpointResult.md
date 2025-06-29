[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetEntityAssignedPermissionGroupsEndpointResult

# Type Alias: GetEntityAssignedPermissionGroupsEndpointResult

> **GetEntityAssignedPermissionGroupsEndpointResult** = `object`

Response containing permission groups assigned to an entity

## Properties

### immediateAssignedPermissionGroupsMeta

> **immediateAssignedPermissionGroupsMeta**: [`PublicAssignedPermissionGroupMeta`](PublicAssignedPermissionGroupMeta.md)[]

Metadata about the direct assignment of permission groups (excludes inherited ones)

***

### permissionGroups

> **permissionGroups**: [`PermissionGroup`](PermissionGroup.md)[]

Array of permission groups assigned to the entity (including inherited ones if requested)
