[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PermissionItemInput

# Type Alias: PermissionItemInput

> **PermissionItemInput** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:920](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L920)

Input for creating a new permission item. Must specify target (targetId, filepath, folderpath, or workspaceRootname), entity, action, and access level.

## Properties

### access

> **access**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:960](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L960)

Whether to grant (true) or deny (false) access

#### Example

```
true
```

***

### action

> **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md) \| [`FimidaraPermissionAction`](FimidaraPermissionAction.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:976](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L976)

Permission action(s) to grant/deny (e.g., readFile, uploadFile, deleteFolder)

#### Example

```
uploadFile
```

***

### entityId

> **entityId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:968](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L968)

Entity ID(s) to grant/deny permission to (user, permission group, or agent token)

#### Example

```
user_01234567890123456789abcd
```

***

### filepath?

> `optional` **filepath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:936](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L936)

File path(s) to grant/deny permission to

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:944](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L944)

Folder path(s) to grant/deny permission to

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### targetId?

> `optional` **targetId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:928](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L928)

Specific resource ID(s) to grant/deny permission to

#### Example

```
folder_01234567890123456789abcd
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:952](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L952)

Workspace root name to grant/deny permission to

#### Example

```
fimidara-rootname
```
