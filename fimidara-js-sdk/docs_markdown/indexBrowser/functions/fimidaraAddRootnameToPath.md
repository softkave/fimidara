[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / fimidaraAddRootnameToPath

# Function: fimidaraAddRootnameToPath()

> **fimidaraAddRootnameToPath**\<`T`\>(`fPath`, `workspaceRootname`): `T`

Defined in: [fimidara-js-sdk/src/path/fimidaraAddRootnameToPath.ts:26](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/path/fimidaraAddRootnameToPath.ts#L26)

Adds a workspace rootname to a file path or array of path segments.

## Type Parameters

### T

`T` *extends* `string` \| `string`[] = `string` \| `string`[]

## Parameters

### fPath

`T`

The file path (string) or array of path segments to prepend the rootname to

### workspaceRootname

The workspace rootname (string) or array where the last element will be used as the rootname

`string` | `string`[]

## Returns

`T`

The path with the rootname prepended, maintaining the same type as the input

## Example

```typescript
// String path
fimidaraAddRootnameToPath('src/components/Button.tsx', 'my-workspace')
// Returns: 'my-workspace/src/components/Button.tsx'

// Array path
fimidaraAddRootnameToPath(['src', 'components', 'Button.tsx'], 'my-workspace')
// Returns: ['my-workspace', 'src', 'components', 'Button.tsx']

// Using array for workspace rootname
fimidaraAddRootnameToPath('src/index.ts', ['workspaces', 'my-workspace'])
// Returns: 'my-workspace/src/index.ts'
```
