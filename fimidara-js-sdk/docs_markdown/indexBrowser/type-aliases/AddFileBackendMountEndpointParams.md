[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddFileBackendMountEndpointParams

# Type Alias: AddFileBackendMountEndpointParams

> **AddFileBackendMountEndpointParams** = `object`

Parameters for creating a new file backend mount to connect a folder to external storage

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

Storage backend type to use (AWS S3, Google Cloud, etc.)

#### Example

```
fimidara
```

***

### configId

> **configId**: `string` \| `null`

Backend config ID to use, or null for default fimidara storage

#### Example

```
bckconf_000000000000000000000
```

***

### description?

> `optional` **description**: `string`

Optional description explaining the purpose of this mount

#### Example

```
This is a resource description.
```

***

### folderpath

> **folderpath**: `string`

Folder path where this mount should be attached (e.g., "/documents")

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### index

> **index**: `number`

Priority index (higher numbers = higher priority)

#### Example

```
10
```

***

### mountedFrom

> **mountedFrom**: `string`

Storage location in the backend (e.g., S3 bucket name or path)

#### Example

```
my-bucket/documents
```

***

### name

> **name**: `string`

Display name for the new mount

#### Example

```
My resource name
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
