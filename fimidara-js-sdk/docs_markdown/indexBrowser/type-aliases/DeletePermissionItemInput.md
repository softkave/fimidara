[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / DeletePermissionItemInput

# Type Alias: DeletePermissionItemInput

> **DeletePermissionItemInput** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1689](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1689)

Input for deleting a permission item. At least one target (targetId, filepath, folderpath, or workspaceRootname) must be specified.

## Properties

### access?

> `optional` **access**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1737](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1737)

Access level to remove. If not specified, removes both grant and deny permissions.

#### Example

```
true
```

***

### action?

> `optional` **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md) \| [`FimidaraPermissionAction`](FimidaraPermissionAction.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1729](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1729)

Permission action(s) to remove. If not specified, removes all actions.

#### Example

```
uploadFile
```

***

### entityId?

> `optional` **entityId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1745](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1745)

Entity ID(s) to remove permissions from. If not specified, removes permissions for all entities.

#### Example

```
user_01234567890123456789abcd
```

***

### filepath?

> `optional` **filepath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1705](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1705)

File path(s) to remove permissions from

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1713](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1713)

Folder path(s) to remove permissions from

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### targetId?

> `optional` **targetId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1697](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1697)

Specific resource ID(s) to remove permissions from

#### Example

```
folder_01234567890123456789abcd
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1721](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1721)

Workspace root name to remove permissions from

#### Example

```
fimidara-rootname
```
