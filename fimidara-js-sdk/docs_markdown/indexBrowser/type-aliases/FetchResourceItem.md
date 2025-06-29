[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FetchResourceItem

# Type Alias: FetchResourceItem

> **FetchResourceItem** = `object`

Specifies how to fetch a specific resource. You can identify resources by ID, filepath, or folderpath, combined with the action you want to perform.

## Example

```json
{
  "action": "read",
  "filepath": "/documents/report.pdf"
}
```

## Properties

### action

> **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md)

The action to perform on the resource. Common actions include "read", "write", "delete", etc.

#### Example

```
uploadFile
```

***

### filepath?

> `optional` **filepath**: `string` \| `string`[]

The file path(s) to fetch. Use forward slashes as path separators. Can be a single path or an array of paths.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string` \| `string`[]

The folder path(s) to fetch. Use forward slashes as path separators. Can be a single path or an array of paths.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### resourceId?

> `optional` **resourceId**: `string` \| `string`[]

The unique identifier(s) of the resource(s) to fetch. Can be a single ID or an array of IDs.

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

The root name of the workspace. If not provided, uses the default workspace.

#### Example

```
fimidara-rootname
```
