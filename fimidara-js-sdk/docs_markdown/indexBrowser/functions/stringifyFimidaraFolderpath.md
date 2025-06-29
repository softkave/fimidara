[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / stringifyFimidaraFolderpath

# Function: stringifyFimidaraFolderpath()

> **stringifyFimidaraFolderpath**(`file`, `rootname?`): `string`

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
