[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetFileBackendConfigsEndpointParams

# Type Alias: GetFileBackendConfigsEndpointParams

> **GetFileBackendConfigsEndpointParams** = `object`

Parameters for retrieving a list of file backend configs with optional filtering

## Properties

### backend?

> `optional` **backend**: [`FileBackendType`](FileBackendType.md)

Filter configs by backend type (optional)

#### Example

```
fimidara
```

***

### page?

> `optional` **page**: `number`

Page number for pagination (optional, defaults to 0)

***

### pageSize?

> `optional` **pageSize**: `number`

Number of items per page (optional, defaults to system limit)

#### Example

```
50
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID to filter configs (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
