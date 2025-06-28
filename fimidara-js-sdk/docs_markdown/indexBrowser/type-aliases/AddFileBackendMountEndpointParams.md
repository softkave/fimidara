[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AddFileBackendMountEndpointParams

# Type Alias: AddFileBackendMountEndpointParams

> **AddFileBackendMountEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:398](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L398)

Parameters for creating a new file backend mount to connect a folder to external storage

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:430](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L430)

Storage backend type to use (AWS S3, Google Cloud, etc.)

#### Example

```
fimidara
```

***

### configId

> **configId**: `string` \| `null`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:446](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L446)

Backend config ID to use, or null for default fimidara storage

#### Example

```
bckconf_000000000000000000000
```

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:422](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L422)

Optional description explaining the purpose of this mount

#### Example

```
This is a resource description.
```

***

### folderpath

> **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:438](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L438)

Folder path where this mount should be attached (e.g., "/documents")

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### index

> **index**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:454](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L454)

Priority index (higher numbers = higher priority)

#### Example

```
10
```

***

### mountedFrom

> **mountedFrom**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:462](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L462)

Storage location in the backend (e.g., S3 bucket name or path)

#### Example

```
my-bucket/documents
```

***

### name

> **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:414](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L414)

Display name for the new mount

#### Example

```
My resource name
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:406](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L406)

Workspace ID (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
