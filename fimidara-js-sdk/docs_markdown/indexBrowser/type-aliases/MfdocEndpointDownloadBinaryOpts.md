[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / MfdocEndpointDownloadBinaryOpts

# Type Alias: MfdocEndpointDownloadBinaryOpts\<TResponseType\>

> **MfdocEndpointDownloadBinaryOpts**\<`TResponseType`\> = [`MfdocEndpointOpts`](MfdocEndpointOpts.md) & `object`

## Type declaration

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

**NOTE**: doesn't work in Node.js at the moment.

#### Parameters

##### progressEvent

[`MfdocEndpointProgressEvent`](MfdocEndpointProgressEvent.md)

#### Returns

`void`

### responseType

> **responseType**: `TResponseType`

## Type Parameters

### TResponseType

`TResponseType` *extends* `"blob"` \| `"stream"`
