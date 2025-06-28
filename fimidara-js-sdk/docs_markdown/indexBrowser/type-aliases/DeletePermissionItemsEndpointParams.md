[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeletePermissionItemsEndpointParams

# Type Alias: DeletePermissionItemsEndpointParams

> **DeletePermissionItemsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1750](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1750)

Parameters for deleting permission items from a workspace.

## Properties

### items

> **items**: [`DeletePermissionItemInput`](DeletePermissionItemInput.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1762](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1762)

List of permission items to delete from the workspace.

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1758](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1758)

Workspace ID. If not provided, will be inferred from authentication context.

#### Example

```
wrkspce_000000000000000000000
```
