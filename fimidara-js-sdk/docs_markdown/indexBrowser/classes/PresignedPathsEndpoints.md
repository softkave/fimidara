[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PresignedPathsEndpoints

# Class: PresignedPathsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:1005](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L1005)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new PresignedPathsEndpoints**(`config`, `inheritConfigFrom?`): `PresignedPathsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`PresignedPathsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### getPresignedPaths()

> **getPresignedPaths**(`props?`, `opts?`): `Promise`\<[`GetPresignedPathsForFilesEndpointResult`](../type-aliases/GetPresignedPathsForFilesEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:1009](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L1009)

Bulk generates presigned paths for multiple files at once. This endpoint is more efficient than calling issuePresignedPath multiple times when you need presigned paths for several files. Each file can be identified by either its filepath or fileId. The response includes the generated presigned path along with the original filepath for easy mapping.

#### Parameters

##### props?

[`GetPresignedPathsForFilesEndpointParams`](../type-aliases/GetPresignedPathsForFilesEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetPresignedPathsForFilesEndpointResult`](../type-aliases/GetPresignedPathsForFilesEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### issuePresignedPath()

> **issuePresignedPath**(`props?`, `opts?`): `Promise`\<[`IssuePresignedPathEndpointResult`](../type-aliases/IssuePresignedPathEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:1022](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L1022)

#### Parameters

##### props?

[`IssuePresignedPathEndpointParams`](../type-aliases/IssuePresignedPathEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`IssuePresignedPathEndpointResult`](../type-aliases/IssuePresignedPathEndpointResult.md)\>

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
