[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetEntityAssignedPermissionGroupsParams

# Type Alias: GetEntityAssignedPermissionGroupsParams

> **GetEntityAssignedPermissionGroupsParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1998](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1998)

Parameters for retrieving permission groups assigned to a specific entity

## Properties

### entityId

> **entityId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2014](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2014)

ID of the entity (user, collaborator, or agent token) to get assigned permission groups for

#### Example

```
user_01234567890
```

***

### includeInheritedPermissionGroups?

> `optional` **includeInheritedPermissionGroups**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2022](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2022)

Whether to include permission groups not directly assigned but inherited through permission groups assigned to entity

#### Example

```
true
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2006](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2006)

Workspace ID to search within. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
