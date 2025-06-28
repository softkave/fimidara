[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / JobsEndpoints

# Class: JobsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:987](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L987)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new JobsEndpoints**(`config`, `inheritConfigFrom?`): `JobsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:991](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L991)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

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
