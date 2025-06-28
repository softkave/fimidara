[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IssuePresignedPathEndpointParams

# Type Alias: IssuePresignedPathEndpointParams

> **IssuePresignedPathEndpointParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4025](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4025)

## Properties

### action?

> `optional` **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md) \| [`FimidaraPermissionAction`](FimidaraPermissionAction.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4049](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4049)

The action the presigned path will be valid for. Defaults to "readFile" if not specified

#### Example

```
readFile
```

***

### duration?

> `optional` **duration**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4057](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4057)

How long the presigned path should remain valid, in seconds. Defaults to 3600 seconds (1 hour)

#### Example

```
3600
```

***

### expires?

> `optional` **expires**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4065](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4065)

Specific expiration timestamp for the presigned path. Alternative to duration

#### Example

```
1640995200000
```

***

### fileId?

> `optional` **fileId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4041](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4041)

Unique identifier for the file. Required if filepath is not provided

#### Example

```
file_01h2x3y4z5a6b7c8d9e0f1g2h3
```

***

### filepath?

> `optional` **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4033](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4033)

Full path to the file within the workspace. Required if fileId is not provided

#### Example

```
/documents/reports/quarterly-report.pdf
```

***

### usageCount?

> `optional` **usageCount**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4073](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4073)

Maximum number of times the presigned path can be used before it becomes invalid. Defaults to unlimited if not specified

#### Example

```
5
```
