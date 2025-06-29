[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetFileBackendMountsEndpointParams

# Type Alias: GetFileBackendMountsEndpointParams

> **GetFileBackendMountsEndpointParams** = `object`

Parameters for retrieving a list of file backend mounts with optional filtering

## Properties

### backend?

> `optional` **backend**: [`FileBackendType`](FileBackendType.md)

Filter mounts by backend type (optional)

#### Example

```
fimidara
```

***

### configId?

> `optional` **configId**: `string`

Filter mounts by backend config ID (optional)

#### Example

```
wrkspce_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Filter mounts by folder path (optional)

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
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

Workspace ID to filter mounts (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
