[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / GetWorkspaceCollaborationRequestsEndpointResult

# Type Alias: GetWorkspaceCollaborationRequestsEndpointResult

> **GetWorkspaceCollaborationRequestsEndpointResult** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3559](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3559)

Paginated list of collaboration requests sent from your workspace, showing the status of each invitation.

## Properties

### page

> **page**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3567](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3567)

Page number, starting from 0

***

### requests

> **requests**: [`CollaborationRequestForWorkspace`](CollaborationRequestForWorkspace.md)[]

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:3563](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L3563)

[Array] A collaboration request as seen by the workspace owner. Contains details about who was invited and the current status of the invitation.
