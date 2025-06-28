[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PermissionItemsEndpoints

# Class: PermissionItemsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:619](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L619)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new PermissionItemsEndpoints**(`config`, `inheritConfigFrom?`): `PermissionItemsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:623](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L623)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:636](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L636)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### resolveEntityPermissions()

> **resolveEntityPermissions**(`props`, `opts?`): `Promise`\<[`ResolveEntityPermissionsEndpointResult`](../type-aliases/ResolveEntityPermissionsEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:649](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L649)

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
