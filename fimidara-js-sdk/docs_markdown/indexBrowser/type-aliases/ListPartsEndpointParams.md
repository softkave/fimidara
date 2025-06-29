[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ListPartsEndpointParams

# Type Alias: ListPartsEndpointParams

> **ListPartsEndpointParams** = `object`

Parameters for listing uploaded parts of a multipart upload

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

***

### page?

> `optional` **page**: `number`

Page number, starting from 0

***

### pageSize?

> `optional` **pageSize**: `number`

Page size, with a default of 50 and a max of 100

#### Example

```
50
```
