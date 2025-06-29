[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AgentToken

# Type Alias: AgentToken

> **AgentToken** = `object`

Agent token with authentication details and metadata

## Properties

### createdAt

> **createdAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

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

### isDeleted

> **isDeleted**: `boolean`

***

### jwtToken?

> `optional` **jwtToken**: `string`

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

### lastUpdatedAt

> **lastUpdatedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

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

> `optional` **providedResourceId**: `string` \| `null`

Custom resource ID provided by you, or null if using system-generated ID

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

### refreshToken?

> `optional` **refreshToken**: `string`

JWT refresh token string used to obtain new access tokens

#### Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

***

### resourceId

> **resourceId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### shouldRefresh?

> `optional` **shouldRefresh**: `boolean`

Whether the token should be refreshed.

#### Example

```
true
```

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
