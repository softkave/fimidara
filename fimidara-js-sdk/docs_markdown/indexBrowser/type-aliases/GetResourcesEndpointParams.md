[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetResourcesEndpointParams

# Type Alias: GetResourcesEndpointParams

> **GetResourcesEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2518](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2518)

Parameters for fetching multiple resources in a single request. This allows batch operations for better performance.

## Example

```json
{
  "workspaceId": "ws_1234567890abcdef",
  "resources": [
    {
      "action": "read",
      "filepath": "/documents/report.pdf"
    },
    {
      "action": "read",
      "folderpath": "/images"
    },
    {
      "action": "write",
      "resourceId": {
        "__id": "FieldString",
        "description": "file ID",
        "example": "file000_000000000000000000000"
      }
    }
  ]
}
```

## Properties

### resources

> **resources**: [`FetchResourceItem`](FetchResourceItem.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2539](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2539)

Array of resource fetch specifications. Each item describes how to identify and what action to perform on a resource.

#### Example

```json
[
  {
    "action": "read",
    "filepath": "/documents/report.pdf"
  }
]
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2526](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2526)

The ID of the workspace to fetch resources from. If not provided, uses the user's default workspace.

#### Example

```
wrkspce_000000000000000000000
```
