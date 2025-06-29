[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceCollaborationRequestsEndpointResult

# Type Alias: GetWorkspaceCollaborationRequestsEndpointResult

> **GetWorkspaceCollaborationRequestsEndpointResult** = `object`

Paginated list of collaboration requests sent from your workspace, showing the status of each invitation.

## Properties

### page

> **page**: `number`

Page number, starting from 0

***

### requests

> **requests**: [`CollaborationRequestForWorkspace`](CollaborationRequestForWorkspace.md)[]

[Array] A collaboration request as seen by the workspace owner. Contains details about who was invited and the current status of the invitation.
