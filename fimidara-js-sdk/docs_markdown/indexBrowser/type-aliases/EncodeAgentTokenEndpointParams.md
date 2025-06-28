[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / EncodeAgentTokenEndpointParams

# Type Alias: EncodeAgentTokenEndpointParams

> **EncodeAgentTokenEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1782](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1782)

Parameters for encoding an agent token into JWT format

## Properties

### onReferenced?

> `optional` **onReferenced**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1810](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1810)

Whether to perform action on the token used to authorize the API call when performing actions on tokens and a token ID or provided resource ID is not provided. Defaults to true if a call is made and a token ID is not provided

***

### providedResourceId?

> `optional` **providedResourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1798](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1798)

Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones

#### Example

```
my-custom-resource-id
```

***

### tokenId?

> `optional` **tokenId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1806](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1806)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1790](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1790)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
