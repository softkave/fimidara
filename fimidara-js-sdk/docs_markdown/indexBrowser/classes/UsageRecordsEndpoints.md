[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / UsageRecordsEndpoints

# Class: UsageRecordsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new UsageRecordsEndpoints**(`config`, `inheritConfigFrom?`): `UsageRecordsEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`UsageRecordsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### countWorkspaceSummedUsage()

> **countWorkspaceSummedUsage**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

Count the total number of workspace usage records matching the specified filters

#### Parameters

##### props?

[`CountWorkspaceSummedUsageEndpointParams`](../type-aliases/CountWorkspaceSummedUsageEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getUsageCosts()

> **getUsageCosts**(`opts?`): `Promise`\<[`GetUsageCostsEndpointResult`](../type-aliases/GetUsageCostsEndpointResult.md)\>

#### Parameters

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetUsageCostsEndpointResult`](../type-aliases/GetUsageCostsEndpointResult.md)\>

***

### getWorkspaceSummedUsage()

> **getWorkspaceSummedUsage**(`props?`, `opts?`): `Promise`\<[`GetWorkspaceSummedUsageEndpointResult`](../type-aliases/GetWorkspaceSummedUsageEndpointResult.md)\>

#### Parameters

##### props?

[`GetWorkspaceSummedUsageEndpointParams`](../type-aliases/GetWorkspaceSummedUsageEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspaceSummedUsageEndpointResult`](../type-aliases/GetWorkspaceSummedUsageEndpointResult.md)\>

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
