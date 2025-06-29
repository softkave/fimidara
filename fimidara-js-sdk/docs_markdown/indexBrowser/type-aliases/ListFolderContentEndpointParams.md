[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ListFolderContentEndpointParams

# Type Alias: ListFolderContentEndpointParams

> **ListFolderContentEndpointParams** = `object`

Parameters for listing the contents of a folder with optional filtering and pagination

## Properties

### contentType?

> `optional` **contentType**: `"file"` \| `"folder"`

Filter by content type - specify "file" to get only files, "folder" to get only folders, or omit to get both

#### Example

```
file
```

***

### folderId?

> `optional` **folderId**: `string`

Folder ID

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Folder path, with each folder name separated by a forward slash. The first item must be the workspace rootname. e.g /workspace-rootname/my-folder/my-sub-folder.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### page?

> `optional` **page**: `number`

Page number, starting from 0

***

### pageSize?

> `optional` **pageSize**: `number`

Page size, with a default of 50 and a max of 100

#### Example

```
50
```
