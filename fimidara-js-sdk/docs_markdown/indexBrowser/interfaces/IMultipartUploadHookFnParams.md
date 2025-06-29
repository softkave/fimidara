[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadHookFnParams

# Interface: IMultipartUploadHookFnParams

Parameters passed to hook functions during multipart upload

## Properties

### estimatedNumParts

> **estimatedNumParts**: `number`

Total estimated number of parts for the upload

***

### part

> **part**: `number`

The part number being processed (1-based)

***

### percentComplete

> **percentComplete**: `number`

Upload progress as a percentage (0-100)

***

### size

> **size**: `number`

Size of the current part in bytes

***

### sizeCompleted

> **sizeCompleted**: `number`

Total size completed so far in bytes
