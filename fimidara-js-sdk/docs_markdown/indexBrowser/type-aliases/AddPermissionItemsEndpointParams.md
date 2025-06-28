[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddPermissionItemsEndpointParams

# Type Alias: AddPermissionItemsEndpointParams

> **AddPermissionItemsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:981](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L981)

Parameters for adding permission items to a workspace.

## Properties

### items

> **items**: [`PermissionItemInput`](PermissionItemInput.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:993](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L993)

List of permission items to add to the workspace.

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:989](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L989)

Workspace ID. If not provided, will be inferred from authentication context.

#### Example

```
wrkspce_000000000000000000000
```
