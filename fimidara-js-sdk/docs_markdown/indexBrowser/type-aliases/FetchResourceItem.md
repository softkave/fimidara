[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FetchResourceItem

# Type Alias: FetchResourceItem

> **FetchResourceItem** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2449](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2449)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2465](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2465)

The action to perform on the resource. Common actions include "read", "write", "delete", etc.

#### Example

```
uploadFile
```

***

### filepath?

> `optional` **filepath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2473](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2473)

The file path(s) to fetch. Use forward slashes as path separators. Can be a single path or an array of paths.

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderpath?

> `optional` **folderpath**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2481](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2481)

The folder path(s) to fetch. Use forward slashes as path separators. Can be a single path or an array of paths.

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### resourceId?

> `optional` **resourceId**: `string` \| `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2457](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2457)

The unique identifier(s) of the resource(s) to fetch. Can be a single ID or an array of IDs.

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceRootname?

> `optional` **workspaceRootname**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2489](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2489)

The root name of the workspace. If not provided, uses the default workspace.

#### Example

```
fimidara-rootname
```
