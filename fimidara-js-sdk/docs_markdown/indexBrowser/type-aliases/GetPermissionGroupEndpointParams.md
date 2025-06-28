[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetPermissionGroupEndpointParams

# Type Alias: GetPermissionGroupEndpointParams

> **GetPermissionGroupEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2348](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2348)

Parameters for retrieving a single permission group by ID or name

## Properties

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2364](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2364)

Permission group name. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
Editors
```

***

### permissionGroupId?

> `optional` **permissionGroupId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2356](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2356)

Permission group ID. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
perm_group_01234567890
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2372](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2372)

Workspace ID. When not provided, will default to using workspace ID from agent token. Either provide the permission group ID, or provide the workspace ID and permission group name

#### Example

```
wrkspce_000000000000000000000
```
