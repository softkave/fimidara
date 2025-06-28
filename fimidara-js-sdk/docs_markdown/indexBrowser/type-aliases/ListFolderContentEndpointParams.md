[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ListFolderContentEndpointParams

# Type Alias: ListFolderContentEndpointParams

> **ListFolderContentEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4088](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4088)

Parameters for listing the contents of a folder with optional filtering and pagination

## Properties

### contentType?

> `optional` **contentType**: `"file"` \| `"folder"`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4112](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4112)

Filter by content type - specify "file" to get only files, "folder" to get only folders, or omit to get both

#### Example

```
file
```

***

### folderId?

> `optional` **folderId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4104](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4104)

Folder ID

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4096](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4096)

Folder path, with each folder name separated by a forward slash. The first item must be the workspace rootname. e.g /workspace-rootname/my-folder/my-sub-folder.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### page?

> `optional` **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4116](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4116)

Page number, starting from 0

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4124](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4124)

Page size, with a default of 50 and a max of 100

#### Example

```
50
```
