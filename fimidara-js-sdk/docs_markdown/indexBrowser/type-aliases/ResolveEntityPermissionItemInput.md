[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolveEntityPermissionItemInput

# Type Alias: ResolveEntityPermissionItemInput

> **ResolveEntityPermissionItemInput** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4419](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4419)

Input for resolving entity permissions. Used to check what permissions an entity has on specific resources.

## Properties

### action

> **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md) \| [`FimidaraPermissionAction`](FimidaraPermissionAction.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4467](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4467)

Permission action(s) to check (e.g., readFile, uploadFile, deleteFolder)

#### Example

```
uploadFile
```

***

### entityId

> **entityId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4459](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4459)

Entity ID(s) to check permissions for (user, permission group, or agent token)

#### Example

```
user_01234567890123456789abcd
```

***

### filepath?

> `optional` **filepath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4435](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4435)

File path(s) to check permissions for

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4443](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4443)

Folder path(s) to check permissions for

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### targetId?

> `optional` **targetId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4427](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4427)

Specific resource ID(s) to check permissions for

#### Example

```
folder_01234567890123456789abcd
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4451](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4451)

Workspace root name to check permissions for

#### Example

```
fimidara-rootname
```
