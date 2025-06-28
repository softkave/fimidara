[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / stringifyFimidaraFolderpath

# Function: stringifyFimidaraFolderpath()

> **stringifyFimidaraFolderpath**(`file`, `rootname?`): `string`

Defined in: [fimidara-js-sdk/src/path/folder.ts:17](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/folder.ts#L17)

Converts a file object with a namepath array to a string path representation.

## Parameters

### file

Object containing a namepath array representing the folder structure

#### namepath

`string`[]

### rootname?

`string`

Optional root name to prepend to the path

## Returns

`string`

The folder path as a string, with rootname prepended if provided

## Example

```typescript
const folder = { namepath: ['documents', 'work', 'reports'] };
stringifyFimidaraFolderpath(folder); // Returns: "documents/work/reports"
stringifyFimidaraFolderpath(folder, 'workspace-rootname'); // Returns: "workspace-rootname/documents/work/reports"
```
