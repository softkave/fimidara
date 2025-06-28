[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / RefreshAgentTokenEndpointResult

# Type Alias: RefreshAgentTokenEndpointResult

> **RefreshAgentTokenEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4373](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4373)

Response containing refreshed JWT token details

## Properties

### jwtToken

> **jwtToken**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4381](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4381)

JWT token string used for authentication

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

***

### jwtTokenExpiresAt?

> `optional` **jwtTokenExpiresAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4393](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4393)

JWT token expiration date. Not the expiration date of the token itself.

***

### refreshToken?

> `optional` **refreshToken**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4389](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4389)

JWT refresh token string used to obtain new access tokens

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
