[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UsageRecord

# Type Alias: UsageRecord

> **UsageRecord** = `object`

A workspace usage record containing usage metrics and costs

## Properties

### category

> **category**: [`UsageRecordCategory`](UsageRecordCategory.md)

The type of usage being recorded (storage, bandwidth, etc.)

#### Example

```
storage
```

***

### createdAt

> **createdAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### isDeleted

> **isDeleted**: `boolean`

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### month

> **month**: `number`

The month this usage was recorded for

***

### resourceId

> **resourceId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### status

> **status**: [`UsageRecordFulfillmentStatus`](UsageRecordFulfillmentStatus.md)

The fulfillment status of this usage record

#### Example

```
fulfilled
```

***

### usage

> **usage**: `number`

The amount of usage recorded (in bytes for storage, etc.)

#### Example

```
1024000
```

***

### usageCost

> **usageCost**: `number`

The cost associated with this usage record

#### Example

```
0.05
```

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```

***

### year

> **year**: `number`

The year this usage was recorded for

#### Example

```
2024
```
