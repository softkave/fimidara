[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetCollaboratorEndpointParams

# Type Alias: GetCollaboratorEndpointParams

> **GetCollaboratorEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1886](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1886)

Parameters for getting a specific collaborator by ID.

## Properties

### collaboratorId

> **collaboratorId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1902](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1902)

Unique ID of the collaborator to retrieve.

#### Example

```
c-some-collaborator-id
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1894](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1894)

ID of the workspace containing the collaborator. If not provided, the user's default workspace is used.

#### Example

```
w-some-workspace-id
```
