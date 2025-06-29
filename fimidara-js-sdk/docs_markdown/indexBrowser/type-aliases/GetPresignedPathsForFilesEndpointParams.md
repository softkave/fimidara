[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetPresignedPathsForFilesEndpointParams

# Type Alias: GetPresignedPathsForFilesEndpointParams

> **GetPresignedPathsForFilesEndpointParams** = `object`

## Properties

### files?

> `optional` **files**: [`FileMatcher`](FileMatcher.md)[]

List of files to generate presigned paths for. Each file can be identified by either filepath or fileId

***

### workspaceId?

> `optional` **workspaceId**: `string`

ID of the workspace containing the files. If not provided, uses the default workspace

#### Example

```
workspace_01h2x3y4z5a6b7c8d9e0f1g2h3
```
