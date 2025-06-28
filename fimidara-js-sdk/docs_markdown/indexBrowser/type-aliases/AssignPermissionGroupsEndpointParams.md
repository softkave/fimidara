[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AssignPermissionGroupsEndpointParams

# Type Alias: AssignPermissionGroupsEndpointParams

> **AssignPermissionGroupsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:998](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L998)

Parameters for assigning permission groups to entities

## Properties

### entityId

> **entityId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1014](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1014)

Entity ID or array of entity IDs (users, collaborators, or agent tokens) to assign permission groups to

#### Example

```
user_01234567890
```

***

### permissionGroupId

> **permissionGroupId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1022](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1022)

Permission group ID or array of permission group IDs to assign

#### Example

```
perm_group_01234567890
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1006](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1006)

Workspace ID where the assignment will take place. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
