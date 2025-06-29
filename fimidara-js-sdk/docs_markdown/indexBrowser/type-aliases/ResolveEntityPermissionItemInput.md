[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolveEntityPermissionItemInput

# Type Alias: ResolveEntityPermissionItemInput

> **ResolveEntityPermissionItemInput** = `object`

Input for resolving entity permissions. Used to check what permissions an entity has on specific resources.

## Properties

### action

> **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md) \| [`FimidaraPermissionAction`](FimidaraPermissionAction.md)[]

Permission action(s) to check (e.g., readFile, uploadFile, deleteFolder)

#### Example

```
uploadFile
```

***

### entityId

> **entityId**: `string` \| `string`[]

Entity ID(s) to check permissions for (user, permission group, or agent token)

#### Example

```
user_01234567890123456789abcd
```

***

### filepath?

> `optional` **filepath**: `string` \| `string`[]

File path(s) to check permissions for

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string` \| `string`[]

Folder path(s) to check permissions for

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### targetId?

> `optional` **targetId**: `string` \| `string`[]

Specific resource ID(s) to check permissions for

#### Example

```
folder_01234567890123456789abcd
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Workspace root name to check permissions for

#### Example

```
fimidara-rootname
```
