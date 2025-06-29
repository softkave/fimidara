[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / Folder

# Type Alias: Folder

> **Folder** = `object`

Represents a folder in the workspace with its metadata and hierarchy information

## Properties

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

Resource description

#### Example

```
This is a resource description.
```

***

### idPath

> **idPath**: `string`[]

List of parent folder IDs

#### Example

```json
[
  "folder0_000000000000000000000"
]
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

Resource name

#### Example

```
My resource name
```

***

### namepath

> **namepath**: `string`[]

Folder path as a list of folder names. It should not include the workspace rootname. e.g ["my-folder", "my-sub-folder"].

#### Example

```json
[
  "my-folder",
  "my-sub-folder"
]
```

***

### parentId

> **parentId**: `string` \| `null`

Folder ID or null if resource is not in a folder (e.g., at workspace root)

#### Example

```
folder0_000000000000000000000
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
