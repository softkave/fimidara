[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PermissionItemsEndpoints

# Class: PermissionItemsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new PermissionItemsEndpoints**(`config`, `inheritConfigFrom?`): `PermissionItemsEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`PermissionItemsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### addItems()

> **addItems**(`props`, `opts?`): `Promise`\<`void`\>

Add permission items to a workspace. Permission items define what actions entities (users, permission groups, or agent tokens) can or cannot perform on specific targets (files, folders, or workspace resources). Each permission item specifies: - A target (what resource the permission applies to) - An entity (who the permission applies to) - An action (what operation is being permitted/denied) - Access level (grant or deny)

#### Parameters

##### props

[`AddPermissionItemsEndpointParams`](../type-aliases/AddPermissionItemsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<`void`\>

***

### deleteItems()

> **deleteItems**(`props`, `opts?`): `Promise`\<[`MultipleLongRunningJobResult`](../type-aliases/MultipleLongRunningJobResult.md)\>

#### Parameters

##### props

[`DeletePermissionItemsEndpointParams`](../type-aliases/DeletePermissionItemsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`MultipleLongRunningJobResult`](../type-aliases/MultipleLongRunningJobResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### resolveEntityPermissions()

> **resolveEntityPermissions**(`props`, `opts?`): `Promise`\<[`ResolveEntityPermissionsEndpointResult`](../type-aliases/ResolveEntityPermissionsEndpointResult.md)\>

#### Parameters

##### props

[`ResolveEntityPermissionsEndpointParams`](../type-aliases/ResolveEntityPermissionsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`ResolveEntityPermissionsEndpointResult`](../type-aliases/ResolveEntityPermissionsEndpointResult.md)\>

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
