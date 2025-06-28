[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateAgentTokenEndpointParams

# Type Alias: UpdateAgentTokenEndpointParams

> **UpdateAgentTokenEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4826](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4826)

Parameters for updating an existing agent token

## Properties

### onReferenced?

> `optional` **onReferenced**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4846](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4846)

Whether to perform action on the token used to authorize the API call when performing actions on tokens and a token ID or provided resource ID is not provided. Defaults to true if a call is made and a token ID is not provided

***

### providedResourceId?

> `optional` **providedResourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4858](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4858)

Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones

#### Example

```
my-custom-resource-id
```

***

### shouldEncode?

> `optional` **shouldEncode**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4862](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4862)

Whether the token returned should include the token encoded in JWT format.

***

### token

> **token**: [`NewAgentTokenInput`](NewAgentTokenInput.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4850](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4850)

Input data for creating a new agent token

***

### tokenId?

> `optional` **tokenId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4842](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4842)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4834](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4834)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
