[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / MfdocEndpointResultWithBinaryResponse

# Type Alias: MfdocEndpointResultWithBinaryResponse\<TResponseType\>

> **MfdocEndpointResultWithBinaryResponse**\<`TResponseType`\> = `TResponseType` *extends* `"blob"` ? `Blob` : `TResponseType` *extends* `"stream"` ? `Readable` : `unknown`

## Type Parameters

### TResponseType

`TResponseType` *extends* `"blob"` \| `"stream"`
