[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddAgentTokenEndpointParams

# Type Alias: AddAgentTokenEndpointParams

> **AddAgentTokenEndpointParams** = `object`

Parameters for creating a new agent token

## Properties

### description?

> `optional` **description**: `string`

Resource description

#### Example

```
This is a resource description.
```

***

### expiresAt?

> `optional` **expiresAt**: `number`

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### name?

> `optional` **name**: `string`

Resource name

#### Example

```
My resource name
```

***

### providedResourceId?

> `optional` **providedResourceId**: `string`

Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones

#### Example

```
my-custom-resource-id
```

***

### refreshDuration?

> `optional` **refreshDuration**: `number`

The duration in milliseconds for which a generated JWT token, not the actual agent token, is valid.

#### Example

```
2592000000
```

***

### shouldEncode?

> `optional` **shouldEncode**: `boolean`

Whether the token returned should include the token encoded in JWT format.

***

### shouldRefresh?

> `optional` **shouldRefresh**: `boolean`

Whether the token should be refreshed.

#### Example

```
true
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
