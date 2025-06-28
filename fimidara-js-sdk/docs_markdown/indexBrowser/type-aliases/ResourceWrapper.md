[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResourceWrapper

# Type Alias: ResourceWrapper

> **ResourceWrapper** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2673](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2673)

Wraps a resource with metadata about its type and ID. This provides context about what kind of resource is being returned.

## Example

```json
{
  "resourceId": {
    "__id": "FieldString",
    "description": "file ID",
    "example": "file000_000000000000000000000"
  },
  "resourceType": "file",
  "resource": {
    "resourceId": {
      "__id": "FieldString",
      "description": "file ID",
      "example": "file000_000000000000000000000"
    },
    "createdAt": 1672531200000,
    "lastUpdatedAt": 1672531200000,
    "lastUpdatedBy": {
      "agentId": {
        "__id": "FieldString",
        "description": "agentToken ID",
        "example": "agtoken_000000000000000000000"
      },
      "agentType": "agentToken"
    },
    "createdBy": {
      "agentId": {
        "__id": "FieldString",
        "description": "agentToken ID",
        "example": "agtoken_000000000000000000000"
      },
      "agentType": "agentToken"
    }
  }
}
```

## Properties

### resource

> **resource**: [`Resource`](Resource.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2711](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2711)

The resource data. Structure depends on the resource type specified in resourceType field.

#### Example

```json
{
  "resourceId": {
    "__id": "FieldString",
    "description": "file ID",
    "example": "file000_000000000000000000000"
  },
  "name": "report.pdf",
  "workspaceId": {
    "__id": "FieldString",
    "description": "Workspace ID",
    "example": "wrkspce_000000000000000000000"
  },
  "createdAt": 1672531200000,
  "lastUpdatedAt": 1672531200000
}
```

***

### resourceId

> **resourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2681](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2681)

The unique identifier of the resource.

#### Example

```
wrkspce_000000000000000000000
```

***

### resourceType

> **resourceType**: [`FimidaraResourceType`](FimidaraResourceType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2689](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2689)

The type of resource (e.g., "file", "folder", "workspace", "collaborationRequest").

#### Example

```
file
```
