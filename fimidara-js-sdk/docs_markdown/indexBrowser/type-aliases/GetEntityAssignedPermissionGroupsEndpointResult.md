[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetEntityAssignedPermissionGroupsEndpointResult

# Type Alias: GetEntityAssignedPermissionGroupsEndpointResult

> **GetEntityAssignedPermissionGroupsEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2060](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2060)

Response containing permission groups assigned to an entity

## Properties

### immediateAssignedPermissionGroupsMeta

> **immediateAssignedPermissionGroupsMeta**: [`PublicAssignedPermissionGroupMeta`](PublicAssignedPermissionGroupMeta.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2068](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2068)

Metadata about the direct assignment of permission groups (excludes inherited ones)

***

### permissionGroups

> **permissionGroups**: [`PermissionGroup`](PermissionGroup.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2064](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2064)

Array of permission groups assigned to the entity (including inherited ones if requested)
