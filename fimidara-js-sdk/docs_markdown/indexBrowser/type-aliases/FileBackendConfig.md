[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendConfig

# Type Alias: FileBackendConfig

> **FileBackendConfig** = `object`

A file backend config stores credentials and settings for connecting to external storage providers like AWS S3, Google Cloud Storage, etc.

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

The storage backend type this config is for

#### Example

```
fimidara
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

### description?

> `optional` **description**: `string`

Optional description explaining what this config is used for

#### Example

```
This is a resource description.
```

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

### name

> **name**: `string`

Display name for this backend config

#### Example

```
My resource name
```

***

### resourceId

> **resourceId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
