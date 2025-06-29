[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResourcesEndpoints

# Class: ResourcesEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new ResourcesEndpoints**(`config`, `inheritConfigFrom?`): `ResourcesEndpoints`

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
