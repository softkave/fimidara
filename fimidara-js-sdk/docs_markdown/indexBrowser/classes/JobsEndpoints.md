[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / JobsEndpoints

# Class: JobsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new JobsEndpoints**(`config`, `inheritConfigFrom?`): `JobsEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`JobsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### getJobStatus()

> **getJobStatus**(`props`, `opts?`): `Promise`\<[`GetJobStatusEndpointResult`](../type-aliases/GetJobStatusEndpointResult.md)\>

Retrieve the current execution status of a job by its unique identifier. Returns the job status and any error messages if applicable.

#### Parameters

##### props

[`GetJobStatusEndpointParams`](../type-aliases/GetJobStatusEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetJobStatusEndpointResult`](../type-aliases/GetJobStatusEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

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
