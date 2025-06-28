[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadParamsWithTestInstrumentation

# Interface: IMultipartUploadParamsWithTestInstrumentation

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:146](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L146)

Internal interface for test instrumentation of multipart upload hooks

## Properties

### \_\_afterPart()?

> `optional` **\_\_afterPart**: (`params`) => `OrPromise`\<`void`\>

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:148](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L148)

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

***

### \_\_beforePart()?

> `optional` **\_\_beforePart**: (`params`) => `OrPromise`\<`void`\>

Defined in: [fimidara-js-sdk/src/multipart/multipart.ts:147](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/multipart/multipart.ts#L147)

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>
