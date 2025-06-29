[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddPermissionGroupEndpointParams

# Type Alias: AddPermissionGroupEndpointParams

> **AddPermissionGroupEndpointParams** = `object`

Parameters for creating a new permission group in a workspace

## Properties

### description?

> `optional` **description**: `string`

Optional description explaining the purpose of this permission group

#### Example

```
Users who can create, edit, and delete content files
```

***

### name

> **name**: `string`

Name for the new permission group. Must be unique within the workspace

#### Example

```
Content Editors
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID where the permission group will be created. If not provided, uses the workspace from the agent token

#### Example

```
wrkspce_000000000000000000000
```
