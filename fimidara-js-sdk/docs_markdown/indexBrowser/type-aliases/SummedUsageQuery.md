[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / SummedUsageQuery

# Type Alias: SummedUsageQuery

> **SummedUsageQuery** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1431](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1431)

Query parameters for filtering usage records

## Properties

### category?

> `optional` **category**: [`UsageRecordCategory`](UsageRecordCategory.md) \| [`UsageRecordCategory`](UsageRecordCategory.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1439](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1439)

Filter by usage category (storage, bandwidth, etc.)

#### Example

```
storage
```

***

### fromDate?

> `optional` **fromDate**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1447](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1447)

Filter usage records from this date onwards

#### Example

```
1672531200000
```

***

### fulfillmentStatus?

> `optional` **fulfillmentStatus**: [`UsageRecordFulfillmentStatus`](UsageRecordFulfillmentStatus.md) \| [`UsageRecordFulfillmentStatus`](UsageRecordFulfillmentStatus.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1463](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1463)

Filter by fulfillment status (fulfilled, pending, etc.)

#### Example

```
fulfilled
```

***

### toDate?

> `optional` **toDate**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1455](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1455)

Filter usage records up to this date

#### Example

```
1672531200000
```
