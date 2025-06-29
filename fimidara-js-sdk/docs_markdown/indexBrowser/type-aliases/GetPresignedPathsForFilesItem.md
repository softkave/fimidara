[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetPresignedPathsForFilesItem

# Type Alias: GetPresignedPathsForFilesItem

> **GetPresignedPathsForFilesItem** = `object`

## Properties

### filepath

> **filepath**: `string`

The original filepath of the file that this presigned path corresponds to

#### Example

```
/documents/reports/quarterly-report.pdf
```

***

### path

> **path**: `string`

The generated presigned path for accessing this specific file

#### Example

```
/v1/files/presigned/abc123def456/quarterly-report.pdf?token=xyz789
```
