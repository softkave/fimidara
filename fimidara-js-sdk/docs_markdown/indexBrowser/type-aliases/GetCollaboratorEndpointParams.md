[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetCollaboratorEndpointParams

# Type Alias: GetCollaboratorEndpointParams

> **GetCollaboratorEndpointParams** = `object`

Parameters for getting a specific collaborator by ID.

## Properties

### collaboratorId

> **collaboratorId**: `string`

Unique ID of the collaborator to retrieve.

#### Example

```
c-some-collaborator-id
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

ID of the workspace containing the collaborator. If not provided, the user's default workspace is used.

#### Example

```
w-some-workspace-id
```
