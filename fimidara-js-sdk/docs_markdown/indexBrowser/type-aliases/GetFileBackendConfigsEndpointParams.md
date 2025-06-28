[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetFileBackendConfigsEndpointParams

# Type Alias: GetFileBackendConfigsEndpointParams

> **GetFileBackendConfigsEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2103](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2103)

Parameters for retrieving a list of file backend configs with optional filtering

## Properties

### backend?

> `optional` **backend**: [`FileBackendType`](FileBackendType.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2119](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2119)

Filter configs by backend type (optional)

#### Example

```
fimidara
```

***

### page?

> `optional` **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2123](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2123)

Page number for pagination (optional, defaults to 0)

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2131](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2131)

Number of items per page (optional, defaults to system limit)

#### Example

```
50
```

***

### workspaceId?

> `optional` **workspaceId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2111](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2111)

Workspace ID to filter configs (optional if using workspace from auth context)

#### Example

```
wrkspce_000000000000000000000
```
