[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / MfdocEndpointParamsRequired

# Type Alias: MfdocEndpointParamsRequired\<T\>

> **MfdocEndpointParamsRequired**\<`T`\> = `object`

## Type Parameters

### T

`T`

## Properties

### authToken?

> `optional` **authToken**: `string`

***

### body

> **body**: `T`

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

**NOTE**: doesn't work in Node.js at the moment.

#### Parameters

##### progressEvent

[`MfdocEndpointProgressEvent`](MfdocEndpointProgressEvent.md)

#### Returns

`void`

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

**NOTE**: doesn't work in Node.js at the moment.

#### Parameters

##### progressEvent

[`MfdocEndpointProgressEvent`](MfdocEndpointProgressEvent.md)

#### Returns

`void`

***

### serverURL?

> `optional` **serverURL**: `string`
