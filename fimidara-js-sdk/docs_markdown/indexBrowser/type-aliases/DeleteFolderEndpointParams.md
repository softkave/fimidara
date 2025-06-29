[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeleteFolderEndpointParams

# Type Alias: DeleteFolderEndpointParams

> **DeleteFolderEndpointParams** = `object`

Parameters for deleting a folder and optionally its contents

## Properties

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
