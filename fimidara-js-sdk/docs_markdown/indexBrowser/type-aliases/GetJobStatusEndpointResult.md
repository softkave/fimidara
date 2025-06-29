[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetJobStatusEndpointResult

# Type Alias: GetJobStatusEndpointResult

> **GetJobStatusEndpointResult** = `object`

Response containing the current status and optional error information for the requested job

## Properties

### errorMessage?

> `optional` **errorMessage**: `string`

Optional error message providing details when job execution fails

#### Example

```
File processing failed due to invalid format
```

***

### status

> **status**: [`JobStatus`](JobStatus.md)

Current execution status of the job

#### Example

```
completed
```
