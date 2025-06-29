[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / stringifyFimidaraFilename

# Function: stringifyFimidaraFilename()

> **stringifyFimidaraFilename**(`file`): `string`

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
