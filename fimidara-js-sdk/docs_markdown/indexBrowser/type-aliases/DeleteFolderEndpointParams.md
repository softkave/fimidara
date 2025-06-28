[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeleteFolderEndpointParams

# Type Alias: DeleteFolderEndpointParams

> **DeleteFolderEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1625](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1625)

Parameters for deleting a folder and optionally its contents

## Properties

### folderId?

> `optional` **folderId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1641](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1641)

Folder ID

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1633](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1633)

Folder path, with each folder name separated by a forward slash. The first item must be the workspace rootname. e.g /workspace-rootname/my-folder/my-sub-folder.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```
