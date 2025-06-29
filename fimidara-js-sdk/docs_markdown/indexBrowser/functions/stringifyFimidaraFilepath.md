[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / stringifyFimidaraFilepath

# Function: stringifyFimidaraFilepath()

> **stringifyFimidaraFilepath**(`file`, `rootname?`): `string`

Combines file path components into a complete filepath string

## Parameters

### file

Object containing namepath array and optional extension

#### ext?

`string`

#### namepath

`string`[]

### rootname?

`string`

Optional workspace rootname to prepend

## Returns

`string`

The complete filepath with optional workspace rootname

## Example

```typescript
const filepath = stringifyFimidaraFilepath({
  namepath: ['folder', 'subfolder', 'file'],
  ext: 'txt'
}, 'my-workspace');
// Returns: 'my-workspace/folder/subfolder/file.txt'
```
