[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolveFileBackendMountsEndpointParams

# Type Alias: ResolveFileBackendMountsEndpointParams

> **ResolveFileBackendMountsEndpointParams** = `object`

Parameters for resolving which file backend mounts apply to a specific file or folder. Provide either file or folder identifiers.

## Properties

### fileId?

> `optional` **fileId**: `string`

File ID to resolve mounts for (alternative to filepath)

#### Example

```
file000_000000000000000000000
```

***

### filepath?

> `optional` **filepath**: `string`

File path to resolve mounts for (alternative to fileId)

#### Example

```
/workspace-rootname/my-folder/my-file.txt
```

***

### folderId?

> `optional` **folderId**: `string`

Folder ID to resolve mounts for (alternative to folderpath)

#### Example

```
folder0_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Folder path to resolve mounts for (alternative to folderId)

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
