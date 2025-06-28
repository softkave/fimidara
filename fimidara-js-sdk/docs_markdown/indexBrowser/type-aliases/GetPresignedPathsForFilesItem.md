[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetPresignedPathsForFilesItem

# Type Alias: GetPresignedPathsForFilesItem

> **GetPresignedPathsForFilesItem** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2415](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2415)

## Properties

### filepath

> **filepath**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2431](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2431)

The original filepath of the file that this presigned path corresponds to

#### Example

```
/documents/reports/quarterly-report.pdf
```

***

### path

> **path**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2423](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2423)

The generated presigned path for accessing this specific file

#### Example

```
/v1/files/presigned/abc123def456/quarterly-report.pdf?token=xyz789
```
