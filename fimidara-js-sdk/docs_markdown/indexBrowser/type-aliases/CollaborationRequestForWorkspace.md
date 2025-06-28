[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CollaborationRequestForWorkspace

# Type Alias: CollaborationRequestForWorkspace

> **CollaborationRequestForWorkspace** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3411](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3411)

A collaboration request as seen by the workspace owner. Contains details about who was invited and the current status of the invitation.

## Properties

### createdAt

> **createdAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3431](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3431)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3423](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3423)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3452](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3452)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3456](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3456)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### expiresAt?

> `optional` **expiresAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3488](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3488)

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3444](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3444)

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3443](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3443)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3435](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3435)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### message

> **message**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3480](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3480)

Personal message to include with the collaboration request. Use this to explain why you want to collaborate or provide context about the workspace.

#### Example

```
Hi! I would love to collaborate with you on this project. Your expertise in data analysis would be very valuable.
```

***

### readAt?

> `optional` **readAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3504](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3504)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### recipientEmail

> **recipientEmail**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3472](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3472)

Email address of the user you want to collaborate with. This user will receive the collaboration request and can accept or decline it.

#### Example

```
babar@fimidara.com
```

***

### resourceId

> **resourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3419](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3419)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### status

> **status**: [`CollaborationRequestStatusType`](CollaborationRequestStatusType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3512](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3512)

Current status of the collaboration request. Shows whether the request is pending, accepted, declined, or revoked.

#### Example

```
accepted
```

***

### statusDate

> **statusDate**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3520](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3520)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### workspaceId

> **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3464](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3464)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceName

> **workspaceName**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3496](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3496)

Workspace name, case insensitive

#### Example

```
fimidara
```
