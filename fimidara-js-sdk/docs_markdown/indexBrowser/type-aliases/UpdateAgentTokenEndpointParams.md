[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateAgentTokenEndpointParams

# Type Alias: UpdateAgentTokenEndpointParams

> **UpdateAgentTokenEndpointParams** = `object`

Parameters for updating an existing agent token

## Properties

### onReferenced?

> `optional` **onReferenced**: `boolean`

Whether to perform action on the token used to authorize the API call when performing actions on tokens and a token ID or provided resource ID is not provided. Defaults to true if a call is made and a token ID is not provided

***

### providedResourceId?

> `optional` **providedResourceId**: `string`

Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones

#### Example

```
my-custom-resource-id
```

***

### shouldEncode?

> `optional` **shouldEncode**: `boolean`

Whether the token returned should include the token encoded in JWT format.

***

### token

> **token**: [`NewAgentTokenInput`](NewAgentTokenInput.md)

Input data for creating a new agent token

***

### tokenId?

> `optional` **tokenId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
