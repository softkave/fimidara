[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / FoldersEndpoints

# Class: FoldersEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new FoldersEndpoints**(`config`, `inheritConfigFrom?`): `FoldersEndpoints`

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

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### listFolderContent()

> **listFolderContent**(`props?`, `opts?`): `Promise`\<[`ListFolderContentEndpointResult`](../type-aliases/ListFolderContentEndpointResult.md)\>

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

### updateFolder()

> **updateFolder**(`props`, `opts?`): `Promise`\<[`UpdateFolderEndpointResult`](../type-aliases/UpdateFolderEndpointResult.md)\>

#### Parameters

##### props

[`UpdateFolderEndpointParams`](../type-aliases/UpdateFolderEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateFolderEndpointResult`](../type-aliases/UpdateFolderEndpointResult.md)\>
