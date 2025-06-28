[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceCollaboratorsEndpointResult

# Type Alias: GetWorkspaceCollaboratorsEndpointResult

> **GetWorkspaceCollaboratorsEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3601](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3601)

Result of getting a list of workspace collaborators.

## Properties

### collaborators

> **collaborators**: [`Collaborator`](Collaborator.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3627](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3627)

List of collaborators in the workspace.

#### Example

```json
[
  {
    "resourceId": {
      "__id": "FieldString",
      "description": "user ID",
      "example": "user000_000000000000000000000"
    },
    "workspaceId": {
      "__id": "FieldString",
      "description": "Workspace ID",
      "example": "wrkspce_000000000000000000000"
    },
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "lastUpdatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

***

### page

> **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3635](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3635)

The current page number of results returned.

#### Example

```
1
```
