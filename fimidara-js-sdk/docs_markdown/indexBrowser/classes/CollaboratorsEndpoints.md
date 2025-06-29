[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CollaboratorsEndpoints

# Class: CollaboratorsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new CollaboratorsEndpoints**(`config`, `inheritConfigFrom?`): `CollaboratorsEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`CollaboratorsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### countWorkspaceCollaborators()

> **countWorkspaceCollaborators**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

Get the total number of collaborators in a workspace. Useful for pagination calculations and workspace analytics without fetching the full list of collaborators.

#### Parameters

##### props?

[`CountWorkspaceCollaboratorsEndpointParams`](../type-aliases/CountWorkspaceCollaboratorsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### getCollaborator()

> **getCollaborator**(`props`, `opts?`): `Promise`\<[`GetCollaboratorEndpointResult`](../type-aliases/GetCollaboratorEndpointResult.md)\>

#### Parameters

##### props

[`GetCollaboratorEndpointParams`](../type-aliases/GetCollaboratorEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetCollaboratorEndpointResult`](../type-aliases/GetCollaboratorEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspaceCollaborators()

> **getWorkspaceCollaborators**(`props?`, `opts?`): `Promise`\<[`GetWorkspaceCollaboratorsEndpointResult`](../type-aliases/GetWorkspaceCollaboratorsEndpointResult.md)\>

#### Parameters

##### props?

[`GetWorkspaceCollaboratorsEndpointParams`](../type-aliases/GetWorkspaceCollaboratorsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspaceCollaboratorsEndpointResult`](../type-aliases/GetWorkspaceCollaboratorsEndpointResult.md)\>

***

### removeCollaborator()

> **removeCollaborator**(`props`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

#### Parameters

##### props

[`RevokeCollaboratorEndpointParams`](../type-aliases/RevokeCollaboratorEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

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
