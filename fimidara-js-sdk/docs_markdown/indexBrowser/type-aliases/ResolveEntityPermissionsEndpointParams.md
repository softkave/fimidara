[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolveEntityPermissionsEndpointParams

# Type Alias: ResolveEntityPermissionsEndpointParams

> **ResolveEntityPermissionsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4472](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4472)

Parameters for resolving entity permissions within a workspace.

## Properties

### items

> **items**: [`ResolveEntityPermissionItemInput`](ResolveEntityPermissionItemInput.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4484](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4484)

List of permission resolution requests to process.

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4480](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4480)

Workspace ID. If not provided, will be inferred from authentication context.

#### Example

```
wrkspce_000000000000000000000
```
