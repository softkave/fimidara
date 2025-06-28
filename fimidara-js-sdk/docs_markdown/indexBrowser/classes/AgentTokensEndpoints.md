[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AgentTokensEndpoints

# Class: AgentTokensEndpoints

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:131](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L131)

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new AgentTokensEndpoints**(`config`, `inheritConfigFrom?`): `AgentTokensEndpoints`

Defined in: [fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts:12](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/AbstractSdkEndpoints.ts#L12)

#### Parameters

##### config

[`SdkConfig`](../interfaces/SdkConfig.md)

##### inheritConfigFrom?

[`MfdocEndpointsBase`](MfdocEndpointsBase.md)\<[`SdkConfig`](../interfaces/SdkConfig.md)\>

#### Returns

`AgentTokensEndpoints`

#### Inherited from

`AbstractSdkEndpoints.constructor`

## Methods

### addToken()

> **addToken**(`props?`, `opts?`): `Promise`\<[`AddAgentTokenEndpointResult`](../type-aliases/AddAgentTokenEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:135](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L135)

Create a new agent token for API authentication. Agent tokens allow external applications and services to authenticate with the Fimidara API.

#### Parameters

##### props?

[`AddAgentTokenEndpointParams`](../type-aliases/AddAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`AddAgentTokenEndpointResult`](../type-aliases/AddAgentTokenEndpointResult.md)\>

***

### countWorkspaceTokens()

> **countWorkspaceTokens**(`props?`, `opts?`): `Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:148](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L148)

#### Parameters

##### props?

[`CountWorkspaceAgentTokensEndpointParams`](../type-aliases/CountWorkspaceAgentTokensEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`CountItemsResult`](../type-aliases/CountItemsResult.md)\>

***

### deleteToken()

> **deleteToken**(`props?`, `opts?`): `Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:161](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L161)

#### Parameters

##### props?

[`DeleteAgentTokenEndpointParams`](../type-aliases/DeleteAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`LongRunningJobResult`](../type-aliases/LongRunningJobResult.md)\>

***

### encodeToken()

> **encodeToken**(`props?`, `opts?`): `Promise`\<[`EncodeAgentTokenEndpointResult`](../type-aliases/EncodeAgentTokenEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:174](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L174)

#### Parameters

##### props?

[`EncodeAgentTokenEndpointParams`](../type-aliases/EncodeAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`EncodeAgentTokenEndpointResult`](../type-aliases/EncodeAgentTokenEndpointResult.md)\>

***

### getSdkConfig()

> **getSdkConfig**(): [`SdkConfig`](../interfaces/SdkConfig.md)

Defined in: node\_modules/.pnpm/mfdoc-js-sdk-base@0.3.0\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/mfdoc-js-sdk-base/build/config.d.ts:14

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getToken()

> **getToken**(`props?`, `opts?`): `Promise`\<[`GetAgentTokenEndpointResult`](../type-aliases/GetAgentTokenEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:187](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L187)

#### Parameters

##### props?

[`GetAgentTokenEndpointParams`](../type-aliases/GetAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetAgentTokenEndpointResult`](../type-aliases/GetAgentTokenEndpointResult.md)\>

***

### getWorkspaceTokens()

> **getWorkspaceTokens**(`props?`, `opts?`): `Promise`\<[`GetWorkspaceAgentTokensEndpointResult`](../type-aliases/GetWorkspaceAgentTokensEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:200](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L200)

#### Parameters

##### props?

[`GetWorkspaceAgentTokensEndpointParams`](../type-aliases/GetWorkspaceAgentTokensEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`GetWorkspaceAgentTokensEndpointResult`](../type-aliases/GetWorkspaceAgentTokensEndpointResult.md)\>

***

### refreshToken()

> **refreshToken**(`props`, `opts?`): `Promise`\<[`RefreshAgentTokenEndpointResult`](../type-aliases/RefreshAgentTokenEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:213](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L213)

#### Parameters

##### props

[`RefreshAgentTokenEndpointParams`](../type-aliases/RefreshAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`RefreshAgentTokenEndpointResult`](../type-aliases/RefreshAgentTokenEndpointResult.md)\>

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

### updateToken()

> **updateToken**(`props`, `opts?`): `Promise`\<[`UpdateAgentTokenEndpointResult`](../type-aliases/UpdateAgentTokenEndpointResult.md)\>

Defined in: [fimidara-js-sdk/src/endpoints/publicEndpoints.ts:226](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicEndpoints.ts#L226)

#### Parameters

##### props

[`UpdateAgentTokenEndpointParams`](../type-aliases/UpdateAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateAgentTokenEndpointResult`](../type-aliases/UpdateAgentTokenEndpointResult.md)\>
