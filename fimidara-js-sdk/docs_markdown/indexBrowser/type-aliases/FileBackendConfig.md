[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendConfig

# Type Alias: FileBackendConfig

> **FileBackendConfig** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:307](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L307)

A file backend config stores credentials and settings for connecting to external storage providers like AWS S3, Google Cloud Storage, etc.

## Properties

### backend

> **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:384](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L384)

The storage backend type this config is for

#### Example

```
fimidara
```

***

### createdAt

> **createdAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:327](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L327)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:319](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L319)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:348](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L348)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:352](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L352)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:376](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L376)

Optional description explaining what this config is used for

#### Example

```
This is a resource description.
```

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:340](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L340)

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:339](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L339)

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:331](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L331)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### name

> **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:368](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L368)

Display name for this backend config

#### Example

```
My resource name
```

***

### resourceId

> **resourceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:315](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L315)

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### workspaceId

> **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:360](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L360)

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
