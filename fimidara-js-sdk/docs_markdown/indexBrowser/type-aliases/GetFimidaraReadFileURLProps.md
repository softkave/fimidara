[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetFimidaraReadFileURLProps

# Type Alias: GetFimidaraReadFileURLProps

> **GetFimidaraReadFileURLProps** = `object`

Defined in: [fimidara-js-sdk/src/path/file.ts:86](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L86)

Configuration for generating Fimidara file read URLs

## Properties

### download?

> `optional` **download**: `boolean`

Defined in: [fimidara-js-sdk/src/path/file.ts:126](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L126)

Whether the server should add "Content-Disposition: attachment" header
which forces browsers to download files like HTML, JPEG, etc. which it'll
otherwise open in the browser

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:88](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L88)

Filepath including workspace rootname OR file presigned path.

***

### filepathWithoutRootname?

> `optional` **filepathWithoutRootname**: `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:92](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L92)

Filepath without workspace rootname. Does not accept file presigned paths.
You must also provide `workspaceRootname`

***

### serverURL?

> `optional` **serverURL**: `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:99](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L99)

Server URL, for if you're hosting you're own fimidara, or prefer a certain
host

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Defined in: [fimidara-js-sdk/src/path/file.ts:95](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/file.ts#L95)

Workspace rootname, required if you're using `filepathWithoutRootname`
