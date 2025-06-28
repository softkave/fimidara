[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / stringifyFimidaraFilepath

# Function: stringifyFimidaraFilepath()

> **stringifyFimidaraFilepath**(`file`, `rootname?`): `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:263](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L263)

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
