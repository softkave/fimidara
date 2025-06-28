[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UsageThreshold

# Type Alias: UsageThreshold

> **UsageThreshold** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3661](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3661)

Usage threshold configuration for workspace billing and limits

## Properties

### budget

> **budget**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3689](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3689)

Price in USD

#### Example

```
5
```

***

### category

> **category**: [`UsageRecordCategory`](UsageRecordCategory.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3681](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3681)

Usage record category

#### Example

```
storage
```

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3673](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3673)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3665](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3665)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### usage

> **usage**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3697](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3697)

Usage amount. Bytes for storage, bin, and bout. Always 0 for total, use `usageCost` instead

#### Example

```
1024000
```
