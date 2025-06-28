[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UpdateFileBackendMountInput

# Type Alias: UpdateFileBackendMountInput

> **UpdateFileBackendMountInput** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4990](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4990)

Input fields for updating an existing file backend mount. All fields are optional - only provide fields you want to change.

## Properties

### configId?

> `optional` **configId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5014](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5014)

New backend config ID to use for this mount

#### Example

```
bckconf_000000000000000000000
```

***

### description?

> `optional` **description**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5006](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5006)

New description explaining the purpose of this mount

#### Example

```
This is a resource description.
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5022](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5022)

New folder path where this mount should be attached

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### index?

> `optional` **index**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5030](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5030)

New priority index for this mount

#### Example

```
10
```

***

### mountedFrom?

> `optional` **mountedFrom**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:5038](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L5038)

New storage location path in the backend provider

#### Example

```
my-bucket/documents
```

***

### name?

> `optional` **name**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4998](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4998)

New display name for the mount

#### Example

```
My resource name
```
