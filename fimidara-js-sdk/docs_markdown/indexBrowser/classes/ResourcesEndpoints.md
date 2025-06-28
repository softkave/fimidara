[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResourcesEndpoints

# Class: ResourcesEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:1036](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L1036)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new ResourcesEndpoints**(`config`, `inheritConfigFrom?`): `ResourcesEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`ResourcesEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### getResources()

> **getResources**(`props`, `opts?`): `Promise`\<[`GetResourcesEndpointResult`](../type-aliases/GetResourcesEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:1040](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L1040)

Fetch multiple resources in a single request. This endpoint allows you to retrieve files, folders, and other resources by specifying different identification methods (ID, filepath, or folderpath) and the actions you want to perform on them. Perfect for batch operations and reducing API calls.

#### Parameters

##### props

[`GetResourcesEndpointParams`](../type-aliases/GetResourcesEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetResourcesEndpointResult`](../type-aliases/GetResourcesEndpointResult.md)\>

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
