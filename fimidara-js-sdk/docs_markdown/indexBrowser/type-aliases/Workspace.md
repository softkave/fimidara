[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / Workspace

# Type Alias: Workspace

> **Workspace** = `object`

A workspace containing files, folders, and access control settings

## Properties

### billStatus

> **billStatus**: [`WorkspaceBillStatus`](WorkspaceBillStatus.md)

Workspace bill status

#### Example

```
ok
```

***

### billStatusAssignedAt

> **billStatusAssignedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdAt

> **createdAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### createdBy

> **createdBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### deletedAt?

> `optional` **deletedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### deletedBy?

> `optional` **deletedBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### description?

> `optional` **description**: `string`

Workspace description

#### Example

```
fimidara, a super awesome company that offers file management with access control for devs
```

***

### isDeleted

> **isDeleted**: `boolean`

***

### lastUpdatedAt

> **lastUpdatedAt**: `number`

UTC timestamp in milliseconds

#### Example

```
1672531200000
```

***

### lastUpdatedBy

> **lastUpdatedBy**: [`Agent`](Agent.md)

Represents a user or system entity that performed an action (e.g., created or updated a resource)

***

### name

> **name**: `string`

Workspace name, case insensitive

#### Example

```
fimidara
```

***

### publicPermissionGroupId

> **publicPermissionGroupId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### resourceId

> **resourceId**: `string`

Resource ID

#### Example

```
wrkspce_000000000000000000000
```

***

### rootname

> **rootname**: `string`

Workspace root name, must be a URL compatible name, case insensitive

#### Example

```
fimidara-rootname
```

***

### usageThresholds

> **usageThresholds**: [`WorkspaceUsageThresholds`](WorkspaceUsageThresholds.md)

Usage thresholds for different resource categories in the workspace

***

### workspaceId

> **workspaceId**: `string`

Workspace ID

#### Example

```
wrkspce_000000000000000000000
```
