[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / getFimidaraUploadFileURL

# Function: getFimidaraUploadFileURL()

> **getFimidaraUploadFileURL**(`props`): `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:211](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L211)

Generates a URL for uploading a file to Fimidara

## Parameters

### props

Configuration for the file upload URL

#### filepath?

`string`

Filepath including workspace rootname OR file presigned path.

#### filepathWithoutRootname?

`string`

Filepath without workspace rootname. Does not accept file presigned paths.
You must also provide `workspaceRootname`

#### serverURL?

`string`

Server URL, for if you're hosting you're own fimidara, or prefer a certain
host

#### workspaceRootname?

`string`

Workspace rootname, required if you're using `filepathWithoutRootname`

## Returns

`string`

The complete URL for uploading the file

## Example

```typescript
const url = getFimidaraUploadFileURL({
  filepathWithoutRootname: 'path/to/file.jpg',
  workspaceRootname: 'my-workspace'
});
```
