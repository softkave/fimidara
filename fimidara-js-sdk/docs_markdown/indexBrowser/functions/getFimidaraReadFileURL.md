[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / getFimidaraReadFileURL

# Function: getFimidaraReadFileURL()

> **getFimidaraReadFileURL**(`props`): `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:174](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L174)

Generates a URL for reading/downloading a file from Fimidara

## Parameters

### props

[`GetFimidaraReadFileURLProps`](../type-aliases/GetFimidaraReadFileURLProps.md)

Configuration for the file read URL

## Returns

`string`

The complete URL for reading the file

## Example

```typescript
const url = getFimidaraReadFileURL({
  filepath: '/workspace/path/to/file.jpg',
  download: true
});
```
