[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFolderEndpointParams

# Type Alias: UpdateFolderEndpointParams

> **UpdateFolderEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5153](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5153)

Parameters for updating an existing folder

## Properties

### folder

> **folder**: [`UpdateFolderInput`](UpdateFolderInput.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5173](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5173)

Input data for updating folder properties

***

### folderId?

> `optional` **folderId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5169](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5169)

Folder ID

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5161](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5161)

Folder path, with each folder name separated by a forward slash. The first item must be the workspace rootname. e.g /workspace-rootname/my-folder/my-sub-folder.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```
