[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetJobStatusEndpointResult

# Type Alias: GetJobStatusEndpointResult

> **GetJobStatusEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2327](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2327)

Response containing the current status and optional error information for the requested job

## Properties

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2343](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2343)

Optional error message providing details when job execution fails

#### Example

```
File processing failed due to invalid format
```

***

### status

> **status**: [`JobStatus`](JobStatus.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2335](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2335)

Current execution status of the job

#### Example

```
completed
```
