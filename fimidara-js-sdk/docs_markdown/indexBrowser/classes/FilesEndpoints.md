[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FilesEndpoints

# Class: FilesEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:663](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L663)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new FilesEndpoints**(`config`, `inheritConfigFrom?`): `FilesEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:667](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L667)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:680](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L680)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:693](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L693)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### listParts()

> **listParts**(`props?`, `opts?`): `Promise`\<[`ListPartsEndpointResult`](../type-aliases/ListPartsEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:706](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L706)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:719](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L719)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:12

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:13

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:740](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L740)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:753](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L753)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:766](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L766)

#### Parameters

##### props

[`UploadFileEndpointParams`](../type-aliases/UploadFileEndpointParams.md)

##### opts?

[`MfdocEndpointUploadBinaryOpts`](../type-aliases/MfdocEndpointUploadBinaryOpts.md)

#### Returns

`Promise`\<[`UploadFileEndpointResult`](../type-aliases/UploadFileEndpointResult.md)\>
