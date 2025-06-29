[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceCollaborationRequestsEndpointParams

# Type Alias: GetWorkspaceCollaborationRequestsEndpointParams

> **GetWorkspaceCollaborationRequestsEndpointParams** = `object`

Parameters for retrieving collaboration requests sent from your workspace. Use pagination to handle large numbers of requests.

## Properties

### page?

> `optional` **page**: `number`

Page number, starting from 0

***

### pageSize?

> `optional` **pageSize**: `number`

Page size, with a default of 50 and a max of 100

#### Example

```
50
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
