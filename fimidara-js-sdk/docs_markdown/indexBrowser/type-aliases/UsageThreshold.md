[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UsageThreshold

# Type Alias: UsageThreshold

> **UsageThreshold** = `object`

Usage threshold configuration for workspace billing and limits

## Properties

### budget

> **budget**: `number`

Price in USD

#### Example

```
5
```

***

### category

> **category**: [`UsageRecordCategory`](UsageRecordCategory.md)

Usage record category

#### Example

```
storage
```

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

### usage

> **usage**: `number`

Usage amount. Bytes for storage, bin, and bout. Always 0 for total, use `usageCost` instead

#### Example

```
1024000
```
