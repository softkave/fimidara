[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CountFolderContentEndpointParams

# Type Alias: CountFolderContentEndpointParams

> **CountFolderContentEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1304](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1304)

Parameters for counting the number of items in a folder

## Properties

### contentType?

> `optional` **contentType**: `"file"` \| `"folder"`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1328](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1328)

Filter by content type - specify "file" to count only files, "folder" to count only folders, or omit to count both

#### Example

```
file
```

***

### folderId?

> `optional` **folderId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1320](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1320)

Folder ID

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1312](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1312)

Folder path, with each folder name separated by a forward slash. The first item must be the workspace rootname. e.g /workspace-rootname/my-folder/my-sub-folder.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```
