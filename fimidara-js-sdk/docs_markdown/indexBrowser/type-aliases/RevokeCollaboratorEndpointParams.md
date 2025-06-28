[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / RevokeCollaboratorEndpointParams

# Type Alias: RevokeCollaboratorEndpointParams

> **RevokeCollaboratorEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4398](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4398)

Parameters for removing a collaborator from a workspace.

## Properties

### collaboratorId

> **collaboratorId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4414](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4414)

ID of the collaborator to remove from the workspace.

#### Example

```
c-some-collaborator-id
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4406](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4406)

ID of the workspace to remove the collaborator from. If not provided, the user's default workspace is used.

#### Example

```
w-some-workspace-id
```
