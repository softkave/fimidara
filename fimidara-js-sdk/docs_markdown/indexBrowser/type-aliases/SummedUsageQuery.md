[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / SummedUsageQuery

# Type Alias: SummedUsageQuery

> **SummedUsageQuery** = `object`

Query parameters for filtering usage records

## Properties

### category?

> `optional` **category**: [`UsageRecordCategory`](UsageRecordCategory.md) \| [`UsageRecordCategory`](UsageRecordCategory.md)[]

Filter by usage category (storage, bandwidth, etc.)

#### Example

```
storage
```

***

### fromDate?

> `optional` **fromDate**: `number`

Filter usage records from this date onwards

#### Example

```
1672531200000
```

***

### fulfillmentStatus?

> `optional` **fulfillmentStatus**: [`UsageRecordFulfillmentStatus`](UsageRecordFulfillmentStatus.md) \| [`UsageRecordFulfillmentStatus`](UsageRecordFulfillmentStatus.md)[]

Filter by fulfillment status (fulfilled, pending, etc.)

#### Example

```
fulfilled
```

***

### toDate?

> `optional` **toDate**: `number`

Filter usage records up to this date

#### Example

```
1672531200000
```
