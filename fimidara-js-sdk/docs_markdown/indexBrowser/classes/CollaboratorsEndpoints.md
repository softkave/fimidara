[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / CollaboratorsEndpoints

# Class: CollaboratorsEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:888](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L888)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new CollaboratorsEndpoints**(`config`, `inheritConfigFrom?`): `CollaboratorsEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:892](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L892)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:905](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L905)

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

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getWorkspaceCollaborators()

> **getWorkspaceCollaborators**(`props?`, `opts?`): `Promise`\<[`GetWorkspaceCollaboratorsEndpointResult`](../type-aliases/GetWorkspaceCollaboratorsEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:918](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L918)

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

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:931](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L931)

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
