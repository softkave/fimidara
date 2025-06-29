[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ResolvedEntityPermissionItem

# Type Alias: ResolvedEntityPermissionItem

> **ResolvedEntityPermissionItem** = `object`

A resolved permission item showing whether an entity has access to perform a specific action on a target resource.

## Properties

### access

> **access**: `boolean`

The resolved access level for this entity, action, and target combination

#### Example

```
true
```

***

### action

> **action**: [`FimidaraPermissionAction`](FimidaraPermissionAction.md)

The specific action being checked

#### Example

```
uploadFile
```

***

### entityId

> **entityId**: `string`

The entity ID this permission resolution is for

#### Example

```
user_01234567890123456789abcd
```

***

### permittingEntityId?

> `optional` **permittingEntityId**: `string`

The entity that directly granted this permission (may be different from entityId if inherited from a group)

#### Example

```
permissionGroup_01234567890123456789abcd
```

***

### permittingTargetId?

> `optional` **permittingTargetId**: `string`

The target that directly holds this permission (may be different from target if inherited from a parent)

#### Example

```
folder_01234567890123456789abcd
```

***

### target

> **target**: [`ResolvedEntityPermissionItemTarget`](ResolvedEntityPermissionItemTarget.md)

The target resource this permission applies to
