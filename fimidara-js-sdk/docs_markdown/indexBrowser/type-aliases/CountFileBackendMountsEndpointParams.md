[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CountFileBackendMountsEndpointParams

# Type Alias: CountFileBackendMountsEndpointParams

> **CountFileBackendMountsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1267](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1267)

Parameters for counting file backend mounts with optional filtering

## Properties

### backend?

> `optional` **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1283](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1283)

Filter mounts by backend type (optional)

#### Example

```
fimidara
```

***

### configId?

> `optional` **configId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1299](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1299)

Filter mounts by backend config ID (optional)

#### Example

```
wrkspce_000000000000000000000
```

***

### folderpath?

> `optional` **folderpath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1291](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1291)

Filter mounts by folder path (optional)

#### Example

```
/workspace-rootname/my-folder/my-sub-folder
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:1275](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L1275)

Workspace ID to filter mounts (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
