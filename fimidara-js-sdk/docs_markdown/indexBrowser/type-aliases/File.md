[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / File

# Type Alias: File

> **File** = `object`

File resource with metadata and location information

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

### encoding?

> `optional` **encoding**: `string`

File encoding

#### Example

```
utf8
```

***

### ext?

> `optional` **ext**: `string`

File ext, case insensitive

#### Example

```
jpg
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

### mimetype?

> `optional` **mimetype**: `string`

File MIME type

#### Example

```
image/jpeg
```

***

### name

> **name**: `string`

File name, case insensitive

#### Example

```
my-file
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

### size

> **size**: `number`

File size in bytes

#### Example

```
1024000
```

***

### version

> **version**: `number`

File version, representing how many times a file has been uploaded

#### Example

```
1
```

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
