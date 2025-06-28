[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / diffFiles

# Function: diffFiles()

> **diffFiles**\<`TExternalFile`, `TFimidaraFile`\>(`props`): `object`

Defined in: [fimidara-js-sdk/src/diff/diffFiles.ts:23](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/diff/diffFiles.ts#L23)

Compares Fimidara files with external files to determine which files are new, updated, or unmodified.

## Type Parameters

### TExternalFile

`TExternalFile` *extends* [`FimidaraDiffExternalFile`](../type-aliases/FimidaraDiffExternalFile.md) = [`FimidaraDiffExternalFile`](../type-aliases/FimidaraDiffExternalFile.md)

### TFimidaraFile

`TFimidaraFile` *extends* `Pick`\<[`File`](../type-aliases/File.md), `"lastUpdatedAt"` \| `"name"` \| `"ext"`\> = `Pick`\<[`File`](../type-aliases/File.md), `"lastUpdatedAt"` \| `"name"` \| `"ext"`\>

## Parameters

### props

Configuration object containing file collections to compare

#### externalFiles

`Record`\<`string`, `TExternalFile`\> \| `TExternalFile`[]

Array or record of external files to compare

#### fimidaraFiles

`Record`\<`string`, `TFimidaraFile`\> \| `TFimidaraFile`[]

Array or record of Fimidara files to compare

## Returns

`object`

Object containing categorized files (new, updated, unmodified) for both Fimidara and external files

### newExternalFileList

> **newExternalFileList**: `TExternalFile`[]

### newExternalFileRecord

> **newExternalFileRecord**: `Record`\<`string`, `TExternalFile`\> = `newEFRecord`

### newFimidaraFileList

> **newFimidaraFileList**: `TFimidaraFile`[]

### newFimidaraFileRecord

> **newFimidaraFileRecord**: `Record`\<`string`, `TFimidaraFile`\> = `newFFRecord`

### unmodifiedExternalFileList

> **unmodifiedExternalFileList**: `TExternalFile`[]

### unmodifiedExternalFileRecord

> **unmodifiedExternalFileRecord**: `Record`\<`string`, `TExternalFile`\> = `unmodifiedEFRecord`

### unmodifiedFimidaraFileList

> **unmodifiedFimidaraFileList**: `TFimidaraFile`[]

### unmodifiedFimidaraFileRecord

> **unmodifiedFimidaraFileRecord**: `Record`\<`string`, `TFimidaraFile`\> = `unmodifiedFFRecord`

### updatedExternalFileList

> **updatedExternalFileList**: `TExternalFile`[]

### updatedExternalFileRecord

> **updatedExternalFileRecord**: `Record`\<`string`, `TExternalFile`\> = `updatedEFRecord`

### updatedFimidaraFileList

> **updatedFimidaraFileList**: `TFimidaraFile`[]

### updatedFimidaraFileRecord

> **updatedFimidaraFileRecord**: `Record`\<`string`, `TFimidaraFile`\> = `updatedFFRecord`

## Example

```typescript
const result = diffFiles({
  fimidaraFiles: [{name: 'file1', ext: 'txt', lastUpdatedAt: new Date()}],
  externalFiles: [{name: 'file1.txt', lastModified: new Date()}]
});
```
