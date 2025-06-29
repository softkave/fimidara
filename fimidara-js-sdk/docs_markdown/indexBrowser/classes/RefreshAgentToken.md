[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / RefreshAgentToken

# Class: RefreshAgentToken

Manages automatic refresh of agent authentication tokens.
Extends RefreshableResource to handle token lifecycle and implements IRefreshAuthToken interface.
Automatically refreshes tokens before they expire using the provided refresh token.

## Extends

- `RefreshableResource`\<[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)\>

## Implements

- [`IRefreshAuthToken`](../interfaces/IRefreshAuthToken.md)

## Constructors

### Constructor

> **new RefreshAgentToken**(`props`): `RefreshAgentToken`

#### Parameters

##### props

###### endpoints

[`FimidaraEndpoints`](FimidaraEndpoints.md)

###### onError?

(`error`, `current`) => `void`

###### timeoutLatency?

`number`

###### token

[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)

#### Returns

`RefreshAgentToken`

#### Overrides

`RefreshableResource<RefreshAgentTokenValue>.constructor`

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

`RefreshableResource.dispose`

***

### getBearerToken()

> **getBearerToken**(): `undefined` \| `string`

Gets the current JWT bearer token for authentication.

#### Returns

`undefined` \| `string`

The current JWT token string

#### Implementation of

[`IRefreshAuthToken`](../interfaces/IRefreshAuthToken.md).[`getBearerToken`](../interfaces/IRefreshAuthToken.md#getbearertoken)

***

### getOnError()

> **getOnError**(): (`error`, `current`) => `void`

#### Returns

> (`error`, `current`): `void`

##### Parameters

###### error

`unknown`

###### current

`T`

##### Returns

`void`

#### Inherited from

`RefreshableResource.getOnError`

***

### getOnRefresh()

> **getOnRefresh**(): (`resource`, `previous`) => `void`

#### Returns

> (`resource`, `previous`): `void`

##### Parameters

###### resource

`T`

###### previous

`T`

##### Returns

`void`

#### Inherited from

`RefreshableResource.getOnRefresh`

***

### getPreviousValue()

> **getPreviousValue**(): `null` \| [`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)

#### Returns

`null` \| [`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)

#### Inherited from

`RefreshableResource.getPreviousValue`

***

### getRefreshFn()

> **getRefreshFn**(): (`current`) => `Promise`\<[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)\>

#### Returns

> (`current`): `Promise`\<[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)\>

##### Parameters

###### current

`T`

##### Returns

`Promise`\<[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)\>

#### Inherited from

`RefreshableResource.getRefreshFn`

***

### getRefreshTimeout()

> **getRefreshTimeout**(): `number`

#### Returns

`number`

#### Inherited from

`RefreshableResource.getRefreshTimeout`

***

### getValue()

> **getValue**(): `T`

#### Returns

`T`

#### Inherited from

`RefreshableResource.getValue`

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RefreshableResource.refresh`

***

### setOnError()

> **setOnError**(`onError`): `this`

#### Parameters

##### onError

(`error`) => `void`

#### Returns

`this`

#### Inherited from

`RefreshableResource.setOnError`

***

### setOnRefresh()

> **setOnRefresh**(`onRefresh`): `this`

#### Parameters

##### onRefresh

(`resource`) => `void`

#### Returns

`this`

#### Inherited from

`RefreshableResource.setOnRefresh`

***

### setRefreshFn()

> **setRefreshFn**(`refreshFn`): `this`

#### Parameters

##### refreshFn

() => `Promise`\<[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)\>

#### Returns

`this`

#### Inherited from

`RefreshableResource.setRefreshFn`

***

### setRefreshTimeout()

> **setRefreshTimeout**(`timeout`): `this`

#### Parameters

##### timeout

`number`

#### Returns

`this`

#### Inherited from

`RefreshableResource.setRefreshTimeout`

***

### setValue()

> **setValue**(`value`): `this`

#### Parameters

##### value

`T`

#### Returns

`this`

#### Inherited from

`RefreshableResource.setValue`

***

### start()

> **start**(): `RefreshAgentToken`

Starts the automatic token refresh process.
Only starts if a valid timeout is set (i.e., token has expiration).

#### Returns

`RefreshAgentToken`

This instance for method chaining

#### Overrides

`RefreshableResource.start`

***

### stop()

> **stop**(): `this`

#### Returns

`this`

#### Inherited from

`RefreshableResource.stop`
