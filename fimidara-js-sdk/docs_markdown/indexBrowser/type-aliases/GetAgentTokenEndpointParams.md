[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetAgentTokenEndpointParams

# Type Alias: GetAgentTokenEndpointParams

> **GetAgentTokenEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1840](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1840)

Parameters for retrieving a specific agent token

## Properties

### onReferenced?

> `optional` **onReferenced**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1868](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1868)

Whether to perform action on the token used to authorize the API call when performing actions on tokens and a token ID or provided resource ID is not provided. Defaults to true if a call is made and a token ID is not provided

***

### providedResourceId?

> `optional` **providedResourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1856](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1856)

Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones

#### Example

```
my-custom-resource-id
```

***

### shouldEncode?

> `optional` **shouldEncode**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1872](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1872)

Whether the token returned should include the token encoded in JWT format.

***

### tokenId?

> `optional` **tokenId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1864](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1864)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1848](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1848)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
