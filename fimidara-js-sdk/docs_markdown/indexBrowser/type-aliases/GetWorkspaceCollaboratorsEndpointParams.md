[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceCollaboratorsEndpointParams

# Type Alias: GetWorkspaceCollaboratorsEndpointParams

> **GetWorkspaceCollaboratorsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3572](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3572)

Parameters for getting a list of workspace collaborators.

## Properties

### page?

> `optional` **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3588](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3588)

Page number to fetch. Starts from 1 for the first page.

#### Example

```
1
```

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3596](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3596)

Number of collaborators to fetch per page. Defaults to 20, maximum 100.

#### Example

```
20
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3580](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3580)

ID of the workspace to get collaborators from. If not provided, the user's default workspace is used.

#### Example

```
w-some-workspace-id
```
