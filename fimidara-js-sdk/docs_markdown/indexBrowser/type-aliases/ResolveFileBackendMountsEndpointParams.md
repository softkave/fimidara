[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolveFileBackendMountsEndpointParams

# Type Alias: ResolveFileBackendMountsEndpointParams

> **ResolveFileBackendMountsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4584](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4584)

Parameters for resolving which file backend mounts apply to a specific file or folder. Provide either file or folder identifiers.

## Properties

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4616](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4616)

File ID to resolve mounts for (alternative to filepath)

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4624](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4624)

File path to resolve mounts for (alternative to fileId)

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderId?

> `optional` **folderId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4600](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4600)

Folder ID to resolve mounts for (alternative to folderpath)

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4608](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4608)

Folder path to resolve mounts for (alternative to folderId)

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4592](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4592)

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
