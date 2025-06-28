[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UnassignPermissionGroupsEndpointParams

# Type Alias: UnassignPermissionGroupsEndpointParams

> **UnassignPermissionGroupsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4744](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4744)

Parameters for removing permission group assignments from entities

## Properties

### entityId

> **entityId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4760](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4760)

Entity ID or array of entity IDs (users, collaborators, or agent tokens) to remove permission groups from

#### Example

```
user_01234567890
```

***

### permissionGroupId

> **permissionGroupId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4768](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4768)

Permission group ID or array of permission group IDs to unassign

#### Example

```
perm_group_01234567890
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4752](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4752)

Workspace ID where the unassignment will take place. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
