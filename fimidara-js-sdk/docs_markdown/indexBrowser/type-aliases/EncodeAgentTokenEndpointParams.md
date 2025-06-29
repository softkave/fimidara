[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / EncodeAgentTokenEndpointParams

# Type Alias: EncodeAgentTokenEndpointParams

> **EncodeAgentTokenEndpointParams** = `object`

Parameters for encoding an agent token into JWT format

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
