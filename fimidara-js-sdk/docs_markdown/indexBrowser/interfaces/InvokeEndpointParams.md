[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / InvokeEndpointParams

# Interface: InvokeEndpointParams

## Properties

### bearerToken?

> `optional` **bearerToken**: `string`

***

### data?

> `optional` **data**: `any`

***

### endpointURL?

> `optional` **endpointURL**: `string`

***

### formdata?

> `optional` **formdata**: `any`

***

### headers?

> `optional` **headers**: [`MfdocEndpointHeaders`](../type-aliases/MfdocEndpointHeaders.md)

***

### method

> **method**: `Method`

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

#### Parameters

##### progressEvent

`AxiosProgressEvent`

#### Returns

`void`

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

#### Parameters

##### progressEvent

`AxiosProgressEvent`

#### Returns

`void`

***

### path?

> `optional` **path**: `string`

***

### query?

> `optional` **query**: `AnyObject`

***

### responseType

> **responseType**: `"blob"` \| `"stream"` \| `"json"`

***

### serverURL?

> `optional` **serverURL**: `string`
