[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / StartMultipartUploadEndpointParams

# Type Alias: StartMultipartUploadEndpointParams

> **StartMultipartUploadEndpointParams** = `object`

Parameters for starting a multipart upload session

## Properties

### clientMultipartId

> **clientMultipartId**: `string`

Client generated unique identifier for the multipart upload

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

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
