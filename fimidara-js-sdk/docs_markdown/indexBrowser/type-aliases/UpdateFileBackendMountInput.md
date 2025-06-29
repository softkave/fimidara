[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendMountInput

# Type Alias: UpdateFileBackendMountInput

> **UpdateFileBackendMountInput** = `object`

Input fields for updating an existing file backend mount. All fields are optional - only provide fields you want to change.

## Properties

### configId?

> `optional` **configId**: `string`

New backend config ID to use for this mount

#### Example

```
bckconf_000000000000000000000
```

***

### description?

> `optional` **description**: `string`

New description explaining the purpose of this mount

#### Example

```
This is a resource description.
```

***

### folderpath?

> `optional` **folderpath**: `string`

New folder path where this mount should be attached

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### index?

> `optional` **index**: `number`

New priority index for this mount

#### Example

```
10
```

***

### mountedFrom?

> `optional` **mountedFrom**: `string`

New storage location path in the backend provider

#### Example

```
my-bucket/documents
```

***

### name?

> `optional` **name**: `string`

New display name for the mount

#### Example

```
My resource name
```
