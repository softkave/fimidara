[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / MfdocEndpointDownloadBinaryOpts

# Type Alias: MfdocEndpointDownloadBinaryOpts\<TResponseType\>

> **MfdocEndpointDownloadBinaryOpts**\<`TResponseType`\> = [`MfdocEndpointOpts`](MfdocEndpointOpts.md) & `object`

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/types.d.ts:25

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
