[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CollaborationRequestForWorkspace

# Type Alias: CollaborationRequestForWorkspace

> **CollaborationRequestForWorkspace** = `object`

A collaboration request as seen by the workspace owner. Contains details about who was invited and the current status of the invitation.

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

### message

> **message**: `string`

Personal message to include with the collaboration request. Use this to explain why you want to collaborate or provide context about the workspace.

#### Example

```
Hi! I would love to collaborate with you on this project. Your expertise in data analysis would be very valuable.
```

***

### readAt?

> `optional` **readAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### recipientEmail

> **recipientEmail**: `string`

Email address of the user you want to collaborate with. This user will receive the collaboration request and can accept or decline it.

#### Example

```
babar@fimidara.com
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

### status

> **status**: [`CollaborationRequestStatusType`](CollaborationRequestStatusType.md)

Current status of the collaboration request. Shows whether the request is pending, accepted, declined, or revoked.

#### Example

```
accepted
```

***

### statusDate

> **statusDate**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceName

> **workspaceName**: `string`

Workspace name, case insensitive

#### Example

```
fimidara
```
