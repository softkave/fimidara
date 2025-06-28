[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ReadFileEndpointParams

# Type Alias: ReadFileEndpointParams

> **ReadFileEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4323](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4323)

Parameters for reading/downloading a file with optional image processing

## Properties

### download?

> `optional` **download**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4355](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4355)

Whether the server should add "Content-Disposition: attachment" header which forces browsers to download files like HTML, JPEG, etc. which it'll otherwise open in the browser

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4339](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4339)

File ID

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4331](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4331)

File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### imageFormat?

> `optional` **imageFormat**: [`ImageFormatEnum`](ImageFormatEnum.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4351](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4351)

Format to transform image to if file is an image

#### Example

```
webp
```

***

### imageResize?

> `optional` **imageResize**: [`ImageResizeParams`](ImageResizeParams.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4343](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4343)

Parameters for resizing images on-the-fly during file retrieval
