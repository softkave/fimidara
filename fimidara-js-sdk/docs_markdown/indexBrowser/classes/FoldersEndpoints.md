[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FoldersEndpoints

# Class: FoldersEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:414](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L414)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new FoldersEndpoints**(`config`, `inheritConfigFrom?`): `FoldersEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`FoldersEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### addFolder()

> **addFolder**(`props`, `opts?`): `Promise`\<[`AddFolderEndpointResult`](../type-aliases/AddFolderEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:418](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L418)

Creates a new folder at the specified path within the workspace

#### Parameters

##### props

[`AddFolderEndpointParams`](../type-aliases/AddFolderEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`AddFolderEndpointResult`](../type-aliases/AddFolderEndpointResult.md)\>

***

### countFolderContent()

> **countFolderContent**(`props?`, `opts?`): `Promise`\<[`CountFolderContentEndpointResult`](../type-aliases/CountFolderContentEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:431](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L431)

#### Parameters

##### props?

[`CountFolderContentEndpointParams`](../type-aliases/CountFolderContentEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountFolderContentEndpointResult`](../type-aliases/CountFolderContentEndpointResult.md)\>

***

### deleteFolder()

> **deleteFolder**(`props?`, `opts?`): `Promise`\<[`DeleteFolderEndpointResult`](../type-aliases/DeleteFolderEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:444](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L444)

#### Parameters

##### props?

[`DeleteFolderEndpointParams`](../type-aliases/DeleteFolderEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`DeleteFolderEndpointResult`](../type-aliases/DeleteFolderEndpointResult.md)\>

***

### getFolder()

> **getFolder**(`props?`, `opts?`): `Promise`\<[`GetFolderEndpointResult`](../type-aliases/GetFolderEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:457](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L457)

#### Parameters

##### props?

[`GetFolderEndpointParams`](../type-aliases/GetFolderEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetFolderEndpointResult`](../type-aliases/GetFolderEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### listFolderContent()

> **listFolderContent**(`props?`, `opts?`): `Promise`\<[`ListFolderContentEndpointResult`](../type-aliases/ListFolderContentEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:470](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L470)

#### Parameters

##### props?

[`ListFolderContentEndpointParams`](../type-aliases/ListFolderContentEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`ListFolderContentEndpointResult`](../type-aliases/ListFolderContentEndpointResult.md)\>

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

### updateFolder()

> **updateFolder**(`props`, `opts?`): `Promise`\<[`UpdateFolderEndpointResult`](../type-aliases/UpdateFolderEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:483](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L483)

#### Parameters

##### props

[`UpdateFolderEndpointParams`](../type-aliases/UpdateFolderEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateFolderEndpointResult`](../type-aliases/UpdateFolderEndpointResult.md)\>
