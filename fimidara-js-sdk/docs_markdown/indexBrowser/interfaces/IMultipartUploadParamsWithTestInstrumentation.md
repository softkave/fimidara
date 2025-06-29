[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / IMultipartUploadParamsWithTestInstrumentation

# Interface: IMultipartUploadParamsWithTestInstrumentation

Internal interface for test instrumentation of multipart upload hooks

## Properties

### \_\_afterPart()?

> `optional` **\_\_afterPart**: (`params`) => `OrPromise`\<`void`\>

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>

***

### \_\_beforePart()?

> `optional` **\_\_beforePart**: (`params`) => `OrPromise`\<`void`\>

#### Parameters

##### params

[`IMultipartUploadHookFnParams`](IMultipartUploadHookFnParams.md)

#### Returns

`OrPromise`\<`void`\>
