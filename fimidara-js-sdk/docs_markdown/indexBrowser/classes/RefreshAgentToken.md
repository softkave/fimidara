[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / RefreshAgentToken

# Class: RefreshAgentToken

Defined in: [fimidara-js-sdk/src/RefreshAgentToken.ts:23](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/RefreshAgentToken.ts#L23)

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

Defined in: [fimidara-js-sdk/src/RefreshAgentToken.ts:27](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/RefreshAgentToken.ts#L27)

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:32

#### Returns

`void`

#### Inherited from

`RefreshableResource.dispose`

***

### getBearerToken()

> **getBearerToken**(): `undefined` \| `string`

Defined in: [fimidara-js-sdk/src/RefreshAgentToken.ts:81](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/RefreshAgentToken.ts#L81)

Gets the current JWT bearer token for authentication.

#### Returns

`undefined` \| `string`

The current JWT token string

#### Implementation of

[`IRefreshAuthToken`](../interfaces/IRefreshAuthToken.md).[`getBearerToken`](../interfaces/IRefreshAuthToken.md#getbearertoken)

***

### getOnError()

> **getOnError**(): (`error`, `current`) => `void`

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:30

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:28

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:22

#### Returns

`null` \| [`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)

#### Inherited from

`RefreshableResource.getPreviousValue`

***

### getRefreshFn()

> **getRefreshFn**(): (`current`) => `Promise`\<[`RefreshAgentTokenValue`](../type-aliases/RefreshAgentTokenValue.md)\>

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:26

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:24

#### Returns

`number`

#### Inherited from

`RefreshableResource.getRefreshTimeout`

***

### getValue()

> **getValue**(): `T`

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:20

#### Returns

`T`

#### Inherited from

`RefreshableResource.getValue`

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:23

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RefreshableResource.refresh`

***

### setOnError()

> **setOnError**(`onError`): `this`

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:31

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:29

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:27

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:25

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:21

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

Defined in: [fimidara-js-sdk/src/RefreshAgentToken.ts:69](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/RefreshAgentToken.ts#L69)

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

Defined in: node\_modules/.pnpm/softkave-js-utils@0.10.0\_assert@2.1.0\_lodash-es@4.17.21\_nanoid@5.1.5\_path-browserify@1.0.1\_type-fest@4.41.0/node\_modules/softkave-js-utils/build/other/RefreshableResource.d.ts:19

#### Returns

`this`

#### Inherited from

`RefreshableResource.stop`
