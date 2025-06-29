[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFolderEndpointParams

# Type Alias: UpdateFolderEndpointParams

> **UpdateFolderEndpointParams** = `object`

Parameters for updating an existing folder

## Properties

### folder

> **folder**: [`UpdateFolderInput`](UpdateFolderInput.md)

Input data for updating folder properties

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
