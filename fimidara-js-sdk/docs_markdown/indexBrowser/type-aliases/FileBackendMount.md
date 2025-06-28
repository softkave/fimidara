[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendMount

# Type Alias: FileBackendMount

> **FileBackendMount** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:467](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L467)

A file backend mount connects a folder in your workspace to external storage, allowing files to be stored in AWS S3, Google Cloud, etc.

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:544](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L544)

The storage backend type (AWS S3, Google Cloud, etc.)

#### Example

```
fimidara
```

***

### configId

> **configId**: `string` \| `null`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:552](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L552)

Backend config ID containing credentials, or null for default storage

#### Example

```
bckconf_000000000000000000000
```

***

### createdAt

> **createdAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:487](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L487)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:479](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L479)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:508](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L508)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:512](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L512)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:536](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L536)

Optional description explaining the purpose of this mount

#### Example

```
This is a resource description.
```

***

### index

> **index**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:571](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L571)

Priority index when multiple mounts exist on the same folder

#### Example

```
10
```

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:500](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L500)

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:499](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L499)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:491](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L491)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### mountedFrom

> **mountedFrom**: `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:583](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L583)

Path segments indicating where files are stored in the backend

#### Example

```json
[
  "my-bucket",
  "documents",
  "uploads"
]
```

***

### name

> **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:528](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L528)

Display name for this mount

#### Example

```
My resource name
```

***

### namepath

> **namepath**: `string`[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:563](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L563)

Array of folder names representing the path where this mount is attached

#### Example

```json
[
  "my-folder",
  "my-sub-folder"
]
```

***

### resourceId

> **resourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:475](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L475)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId

> **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:520](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L520)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
