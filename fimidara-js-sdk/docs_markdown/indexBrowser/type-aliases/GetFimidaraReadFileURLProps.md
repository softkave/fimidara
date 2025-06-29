[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetFimidaraReadFileURLProps

# Type Alias: GetFimidaraReadFileURLProps

> **GetFimidaraReadFileURLProps** = `object`

Configuration for generating Fimidara file read URLs

## Properties

### download?

> `optional` **download**: `boolean`

Whether the server should add "Content-Disposition: attachment" header
which forces browsers to download files like HTML, JPEG, etc. which it'll
otherwise open in the browser

***

### filepath?

> `optional` **filepath**: `string`

Filepath including workspace rootname OR file presigned path.

***

### filepathWithoutRootname?

> `optional` **filepathWithoutRootname**: `string`

Filepath without workspace rootname. Does not accept file presigned paths.
You must also provide `workspaceRootname`

***

### serverURL?

> `optional` **serverURL**: `string`

Server URL, for if you're hosting you're own fimidara, or prefer a certain
host

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Workspace rootname, required if you're using `filepathWithoutRootname`
