[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendMount

# Type Alias: FileBackendMount

> **FileBackendMount** = `object`

A file backend mount connects a folder in your workspace to external storage, allowing files to be stored in AWS S3, Google Cloud, etc.

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

The storage backend type (AWS S3, Google Cloud, etc.)

#### Example

```
fimidara
```

***

### configId

> **configId**: `string` \| `null`

Backend config ID containing credentials, or null for default storage

#### Example

```
bckconf_000000000000000000000
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

Optional description explaining the purpose of this mount

#### Example

```
This is a resource description.
```

***

### index

> **index**: `number`

Priority index when multiple mounts exist on the same folder

#### Example

```
10
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

### mountedFrom

> **mountedFrom**: `string`[]

Path segments indicating where files are stored in the backend

#### Example

```json
[
  "my-bucket",
  "documents",
  "uploads"
]
```

***

### name

> **name**: `string`

Display name for this mount

#### Example

```
My resource name
```

***

### namepath

> **namepath**: `string`[]

Array of folder names representing the path where this mount is attached

#### Example

```json
[
  "my-folder",
  "my-sub-folder"
]
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
