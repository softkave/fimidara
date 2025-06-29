[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / getFullFolderContent

# Function: getFullFolderContent()

> **getFullFolderContent**(`fimidara`, `listParams`): `Promise`\<\{ `files`: [`File`](../type-aliases/File.md)[]; `folders`: [`Folder`](../type-aliases/Folder.md)[]; \}\>

Retrieves all files and folders from a specified folder by paginating through all available content.

This function automatically handles pagination to fetch all content in a single call, making it
convenient for cases where you need the complete folder contents without managing pagination manually.

## Parameters

### fimidara

[`FimidaraEndpoints`](../classes/FimidaraEndpoints.md)

The Fimidara SDK instance with authenticated endpoints

### listParams

Parameters for listing folder content (folderId, workspaceId, etc.)

`undefined` | [`ListFolderContentEndpointParams`](../type-aliases/ListFolderContentEndpointParams.md)

## Returns

`Promise`\<\{ `files`: [`File`](../type-aliases/File.md)[]; `folders`: [`Folder`](../type-aliases/Folder.md)[]; \}\>

Promise resolving to an object containing all files and folders in the specified folder

## Example

```typescript
const content = await getFullFolderContent(fimidara, {
  folderId: 'folder-123',
  workspaceId: 'workspace-456'
});
console.log(`Found ${content.files.length} files and ${content.folders.length} folders`);
```
