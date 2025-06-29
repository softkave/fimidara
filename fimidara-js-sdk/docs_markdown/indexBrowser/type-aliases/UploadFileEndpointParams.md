[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UploadFileEndpointParams

# Type Alias: UploadFileEndpointParams

> **UploadFileEndpointParams** = `object`

Complete parameters for file upload including metadata and binary data

## Properties

### clientMultipartId?

> `optional` **clientMultipartId**: `string`

Client generated unique identifier for multipart uploads. It is used to identify the same multipart upload across multiple requests

#### Example

```
upload-123e4567-e89b-12d3-a456-426614174000
```

***

### data

> **data**: `string` \| `Readable` \| `Blob` \| `Buffer`

File binary

***

### description?

> `optional` **description**: `string`

Resource description

#### Example

```
This is a resource description.
```

***

### encoding?

> `optional` **encoding**: `string`

File encoding

#### Example

```
utf8
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

***

### mimetype?

> `optional` **mimetype**: `string`

File MIME type

#### Example

```
image/jpeg
```

***

### part?

> `optional` **part**: `number`

Part number of the multipart upload. -1 can be used to signify the end of a multipart upload.

#### Example

```
1
```

***

### size

> **size**: `number`

File size in bytes

#### Example

```
1024000
```
