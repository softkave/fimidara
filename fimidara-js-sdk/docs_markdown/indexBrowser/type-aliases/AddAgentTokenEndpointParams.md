[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddAgentTokenEndpointParams

# Type Alias: AddAgentTokenEndpointParams

> **AddAgentTokenEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:9](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L9)

Parameters for creating a new agent token

## Properties

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:33](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L33)

Resource description

#### Example

```
This is a resource description.
```

***

### expiresAt?

> `optional` **expiresAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:41](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L41)

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:25](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L25)

Resource name

#### Example

```
My resource name
```

***

### providedResourceId?

> `optional` **providedResourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:49](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L49)

Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones

#### Example

```
my-custom-resource-id
```

***

### refreshDuration?

> `optional` **refreshDuration**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:69](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L69)

The duration in milliseconds for which a generated JWT token, not the actual agent token, is valid.

#### Example

```
2592000000
```

***

### shouldEncode?

> `optional` **shouldEncode**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:53](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L53)

Whether the token returned should include the token encoded in JWT format.

***

### shouldRefresh?

> `optional` **shouldRefresh**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:61](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L61)

Whether the token should be refreshed.

#### Example

```
true
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:17](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L17)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
