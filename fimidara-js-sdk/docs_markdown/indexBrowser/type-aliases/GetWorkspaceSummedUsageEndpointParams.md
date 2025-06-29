[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceSummedUsageEndpointParams

# Type Alias: GetWorkspaceSummedUsageEndpointParams

> **GetWorkspaceSummedUsageEndpointParams** = `object`

Parameters for retrieving workspace usage records

## Properties

### page?

> `optional` **page**: `number`

Page number for pagination (starts from 0)

***

### pageSize?

> `optional` **pageSize**: `number`

Number of records to return per page

#### Example

```
50
```

***

### query?

> `optional` **query**: [`SummedUsageQuery`](SummedUsageQuery.md)

Query filters to apply to the usage records

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
