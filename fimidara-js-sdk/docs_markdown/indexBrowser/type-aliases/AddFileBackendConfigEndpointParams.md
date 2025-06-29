[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddFileBackendConfigEndpointParams

# Type Alias: AddFileBackendConfigEndpointParams

> **AddFileBackendConfigEndpointParams** = `object`

Parameters for creating a new file backend config to store credentials and settings for external storage providers

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

Storage backend type (AWS S3, Google Cloud, etc.)

#### Example

```
fimidara
```

***

### credentials

> **credentials**: [`FileBackendConfigCredentials`](FileBackendConfigCredentials.md)

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

Optional description explaining what this config is used for

#### Example

```
This is a resource description.
```

***

### name

> **name**: `string`

Display name for the new backend config

#### Example

```
My resource name
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
