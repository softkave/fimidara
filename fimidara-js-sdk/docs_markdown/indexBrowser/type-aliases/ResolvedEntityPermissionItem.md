[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolvedEntityPermissionItem

# Type Alias: ResolvedEntityPermissionItem

> **ResolvedEntityPermissionItem** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4526](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4526)

A resolved permission item showing whether an entity has access to perform a specific action on a target resource.

## Properties

### access

> **access**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4554](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4554)

The resolved access level for this entity, action, and target combination

#### Example

```
true
```

***

### action

> **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4546](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4546)

The specific action being checked

#### Example

```
uploadFile
```

***

### entityId

> **entityId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4538](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4538)

The entity ID this permission resolution is for

#### Example

```
user_01234567890123456789abcd
```

***

### permittingEntityId?

> `optional` **permittingEntityId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4562](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4562)

The entity that directly granted this permission (may be different from entityId if inherited from a group)

#### Example

```
permissionGroup_01234567890123456789abcd
```

***

### permittingTargetId?

> `optional` **permittingTargetId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4570](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4570)

The target that directly holds this permission (may be different from target if inherited from a parent)

#### Example

```
folder_01234567890123456789abcd
```

***

### target

> **target**: [`ResolvedEntityPermissionItemTarget`](ResolvedEntityPermissionItemTarget.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4530](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4530)

The target resource this permission applies to
