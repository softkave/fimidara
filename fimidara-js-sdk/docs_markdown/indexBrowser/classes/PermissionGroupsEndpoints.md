[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PermissionGroupsEndpoints

# Class: PermissionGroupsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:497](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L497)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new PermissionGroupsEndpoints**(`config`, `inheritConfigFrom?`): `PermissionGroupsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`PermissionGroupsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### addPermissionGroup()

> **addPermissionGroup**(`props`, `opts?`): `Promise`\<[`AddPermissionGroupEndpointResult`](../type-aliases/AddPermissionGroupEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:501](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L501)

Create a new permission group in a workspace. Permission groups are used to organize permissions and can be assigned to users, collaborators, or agent tokens.

#### Parameters

##### props

[`AddPermissionGroupEndpointParams`](../type-aliases/AddPermissionGroupEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`AddPermissionGroupEndpointResult`](../type-aliases/AddPermissionGroupEndpointResult.md)\>

***

### assignPermissionGroups()

> **assignPermissionGroups**(`props`, `opts?`): `Promise`\<`void`\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:514](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L514)

#### Parameters

##### props

[`AssignPermissionGroupsEndpointParams`](../type-aliases/AssignPermissionGroupsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<`void`\>

***

### countWorkspacePermissionGroups()

> **countWorkspacePermissionGroups**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:527](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L527)

#### Parameters

##### props?

[`CountWorkspacePermissionGroupsEndpointParams`](../type-aliases/CountWorkspacePermissionGroupsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### deletePermissionGroup()

> **deletePermissionGroup**(`props?`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:540](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L540)

#### Parameters

##### props?

[`DeletePermissionGroupEndpointParams`](../type-aliases/DeletePermissionGroupEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

***

### getEntityAssignedPermissionGroups()

> **getEntityAssignedPermissionGroups**(`props`, `opts?`): `Promise`\<[`GetEntityAssignedPermissionGroupsEndpointResult`](../type-aliases/GetEntityAssignedPermissionGroupsEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:553](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L553)

#### Parameters

##### props

[`GetEntityAssignedPermissionGroupsParams`](../type-aliases/GetEntityAssignedPermissionGroupsParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetEntityAssignedPermissionGroupsEndpointResult`](../type-aliases/GetEntityAssignedPermissionGroupsEndpointResult.md)\>

***

### getPermissionGroup()

> **getPermissionGroup**(`props?`, `opts?`): `Promise`\<[`GetPermissionGroupEndpointResult`](../type-aliases/GetPermissionGroupEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:566](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L566)

#### Parameters

##### props?

[`GetPermissionGroupEndpointParams`](../type-aliases/GetPermissionGroupEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetPermissionGroupEndpointResult`](../type-aliases/GetPermissionGroupEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspacePermissionGroups()

> **getWorkspacePermissionGroups**(`props?`, `opts?`): `Promise`\<[`GetWorkspacePermissionGroupsEndpointResult`](../type-aliases/GetWorkspacePermissionGroupsEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:579](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L579)

#### Parameters

##### props?

[`GetWorkspacePermissionGroupsEndpointParams`](../type-aliases/GetWorkspacePermissionGroupsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspacePermissionGroupsEndpointResult`](../type-aliases/GetWorkspacePermissionGroupsEndpointResult.md)\>

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

### unassignPermissionGroups()

> **unassignPermissionGroups**(`props`, `opts?`): `Promise`\<`void`\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:592](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L592)

#### Parameters

##### props

[`UnassignPermissionGroupsEndpointParams`](../type-aliases/UnassignPermissionGroupsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<`void`\>

***

### updatePermissionGroup()

> **updatePermissionGroup**(`props`, `opts?`): `Promise`\<[`UpdatePermissionGroupEndpointResult`](../type-aliases/UpdatePermissionGroupEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:605](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L605)

#### Parameters

##### props

[`UpdatePermissionGroupEndpointParams`](../type-aliases/UpdatePermissionGroupEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdatePermissionGroupEndpointResult`](../type-aliases/UpdatePermissionGroupEndpointResult.md)\>
