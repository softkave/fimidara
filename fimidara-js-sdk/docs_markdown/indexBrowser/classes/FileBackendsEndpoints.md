[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FileBackendsEndpoints

# Class: FileBackendsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:240](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L240)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new FileBackendsEndpoints**(`config`, `inheritConfigFrom?`): `FileBackendsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:244](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L244)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:257](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L257)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:270](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L270)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:283](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L283)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:296](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L296)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:309](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L309)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:322](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L322)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:335](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L335)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:348](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L348)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:361](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L361)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### resolveMounts()

> **resolveMounts**(`props?`, `opts?`): `Promise`\<[`ResolveFileBackendMountsEndpointResult`](../type-aliases/ResolveFileBackendMountsEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:374](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L374)

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

### updateConfig()

> **updateConfig**(`props`, `opts?`): `Promise`\<[`UpdateFileBackendConfigEndpointResult`](../type-aliases/UpdateFileBackendConfigEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:387](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L387)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:400](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L400)

#### Parameters

##### props

[`UpdateFileBackendMountEndpointParams`](../type-aliases/UpdateFileBackendMountEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateFileBackendMountEndpointResult`](../type-aliases/UpdateFileBackendMountEndpointResult.md)\>
