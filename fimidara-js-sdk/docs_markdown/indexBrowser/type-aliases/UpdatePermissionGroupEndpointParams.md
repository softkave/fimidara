[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdatePermissionGroupEndpointParams

# Type Alias: UpdatePermissionGroupEndpointParams

> **UpdatePermissionGroupEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5208](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5208)

Parameters for updating an existing permission group

## Properties

### data

> **data**: [`UpdatePermissionGroupInput`](UpdatePermissionGroupInput.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5236](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5236)

Fields to update on the permission group

***

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5224](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5224)

Permission group name. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
Editors
```

***

### permissionGroupId?

> `optional` **permissionGroupId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5216](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5216)

Permission group ID. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
perm_group_01234567890
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5232](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5232)

Workspace ID. When not provided, will default to using workspace ID from agent token. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
wrkspce_000000000000000000000
```
