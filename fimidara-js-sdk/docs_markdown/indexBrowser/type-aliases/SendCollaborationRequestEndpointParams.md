[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / SendCollaborationRequestEndpointParams

# Type Alias: SendCollaborationRequestEndpointParams

> **SendCollaborationRequestEndpointParams** = `object`

Parameters needed to send a collaboration request to invite someone to your workspace.

## Properties

### expires?

> `optional` **expires**: `number`

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### message

> **message**: `string`

Personal message to include with the collaboration request. Use this to explain why you want to collaborate or provide context about the workspace.

#### Example

```
Hi! I would love to collaborate with you on this project. Your expertise in data analysis would be very valuable.
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

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
