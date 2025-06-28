[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateCollaborationRequestInput

# Type Alias: UpdateCollaborationRequestInput

> **UpdateCollaborationRequestInput** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4876](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4876)

Fields you can update in a collaboration request. You can modify the message or extend the expiration date.

## Properties

### expires?

> `optional` **expires**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4892](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4892)

Expiration date as UTC timestamp in milliseconds

#### Example

```
1704067200000
```

***

### message?

> `optional` **message**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4884](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4884)

Personal message to include with the collaboration request. Use this to explain why you want to collaborate or provide context about the workspace.

#### Example

```
Hi! I would love to collaborate with you on this project. Your expertise in data analysis would be very valuable.
```
