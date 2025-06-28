[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / MfdocEndpointResultWithBinaryResponse

# Type Alias: MfdocEndpointResultWithBinaryResponse\<TResponseType\>

> **MfdocEndpointResultWithBinaryResponse**\<`TResponseType`\> = `TResponseType` *extends* `"blob"` ? `Blob` : `TResponseType` *extends* `"stream"` ? `Readable` : `unknown`

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/types.d.ts:6

## Type Parameters

### TResponseType

`TResponseType` *extends* `"blob"` \| `"stream"`
