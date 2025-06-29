[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FilesEndpoints

# Class: FilesEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new FilesEndpoints**(`config`, `inheritConfigFrom?`): `FilesEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`FilesEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### completeMultipartUpload()

> **completeMultipartUpload**(`props`, `opts?`): `Promise`\<[`CompleteMultipartUploadEndpointResult`](../type-aliases/CompleteMultipartUploadEndpointResult.md)\>

Complete a multipart upload by assembling all uploaded parts into a single file

#### Parameters

##### props

[`CompleteMultipartUploadEndpointParams`](../type-aliases/CompleteMultipartUploadEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CompleteMultipartUploadEndpointResult`](../type-aliases/CompleteMultipartUploadEndpointResult.md)\>

***

### deleteFile()

> **deleteFile**(`props?`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

#### Parameters

##### props?

[`DeleteFileEndpointParams`](../type-aliases/DeleteFileEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

***

### getFileDetails()

> **getFileDetails**(`props?`, `opts?`): `Promise`\<[`GetFileDetailsEndpointResult`](../type-aliases/GetFileDetailsEndpointResult.md)\>

#### Parameters

##### props?

[`GetFileDetailsEndpointParams`](../type-aliases/GetFileDetailsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetFileDetailsEndpointResult`](../type-aliases/GetFileDetailsEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### listParts()

> **listParts**(`props?`, `opts?`): `Promise`\<[`ListPartsEndpointResult`](../type-aliases/ListPartsEndpointResult.md)\>

#### Parameters

##### props?

[`ListPartsEndpointParams`](../type-aliases/ListPartsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`ListPartsEndpointResult`](../type-aliases/ListPartsEndpointResult.md)\>

***

### readFile()

> **readFile**\<`TResponseType`\>(`props?`, `opts?`): `Promise`\<[`MfdocEndpointResultWithBinaryResponse`](../type-aliases/MfdocEndpointResultWithBinaryResponse.md)\<`TResponseType`\>\>

#### Type Parameters

##### TResponseType

`TResponseType` *extends* `"blob"` \| `"stream"`

#### Parameters

##### props?

[`ReadFileEndpointParams`](../type-aliases/ReadFileEndpointParams.md)

##### opts?

[`MfdocEndpointDownloadBinaryOpts`](../type-aliases/MfdocEndpointDownloadBinaryOpts.md)\<`TResponseType`\> = `...`

#### Returns

`Promise`\<[`MfdocEndpointResultWithBinaryResponse`](../type-aliases/MfdocEndpointResultWithBinaryResponse.md)\<`TResponseType`\>\>

***

### setSdkAuthToken()

> **setSdkAuthToken**(`token`): `void`

#### Parameters

##### token

[`MfdocJsConfigAuthToken`](../type-aliases/MfdocJsConfigAuthToken.md)

#### Returns

`void`

#### Inherited from

`AbstractSdkEndpoints.setSdkAuthToken`

***

### setSdkConfig()

> **setSdkConfig**(`update`): `void`

#### Parameters

##### update

`Partial`\<[`MfdocJsConfigBase`](../interfaces/MfdocJsConfigBase.md)\>

#### Returns

`void`

#### Inherited from

`AbstractSdkEndpoints.setSdkConfig`

***

### startMultipartUpload()

> **startMultipartUpload**(`props`, `opts?`): `Promise`\<[`StartMultipartUploadEndpointResult`](../type-aliases/StartMultipartUploadEndpointResult.md)\>

#### Parameters

##### props

[`StartMultipartUploadEndpointParams`](../type-aliases/StartMultipartUploadEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`StartMultipartUploadEndpointResult`](../type-aliases/StartMultipartUploadEndpointResult.md)\>

***

### updateFileDetails()

> **updateFileDetails**(`props`, `opts?`): `Promise`\<[`UpdateFileDetailsEndpointResult`](../type-aliases/UpdateFileDetailsEndpointResult.md)\>

#### Parameters

##### props

[`UpdateFileDetailsEndpointParams`](../type-aliases/UpdateFileDetailsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateFileDetailsEndpointResult`](../type-aliases/UpdateFileDetailsEndpointResult.md)\>

***

### uploadFile()

> **uploadFile**(`props`, `opts?`): `Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>

#### Parameters

##### props

[`UploadFileEndpointParams`](../type-aliases/UploadFileEndpointParams.md)

##### opts?

[`MfdocEndpointUploadBinaryOpts`](../type-aliases/MfdocEndpointUploadBinaryOpts.md)

#### Returns

`Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>
