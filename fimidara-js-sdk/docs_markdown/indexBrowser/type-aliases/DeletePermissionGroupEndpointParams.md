[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeletePermissionGroupEndpointParams

# Type Alias: DeletePermissionGroupEndpointParams

> **DeletePermissionGroupEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1660](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1660)

Parameters for deleting a permission group

## Properties

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1676](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1676)

Permission group name. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
Editors
```

***

### permissionGroupId?

> `optional` **permissionGroupId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1668](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1668)

Permission group ID. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
perm_group_01234567890
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1684](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1684)

Workspace ID. When not provided, will default to using workspace ID from agent token. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
wrkspce_000000000000000000000
```
