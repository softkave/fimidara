[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / EncodeAgentTokenEndpointResult

# Type Alias: EncodeAgentTokenEndpointResult

> **EncodeAgentTokenEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1815](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1815)

Response containing the encoded JWT token

## Properties

### jwtToken

> **jwtToken**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1823](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1823)

JWT token string used for authentication

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

***

### jwtTokenExpiresAt?

> `optional` **jwtTokenExpiresAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1835](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1835)

JWT token expiration date. Not the expiration date of the token itself.

***

### refreshToken?

> `optional` **refreshToken**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1831](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1831)

JWT refresh token string used to obtain new access tokens

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
