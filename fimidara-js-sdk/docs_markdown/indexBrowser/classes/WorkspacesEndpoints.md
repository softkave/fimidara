[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / WorkspacesEndpoints

# Class: WorkspacesEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new WorkspacesEndpoints**(`config`, `inheritConfigFrom?`): `WorkspacesEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`WorkspacesEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspace()

> **getWorkspace**(`props?`, `opts?`): `Promise`\<[`GetWorkspaceEndpointResult`](../type-aliases/GetWorkspaceEndpointResult.md)\>

Retrieve information about a specific workspace or the current user's default workspace

#### Parameters

##### props?

[`GetWorkspaceEndpointParams`](../type-aliases/GetWorkspaceEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspaceEndpointResult`](../type-aliases/GetWorkspaceEndpointResult.md)\>

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

### updateWorkspace()

> **updateWorkspace**(`props`, `opts?`): `Promise`\<[`UpdateWorkspaceEndpointResult`](../type-aliases/UpdateWorkspaceEndpointResult.md)\>

#### Parameters

##### props

[`UpdateWorkspaceEndpointParams`](../type-aliases/UpdateWorkspaceEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateWorkspaceEndpointResult`](../type-aliases/UpdateWorkspaceEndpointResult.md)\>
