[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / SendCollaborationRequestEndpointParams

# Type Alias: SendCollaborationRequestEndpointParams

> **SendCollaborationRequestEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4660](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4660)

Parameters needed to send a collaboration request to invite someone to your workspace.

## Properties

### expires?

> `optional` **expires**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4692](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4692)

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### message

> **message**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4684](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4684)

Personal message to include with the collaboration request. Use this to explain why you want to collaborate or provide context about the workspace.

#### Example

```
Hi! I would love to collaborate with you on this project. Your expertise in data analysis would be very valuable.
```

***

### recipientEmail

> **recipientEmail**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4676](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4676)

Email address of the user you want to collaborate with. This user will receive the collaboration request and can accept or decline it.

#### Example

```
babar@fimidara.com
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4668](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4668)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
