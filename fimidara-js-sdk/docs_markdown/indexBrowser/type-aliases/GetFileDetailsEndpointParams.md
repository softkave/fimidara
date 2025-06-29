[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetFileDetailsEndpointParams

# Type Alias: GetFileDetailsEndpointParams

> **GetFileDetailsEndpointParams** = `object`

Parameters for retrieving file details

## Properties

### fileId?

> `optional` **fileId**: `string`

File ID

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```
