[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / Resource

# Type Alias: Resource

> **Resource** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2587](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2587)

The actual resource data. The structure varies depending on the resource type (file, folder, workspace, etc.).

## Example

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

## Properties

### createdAt

> **createdAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2607](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2607)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy?

> `optional` **createdBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2599](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2599)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2628](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2628)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2632](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2632)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2620](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2620)

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2619](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2619)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy?

> `optional` **lastUpdatedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2611](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2611)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### resourceId

> **resourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2595](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2595)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```
