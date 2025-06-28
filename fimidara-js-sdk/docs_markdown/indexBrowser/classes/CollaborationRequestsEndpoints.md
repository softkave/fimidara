[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CollaborationRequestsEndpoints

# Class: CollaborationRequestsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:792](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L792)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new CollaborationRequestsEndpoints**(`config`, `inheritConfigFrom?`): `CollaborationRequestsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:796](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L796)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:809](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L809)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspaceRequest()

> **getWorkspaceRequest**(`props`, `opts?`): `Promise`\<[`GetWorkspaceCollaborationRequestEndpointResult`](../type-aliases/GetWorkspaceCollaborationRequestEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:822](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L822)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:835](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L835)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:848](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L848)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:861](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L861)

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

### updateRequest()

> **updateRequest**(`props`, `opts?`): `Promise`\<[`UpdateCollaborationRequestEndpointResult`](../type-aliases/UpdateCollaborationRequestEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:874](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L874)

#### Parameters

##### props

[`UpdateCollaborationRequestEndpointParams`](../type-aliases/UpdateCollaborationRequestEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateCollaborationRequestEndpointResult`](../type-aliases/UpdateCollaborationRequestEndpointResult.md)\>
