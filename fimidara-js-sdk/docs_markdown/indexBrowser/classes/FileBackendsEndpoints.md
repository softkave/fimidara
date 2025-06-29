[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendsEndpoints

# Class: FileBackendsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new FileBackendsEndpoints**(`config`, `inheritConfigFrom?`): `FileBackendsEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`FileBackendsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### addConfig()

> **addConfig**(`props`, `opts?`): `Promise`\<[`AddFileBackendConfigEndpointResult`](../type-aliases/AddFileBackendConfigEndpointResult.md)\>

Create a new file backend config to store credentials and settings for external storage providers like AWS S3, Google Cloud Storage, etc. This config can then be referenced when creating mounts.

#### Parameters

##### props

[`AddFileBackendConfigEndpointParams`](../type-aliases/AddFileBackendConfigEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`AddFileBackendConfigEndpointResult`](../type-aliases/AddFileBackendConfigEndpointResult.md)\>

***

### addMount()

> **addMount**(`props`, `opts?`): `Promise`\<[`AddFileBackendMountEndpointResult`](../type-aliases/AddFileBackendMountEndpointResult.md)\>

#### Parameters

##### props

[`AddFileBackendMountEndpointParams`](../type-aliases/AddFileBackendMountEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`AddFileBackendMountEndpointResult`](../type-aliases/AddFileBackendMountEndpointResult.md)\>

***

### countConfigs()

> **countConfigs**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

#### Parameters

##### props?

[`CountFileBackendConfigsEndpointParams`](../type-aliases/CountFileBackendConfigsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### countMounts()

> **countMounts**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

#### Parameters

##### props?

[`CountFileBackendMountsEndpointParams`](../type-aliases/CountFileBackendMountsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### deleteConfig()

> **deleteConfig**(`props`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

#### Parameters

##### props

[`DeleteFileBackendConfigEndpointParams`](../type-aliases/DeleteFileBackendConfigEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

***

### deleteMount()

> **deleteMount**(`props`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

#### Parameters

##### props

[`DeleteFileBackendMountEndpointParams`](../type-aliases/DeleteFileBackendMountEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

***

### getConfig()

> **getConfig**(`props`, `opts?`): `Promise`\<[`GetFileBackendConfigEndpointResult`](../type-aliases/GetFileBackendConfigEndpointResult.md)\>

#### Parameters

##### props

[`GetFileBackendConfigEndpointParams`](../type-aliases/GetFileBackendConfigEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetFileBackendConfigEndpointResult`](../type-aliases/GetFileBackendConfigEndpointResult.md)\>

***

### getConfigs()

> **getConfigs**(`props?`, `opts?`): `Promise`\<[`GetFileBackendConfigsEndpointResult`](../type-aliases/GetFileBackendConfigsEndpointResult.md)\>

#### Parameters

##### props?

[`GetFileBackendConfigsEndpointParams`](../type-aliases/GetFileBackendConfigsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetFileBackendConfigsEndpointResult`](../type-aliases/GetFileBackendConfigsEndpointResult.md)\>

***

### getMount()

> **getMount**(`props`, `opts?`): `Promise`\<[`GetFileBackendMountEndpointResult`](../type-aliases/GetFileBackendMountEndpointResult.md)\>

#### Parameters

##### props

[`GetFileBackendMountEndpointParams`](../type-aliases/GetFileBackendMountEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetFileBackendMountEndpointResult`](../type-aliases/GetFileBackendMountEndpointResult.md)\>

***

### getMounts()

> **getMounts**(`props?`, `opts?`): `Promise`\<[`GetFileBackendMountsEndpointResult`](../type-aliases/GetFileBackendMountsEndpointResult.md)\>

#### Parameters

##### props?

[`GetFileBackendMountsEndpointParams`](../type-aliases/GetFileBackendMountsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetFileBackendMountsEndpointResult`](../type-aliases/GetFileBackendMountsEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### resolveMounts()

> **resolveMounts**(`props?`, `opts?`): `Promise`\<[`ResolveFileBackendMountsEndpointResult`](../type-aliases/ResolveFileBackendMountsEndpointResult.md)\>

#### Parameters

##### props?

[`ResolveFileBackendMountsEndpointParams`](../type-aliases/ResolveFileBackendMountsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`ResolveFileBackendMountsEndpointResult`](../type-aliases/ResolveFileBackendMountsEndpointResult.md)\>

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

### updateConfig()

> **updateConfig**(`props`, `opts?`): `Promise`\<[`UpdateFileBackendConfigEndpointResult`](../type-aliases/UpdateFileBackendConfigEndpointResult.md)\>

#### Parameters

##### props

[`UpdateFileBackendConfigEndpointParams`](../type-aliases/UpdateFileBackendConfigEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateFileBackendConfigEndpointResult`](../type-aliases/UpdateFileBackendConfigEndpointResult.md)\>

***

### updateMount()

> **updateMount**(`props`, `opts?`): `Promise`\<[`UpdateFileBackendMountEndpointResult`](../type-aliases/UpdateFileBackendMountEndpointResult.md)\>

#### Parameters

##### props

[`UpdateFileBackendMountEndpointParams`](../type-aliases/UpdateFileBackendMountEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateFileBackendMountEndpointResult`](../type-aliases/UpdateFileBackendMountEndpointResult.md)\>
