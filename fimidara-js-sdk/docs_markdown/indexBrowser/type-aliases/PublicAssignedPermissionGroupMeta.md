[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / PublicAssignedPermissionGroupMeta

# Type Alias: PublicAssignedPermissionGroupMeta

> **PublicAssignedPermissionGroupMeta** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2027](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2027)

Metadata about a permission group assignment to an entity

## Properties

### assignedAt

> **assignedAt**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2047](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2047)

UTC timestamp in milliseconds when the permission group was assigned

#### Example

```
1697376600000
```

***

### assignedBy

> **assignedBy**: [`Agent`](Agent.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2039](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2039)

Information about who assigned this permission group

***

### assigneeEntityId

> **assigneeEntityId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2055](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2055)

The ID of the entity (user, collaborator, or agent token) that was assigned the permission group

#### Example

```
user_01234567890
```

***

### permissionGroupId

> **permissionGroupId**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:2035](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L2035)

The ID of the assigned permission group

#### Example

```
perm_group_01234567890
```
