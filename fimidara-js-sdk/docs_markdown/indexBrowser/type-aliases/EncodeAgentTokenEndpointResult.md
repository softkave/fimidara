[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / EncodeAgentTokenEndpointResult

# Type Alias: EncodeAgentTokenEndpointResult

> **EncodeAgentTokenEndpointResult** = `object`

Response containing the encoded JWT token

## Properties

### jwtToken

> **jwtToken**: `string`

JWT token string used for authentication

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

***

### jwtTokenExpiresAt?

> `optional` **jwtTokenExpiresAt**: `number`

JWT token expiration date. Not the expiration date of the token itself.

***

### refreshToken?

> `optional` **refreshToken**: `string`

JWT refresh token string used to obtain new access tokens

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
