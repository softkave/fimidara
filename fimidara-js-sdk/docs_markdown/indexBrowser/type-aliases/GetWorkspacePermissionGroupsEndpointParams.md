[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspacePermissionGroupsEndpointParams

# Type Alias: GetWorkspacePermissionGroupsEndpointParams

> **GetWorkspacePermissionGroupsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3846](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3846)

Parameters for retrieving permission groups in a workspace with pagination

## Properties

### page?

> `optional` **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3858](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3858)

Page number for pagination (0-based)

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3866](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3866)

Number of permission groups to return per page

#### Example

```
20
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3854](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3854)

Workspace ID to retrieve permission groups from. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
