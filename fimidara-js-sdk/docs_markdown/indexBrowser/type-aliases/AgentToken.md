[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AgentToken

# Type Alias: AgentToken

> **AgentToken** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:103](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L103)

Agent token with authentication details and metadata

## Properties

### createdAt

> **createdAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:123](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L123)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:115](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L115)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:144](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L144)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:148](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L148)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:172](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L172)

Resource description

#### Example

```
This is a resource description.
```

***

### expiresAt?

> `optional` **expiresAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:196](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L196)

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:136](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L136)

***

### jwtToken?

> `optional` **jwtToken**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:180](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L180)

JWT token string used for authentication

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

***

### jwtTokenExpiresAt?

> `optional` **jwtTokenExpiresAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:208](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L208)

JWT token expiration date. Not the expiration date of the token itself.

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:135](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L135)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:127](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L127)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:164](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L164)

Resource name

#### Example

```
My resource name
```

***

### providedResourceId?

> `optional` **providedResourceId**: `string` \| `null`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:204](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L204)

Custom resource ID provided by you, or null if using system-generated ID

#### Example

```
my-custom-resource-id
```

***

### refreshDuration?

> `optional` **refreshDuration**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:224](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L224)

The duration in milliseconds for which a generated JWT token, not the actual agent token, is valid.

#### Example

```
2592000000
```

***

### refreshToken?

> `optional` **refreshToken**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:188](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L188)

JWT refresh token string used to obtain new access tokens

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

***

### resourceId

> **resourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:111](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L111)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### shouldRefresh?

> `optional` **shouldRefresh**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:216](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L216)

Whether the token should be refreshed.

#### Example

```
true
```

***

### workspaceId

> **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:156](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L156)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
