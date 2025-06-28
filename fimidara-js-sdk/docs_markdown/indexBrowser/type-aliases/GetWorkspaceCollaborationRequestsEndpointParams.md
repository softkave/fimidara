[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceCollaborationRequestsEndpointParams

# Type Alias: GetWorkspaceCollaborationRequestsEndpointParams

> **GetWorkspaceCollaborationRequestsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3534](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3534)

Parameters for retrieving collaboration requests sent from your workspace. Use pagination to handle large numbers of requests.

## Properties

### page?

> `optional` **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3546](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3546)

Page number, starting from 0

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3554](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3554)

Page size, with a default of 50 and a max of 100

#### Example

```
50
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3542](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3542)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
