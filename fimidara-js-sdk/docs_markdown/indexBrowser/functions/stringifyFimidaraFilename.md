[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / stringifyFimidaraFilename

# Function: stringifyFimidaraFilename()

> **stringifyFimidaraFilename**(`file`): `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:244](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L244)

Combines a filename and extension into a single string

## Parameters

### file

Object containing name and optional extension

#### ext?

`string`

#### name

`string`

## Returns

`string`

The complete filename with extension

## Example

```typescript
const filename = stringifyFimidaraFilename({ name: 'document', ext: 'pdf' });
// Returns: 'document.pdf'
```
