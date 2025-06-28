[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendConfigInput

# Type Alias: UpdateFileBackendConfigInput

> **UpdateFileBackendConfigInput** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4923](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4923)

Input fields for updating an existing file backend config. All fields are optional - only provide fields you want to change.

## Properties

### credentials?

> `optional` **credentials**: [`FileBackendConfigCredentials`](FileBackendConfigCredentials.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4951](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4951)

New credentials and settings for the backend provider

#### Example

```json
{
  "accessKeyId": "AKIA...",
  "secretAccessKey": "NPox...",
  "region": "us-east-1"
}
```

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4939](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4939)

New description for the config

#### Example

```
This is a resource description.
```

***

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4931](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4931)

New display name for the config

#### Example

```
My resource name
```
