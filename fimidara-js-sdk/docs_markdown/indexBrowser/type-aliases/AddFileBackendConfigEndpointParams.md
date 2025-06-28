[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddFileBackendConfigEndpointParams

# Type Alias: AddFileBackendConfigEndpointParams

> **AddFileBackendConfigEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:258](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L258)

Parameters for creating a new file backend config to store credentials and settings for external storage providers

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:290](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L290)

Storage backend type (AWS S3, Google Cloud, etc.)

#### Example

```
fimidara
```

***

### credentials

> **credentials**: [`FileBackendConfigCredentials`](FileBackendConfigCredentials.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:302](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L302)

Authentication credentials and configuration for the backend provider

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

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:282](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L282)

Optional description explaining what this config is used for

#### Example

```
This is a resource description.
```

***

### name

> **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:274](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L274)

Display name for the new backend config

#### Example

```
My resource name
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:266](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L266)

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
