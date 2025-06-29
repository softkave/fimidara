[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / getFimidaraReadFileURL

# Function: getFimidaraReadFileURL()

> **getFimidaraReadFileURL**(`props`): `string`

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
