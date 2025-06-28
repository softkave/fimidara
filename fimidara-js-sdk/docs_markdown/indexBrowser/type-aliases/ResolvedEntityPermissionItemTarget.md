[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolvedEntityPermissionItemTarget

# Type Alias: ResolvedEntityPermissionItemTarget

> **ResolvedEntityPermissionItemTarget** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4489](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4489)

Represents the resolved target of a permission item, indicating what resource the permission applies to.

## Properties

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4505](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4505)

The file path if the permission applies to a specific file

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4513](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4513)

The folder path if the permission applies to a specific folder

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### targetId?

> `optional` **targetId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4497](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4497)

The specific resource ID if the permission applies to a particular resource

#### Example

```
folder_01234567890123456789abcd
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4521](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4521)

The workspace root name if the permission applies to the entire workspace

#### Example

```
fimidara-rootname
```
