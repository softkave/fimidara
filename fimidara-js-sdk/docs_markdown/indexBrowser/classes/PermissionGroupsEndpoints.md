[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PermissionGroupsEndpoints

# Class: PermissionGroupsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new PermissionGroupsEndpoints**(`config`, `inheritConfigFrom?`): `PermissionGroupsEndpoints`

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

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspacePermissionGroups()

> **getWorkspacePermissionGroups**(`props?`, `opts?`): `Promise`\<[`GetWorkspacePermissionGroupsEndpointResult`](../type-aliases/GetWorkspacePermissionGroupsEndpointResult.md)\>

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

### unassignPermissionGroups()

> **unassignPermissionGroups**(`props`, `opts?`): `Promise`\<`void`\>

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

#### Parameters

##### props

[`UpdatePermissionGroupEndpointParams`](../type-aliases/UpdatePermissionGroupEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdatePermissionGroupEndpointResult`](../type-aliases/UpdatePermissionGroupEndpointResult.md)\>
