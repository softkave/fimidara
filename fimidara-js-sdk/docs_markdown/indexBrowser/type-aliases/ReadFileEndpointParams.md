[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ReadFileEndpointParams

# Type Alias: ReadFileEndpointParams

> **ReadFileEndpointParams** = `object`

Parameters for reading/downloading a file with optional image processing

## Properties

### download?

> `optional` **download**: `boolean`

Whether the server should add "Content-Disposition: attachment" header which forces browsers to download files like HTML, JPEG, etc. which it'll otherwise open in the browser

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

### imageFormat?

> `optional` **imageFormat**: [`ImageFormatEnum`](ImageFormatEnum.md)

Format to transform image to if file is an image

#### Example

```
webp
```

***

### imageResize?

> `optional` **imageResize**: [`ImageResizeParams`](ImageResizeParams.md)

Parameters for resizing images on-the-fly during file retrieval
