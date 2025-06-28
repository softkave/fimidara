[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadHookFnParams

# Interface: IMultipartUploadHookFnParams

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:81](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L81)

Parameters passed to hook functions during multipart upload

## Properties

### estimatedNumParts

> **estimatedNumParts**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:87](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L87)

Total estimated number of parts for the upload

***

### part

> **part**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:83](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L83)

The part number being processed (1-based)

***

### percentComplete

> **percentComplete**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:89](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L89)

Upload progress as a percentage (0-100)

***

### size

> **size**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:85](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L85)

Size of the current part in bytes

***

### sizeCompleted

> **sizeCompleted**: `number`

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:91](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L91)

Total size completed so far in bytes
