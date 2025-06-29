[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceAgentTokensEndpointParams

# Type Alias: GetWorkspaceAgentTokensEndpointParams

> **GetWorkspaceAgentTokensEndpointParams** = `object`

Parameters for retrieving agent tokens in a workspace

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

### shouldEncode?

> `optional` **shouldEncode**: `boolean`

Whether the token returned should include the token encoded in JWT format.

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
