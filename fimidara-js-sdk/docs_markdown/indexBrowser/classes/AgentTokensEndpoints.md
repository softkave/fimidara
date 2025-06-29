[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / AgentTokensEndpoints

# Class: AgentTokensEndpoints

## Extends

- `AbstractSdkEndpoints`

## Constructors

### Constructor

> **new AgentTokensEndpoints**(`config`, `inheritConfigFrom?`): `AgentTokensEndpoints`

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

#### Returns

[`SdkConfig`](../interfaces/SdkConfig.md)

#### Inherited from

`AbstractSdkEndpoints.getSdkConfig`

***

### getToken()

> **getToken**(`props?`, `opts?`): `Promise`\<[`GetAgentTokenEndpointResult`](../type-aliases/GetAgentTokenEndpointResult.md)\>

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

### updateToken()

> **updateToken**(`props`, `opts?`): `Promise`\<[`UpdateAgentTokenEndpointResult`](../type-aliases/UpdateAgentTokenEndpointResult.md)\>

#### Parameters

##### props

[`UpdateAgentTokenEndpointParams`](../type-aliases/UpdateAgentTokenEndpointParams.md)

##### opts?

[`MfdocEndpointOpts`](../type-aliases/MfdocEndpointOpts.md)

#### Returns

`Promise`\<[`UpdateAgentTokenEndpointResult`](../type-aliases/UpdateAgentTokenEndpointResult.md)\>
