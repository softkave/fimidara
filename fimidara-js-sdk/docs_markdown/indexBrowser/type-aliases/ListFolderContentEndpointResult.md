[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ListFolderContentEndpointResult

# Type Alias: ListFolderContentEndpointResult

> **ListFolderContentEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4129](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4129)

Response containing the folder contents with folders and files arrays

## Properties

### files

> **files**: [`File`](File.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4137](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4137)

Array of files in the requested directory

***

### folders

> **folders**: [`Folder`](Folder.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4133](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4133)

Array of folders in the requested directory

***

### notes?

> `optional` **notes**: [`EndpointResultNote`](EndpointResultNote.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4142](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4142)

***

### page

> **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4141](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4141)

Page number, starting from 0
