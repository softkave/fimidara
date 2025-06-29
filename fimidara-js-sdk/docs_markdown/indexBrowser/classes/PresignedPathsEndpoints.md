[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PresignedPathsEndpoints

# Class: PresignedPathsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new PresignedPathsEndpoints**(`config`, `inheritConfigFrom?`): `PresignedPathsEndpoints`

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

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### issuePresignedPath()

> **issuePresignedPath**(`props?`, `opts?`): `Promise`\<[`IssuePresignedPathEndpointResult`](../type-aliases/IssuePresignedPathEndpointResult.md)\>

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
