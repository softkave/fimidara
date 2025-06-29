[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / Collaborator

# Type Alias: Collaborator

> **Collaborator** = `object`

Publicly visible information about a collaborator.

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

### email

> **email**: `string`

Collaborator's email address used for authentication and notifications.

#### Example

```
johndoe@email.com
```

***

### firstName

> **firstName**: `string`

Collaborator's first name as provided during registration or invitation.

#### Example

```
John
```

***

### isDeleted

> **isDeleted**: `boolean`

***

### lastName

> **lastName**: `string`

Collaborator's last name as provided during registration or invitation.

#### Example

```
Doe
```

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

### resourceId

> **resourceId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
