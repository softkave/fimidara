[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendConfigInput

# Type Alias: UpdateFileBackendConfigInput

> **UpdateFileBackendConfigInput** = `object`

Input fields for updating an existing file backend config. All fields are optional - only provide fields you want to change.

## Properties

### credentials?

> `optional` **credentials**: [`FileBackendConfigCredentials`](FileBackendConfigCredentials.md)

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

New description for the config

#### Example

```
This is a resource description.
```

***

### name?

> `optional` **name**: `string`

New display name for the config

#### Example

```
My resource name
```
