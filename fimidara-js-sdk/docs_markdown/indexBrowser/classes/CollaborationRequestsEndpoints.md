[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CollaborationRequestsEndpoints

# Class: CollaborationRequestsEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new CollaborationRequestsEndpoints**(`config`, `inheritConfigFrom?`): `CollaborationRequestsEndpoints`

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`CollaborationRequestsEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### countWorkspaceRequests()

> **countWorkspaceRequests**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

Get the total count of collaboration requests sent from your workspace. Useful for analytics and pagination calculations.

#### Parameters

##### props?

[`CountWorkspaceCollaborationRequestsEndpointParams`](../type-aliases/CountWorkspaceCollaborationRequestsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### deleteRequest()

> **deleteRequest**(`props`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

#### Parameters

##### props

[`DeleteCollaborationRequestEndpointParams`](../type-aliases/DeleteCollaborationRequestEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspaceRequest()

> **getWorkspaceRequest**(`props`, `opts?`): `Promise`\<[`GetWorkspaceCollaborationRequestEndpointResult`](../type-aliases/GetWorkspaceCollaborationRequestEndpointResult.md)\>

#### Parameters

##### props

[`GetWorkspaceCollaborationRequestEndpointParams`](../type-aliases/GetWorkspaceCollaborationRequestEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspaceCollaborationRequestEndpointResult`](../type-aliases/GetWorkspaceCollaborationRequestEndpointResult.md)\>

***

### getWorkspaceRequests()

> **getWorkspaceRequests**(`props?`, `opts?`): `Promise`\<[`GetWorkspaceCollaborationRequestsEndpointResult`](../type-aliases/GetWorkspaceCollaborationRequestsEndpointResult.md)\>

#### Parameters

##### props?

[`GetWorkspaceCollaborationRequestsEndpointParams`](../type-aliases/GetWorkspaceCollaborationRequestsEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspaceCollaborationRequestsEndpointResult`](../type-aliases/GetWorkspaceCollaborationRequestsEndpointResult.md)\>

***

### revokeRequest()

> **revokeRequest**(`props`, `opts?`): `Promise`\<[`RevokeCollaborationRequestEndpointResult`](../type-aliases/RevokeCollaborationRequestEndpointResult.md)\>

#### Parameters

##### props

[`RevokeCollaborationRequestEndpointParams`](../type-aliases/RevokeCollaborationRequestEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`RevokeCollaborationRequestEndpointResult`](../type-aliases/RevokeCollaborationRequestEndpointResult.md)\>

***

### sendRequest()

> **sendRequest**(`props`, `opts?`): `Promise`\<[`SendCollaborationRequestEndpointResult`](../type-aliases/SendCollaborationRequestEndpointResult.md)\>

#### Parameters

##### props

[`SendCollaborationRequestEndpointParams`](../type-aliases/SendCollaborationRequestEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`SendCollaborationRequestEndpointResult`](../type-aliases/SendCollaborationRequestEndpointResult.md)\>

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

### updateRequest()

> **updateRequest**(`props`, `opts?`): `Promise`\<[`UpdateCollaborationRequestEndpointResult`](../type-aliases/UpdateCollaborationRequestEndpointResult.md)\>

#### Parameters

##### props

[`UpdateCollaborationRequestEndpointParams`](../type-aliases/UpdateCollaborationRequestEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateCollaborationRequestEndpointResult`](../type-aliases/UpdateCollaborationRequestEndpointResult.md)\>
