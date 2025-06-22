import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {kFimidaraResourceType} from '../../definitions/system.js';
import {multilineTextToParagraph} from '../../utils/fns.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {AddPermissionItemsEndpointParams} from './addItems/types.js';
import {permissionItemConstants} from './constants.js';
import {
  DeletePermissionItemInput,
  DeletePermissionItemsEndpointParams,
} from './deleteItems/types.js';
import {
  ResolveEntityPermissionItemInput,
  ResolveEntityPermissionsEndpointParams,
  ResolveEntityPermissionsEndpointResult,
  ResolvedEntityPermissionItem,
  ResolvedEntityPermissionItemTarget,
} from './resolveEntityPermissions/types.js';
import {
  AddPermissionItemsHttpEndpoint,
  DeletePermissionItemsHttpEndpoint,
  PermissionItemInput,
  ResolveEntityPermissionsHttpEndpoint,
} from './types.js';

const targetId = mfdocConstruct.constructString({
  description: 'Resource ID permission is effected on',
  example: fReusables.makeResourceId(kFimidaraResourceType.Folder),
});
const targetIdList = mfdocConstruct.constructArray<string>({
  type: targetId,
  description: 'List of target resource IDs permission is effected on',
  example: [
    fReusables.makeResourceId(kFimidaraResourceType.Folder),
    fReusables.makeResourceId(kFimidaraResourceType.File),
  ],
});
const targetIdOrList = mfdocConstruct.constructOrCombination<
  (typeof targetId | typeof targetIdList)[]
>({
  types: [targetId, targetIdList],
  description:
    'Target resource ID or list of target resource IDs permission is effected on',
});
const entityId = mfdocConstruct.constructString({
  description:
    'Permission entity resource ID. ' +
    'A permission entity is a resource granted or deny access. ' +
    'This can be a user, a permission group, or an agent token',
  example: fReusables.makeResourceId(kFimidaraResourceType.User),
});
const entityIdList = mfdocConstruct.constructArray<string>({
  type: entityId,
  description:
    'Permission entity resource ID list. ' +
    'A permission entity is a resource granted or deny access. ' +
    'This can be a user, a permission group, or an agent token',
  example: [
    fReusables.makeResourceId(kFimidaraResourceType.User),
    fReusables.makeResourceId(kFimidaraResourceType.PermissionGroup),
  ],
});
const entityIdOrList = mfdocConstruct.constructOrCombination<
  (typeof entityId | typeof entityIdList)[]
>({
  types: [entityId, entityIdList],
  description:
    'Permission entity resource ID or list of permission entity resource IDs. ' +
    'A permission entity is a resource granted or deny access. ' +
    'This can be a user, a permission group, or an agent token',
});
const grantAccess = mfdocConstruct.constructBoolean({
  description:
    'Whether access is granted or not. ' +
    'Access is granted if true, denied if false',
  example: true,
});

const deletePermissionItemInput =
  mfdocConstruct.constructObject<DeletePermissionItemInput>({
    name: 'DeletePermissionItemInput',
    description:
      'Input for deleting a permission item. At least one target (targetId, filepath, folderpath, or workspaceRootname) must be specified.',
    fields: {
      targetId: mfdocConstruct.constructObjectField({
        required: false,
        data: targetIdOrList,
        description: 'Specific resource ID(s) to remove permissions from',
      }),
      filepath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.filepathOrList,
        description: 'File path(s) to remove permissions from',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpathOrList,
        description: 'Folder path(s) to remove permissions from',
      }),
      workspaceRootname: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceRootname,
        description: 'Workspace root name to remove permissions from',
      }),
      action: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.actionOrList,
        description:
          'Permission action(s) to remove. If not specified, removes all actions.',
      }),
      access: mfdocConstruct.constructObjectField({
        required: false,
        data: grantAccess,
        description:
          'Access level to remove. If not specified, removes both grant and deny permissions.',
      }),
      entityId: mfdocConstruct.constructObjectField({
        required: false,
        data: entityIdOrList,
        description:
          'Entity ID(s) to remove permissions from. If not specified, removes permissions for all entities.',
      }),
    },
  });

const deletePermissionItemInputList =
  mfdocConstruct.constructArray<DeletePermissionItemInput>({
    type: deletePermissionItemInput,
    max: permissionItemConstants.maxPermissionItemsPerRequest,
    description: `List of permission items to delete. Maximum ${permissionItemConstants.maxPermissionItemsPerRequest} items per request.`,
  });

const newPermissionItemInput =
  mfdocConstruct.constructObject<PermissionItemInput>({
    name: 'PermissionItemInput',
    description:
      'Input for creating a new permission item. Must specify target (targetId, filepath, folderpath, or workspaceRootname), entity, action, and access level.',
    fields: {
      targetId: mfdocConstruct.constructObjectField({
        required: false,
        data: targetIdOrList,
        description: 'Specific resource ID(s) to grant/deny permission to',
      }),
      filepath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.filepathOrList,
        description: 'File path(s) to grant/deny permission to',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpathOrList,
        description: 'Folder path(s) to grant/deny permission to',
      }),
      workspaceRootname: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceRootname,
        description: 'Workspace root name to grant/deny permission to',
      }),
      access: mfdocConstruct.constructObjectField({
        required: true,
        data: grantAccess,
        description: 'Whether to grant (true) or deny (false) access',
      }),
      entityId: mfdocConstruct.constructObjectField({
        required: true,
        data: entityIdOrList,
        description:
          'Entity ID(s) to grant/deny permission to (user, permission group, or agent token)',
      }),
      action: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.actionOrList,
        description:
          'Permission action(s) to grant/deny (e.g., readFile, uploadFile, deleteFolder)',
      }),
    },
  });

const resolvePermissionsItemInput =
  mfdocConstruct.constructObject<ResolveEntityPermissionItemInput>({
    name: 'ResolveEntityPermissionItemInput',
    description:
      'Input for resolving entity permissions. Used to check what permissions an entity has on specific resources.',
    fields: {
      targetId: mfdocConstruct.constructObjectField({
        required: false,
        data: targetIdOrList,
        description: 'Specific resource ID(s) to check permissions for',
      }),
      filepath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.filepathOrList,
        description: 'File path(s) to check permissions for',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpathOrList,
        description: 'Folder path(s) to check permissions for',
      }),
      workspaceRootname: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceRootname,
        description: 'Workspace root name to check permissions for',
      }),
      entityId: mfdocConstruct.constructObjectField({
        required: true,
        data: entityIdOrList,
        description:
          'Entity ID(s) to check permissions for (user, permission group, or agent token)',
      }),
      action: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.actionOrList,
        description:
          'Permission action(s) to check (e.g., readFile, uploadFile, deleteFolder)',
      }),
    },
  });

const resolvedPermissionTarget =
  mfdocConstruct.constructObject<ResolvedEntityPermissionItemTarget>({
    name: 'ResolvedEntityPermissionItemTarget',
    description:
      'Represents the resolved target of a permission item, indicating what resource the permission applies to.',
    fields: {
      targetId: mfdocConstruct.constructObjectField({
        required: false,
        data: targetId,
        description:
          'The specific resource ID if the permission applies to a particular resource',
      }),
      filepath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.filepath,
        description:
          'The file path if the permission applies to a specific file',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
        description:
          'The folder path if the permission applies to a specific folder',
      }),
      workspaceRootname: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceRootname,
        description:
          'The workspace root name if the permission applies to the entire workspace',
      }),
    },
  });

const resolvedPermissionItem =
  mfdocConstruct.constructObject<ResolvedEntityPermissionItem>({
    name: 'ResolvedEntityPermissionItem',
    description:
      'A resolved permission item showing whether an entity has access to perform a specific action on a target resource.',
    fields: {
      target: mfdocConstruct.constructObjectField({
        required: true,
        data: resolvedPermissionTarget,
        description: 'The target resource this permission applies to',
      }),
      entityId: mfdocConstruct.constructObjectField({
        required: true,
        data: entityId,
        description: 'The entity ID this permission resolution is for',
      }),
      action: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.action,
        description: 'The specific action being checked',
      }),
      access: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructBoolean({
          description:
            'Whether the entity has access (true) or is denied access (false) to perform the action',
          example: true,
        }),
        description:
          'The resolved access level for this entity, action, and target combination',
      }),
      permittingEntityId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          description: multilineTextToParagraph(`
        ID of the permission entity that directly owns/is assigned the permission item producing this result.
        That is, the permission item used to resolve whether the requested entity has access or does not,
        the entity directly owning that item, is surfaced here as accessEntityId.
        This can be the requested entity itself, or a permission group assigned to the requested entity.
      `),
          example: fReusables.makeResourceId(
            kFimidaraResourceType.PermissionGroup
          ),
        }),
        description:
          'The entity that directly granted this permission (may be different from entityId if inherited from a group)',
      }),
      permittingTargetId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          description: multilineTextToParagraph(`
        ID of the permission target that directly owns/is assigned the permission item producing this result.
        That is, the permission item used to resolve whether the requested entity has access or does not,
        the target directly owning that item, is surfaced here as permittingTargetId.
        This can be the requested target itself, or a parent folder if the requested resource is a folder of file, etc.
      `),
          example: fReusables.makeResourceId(kFimidaraResourceType.Folder),
        }),
        description:
          'The target that directly holds this permission (may be different from target if inherited from a parent)',
      }),
    },
  });

const newPermissionItemInputList =
  mfdocConstruct.constructArray<PermissionItemInput>({
    type: newPermissionItemInput,
    max: permissionItemConstants.maxPermissionItemsPerRequest,
    description: `List of permission items to create. Maximum ${permissionItemConstants.maxPermissionItemsPerRequest} items per request.`,
  });

const resolvePermissionsItemInputList =
  mfdocConstruct.constructArray<ResolveEntityPermissionItemInput>({
    type: resolvePermissionsItemInput,
    max: permissionItemConstants.maxPermissionItemsPerRequest,
    description: `List of permission resolution requests. Maximum ${permissionItemConstants.maxPermissionItemsPerRequest} items per request.`,
  });

const resolvedPermissionItemList =
  mfdocConstruct.constructArray<ResolvedEntityPermissionItem>({
    type: resolvedPermissionItem,
    description:
      'List of resolved permission items showing access results for each requested entity-action-target combination.',
  });

const addPermissionItemsParams =
  mfdocConstruct.constructObject<AddPermissionItemsEndpointParams>({
    name: 'AddPermissionItemsEndpointParams',
    description: 'Parameters for adding permission items to a workspace.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID. If not provided, will be inferred from authentication context.',
      }),
      items: mfdocConstruct.constructObjectField({
        required: true,
        data: newPermissionItemInputList,
        description: 'List of permission items to add to the workspace.',
      }),
    },
  });
const resolveEntityPermissionsParams =
  mfdocConstruct.constructObject<ResolveEntityPermissionsEndpointParams>({
    name: 'ResolveEntityPermissionsEndpointParams',
    description:
      'Parameters for resolving entity permissions within a workspace.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID. If not provided, will be inferred from authentication context.',
      }),
      items: mfdocConstruct.constructObjectField({
        required: true,
        data: resolvePermissionsItemInputList,
        description: 'List of permission resolution requests to process.',
      }),
    },
  });
const resolveEntityPermissionsResponseBody =
  mfdocConstruct.constructObject<ResolveEntityPermissionsEndpointResult>({
    name: 'ResolveEntityPermissionsEndpointResult',
    description: 'Response containing resolved permission items.',
    fields: {
      items: mfdocConstruct.constructObjectField({
        required: true,
        data: resolvedPermissionItemList,
        description: 'List of resolved permission items with access decisions.',
      }),
    },
  });
const deletePermissionItemsParams =
  mfdocConstruct.constructObject<DeletePermissionItemsEndpointParams>({
    name: 'DeletePermissionItemsEndpointParams',
    description: 'Parameters for deleting permission items from a workspace.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID. If not provided, will be inferred from authentication context.',
      }),
      items: mfdocConstruct.constructObjectField({
        required: true,
        data: deletePermissionItemInputList,
        description: 'List of permission items to delete from the workspace.',
      }),
    },
  });
export const addPermissionItemsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddPermissionItemsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddPermissionItemsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      AddPermissionItemsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      AddPermissionItemsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddPermissionItemsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddPermissionItemsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionItemConstants.routes.addItems,
    method: HttpEndpointMethod.Post,
    requestBody: addPermissionItemsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    name: 'fimidara/permissionItems/addItems',
    description: multilineTextToParagraph(`
      Add permission items to a workspace. Permission items define what actions entities (users, permission groups, or agent tokens) 
      can or cannot perform on specific targets (files, folders, or workspace resources). Each permission item specifies:
      - A target (what resource the permission applies to)
      - An entity (who the permission applies to)  
      - An action (what operation is being permitted/denied)
      - Access level (grant or deny)
    `),
    tags: [kEndpointTag.public],
  });

export const deletePermissionItemsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeletePermissionItemsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeletePermissionItemsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeletePermissionItemsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeletePermissionItemsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeletePermissionItemsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeletePermissionItemsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionItemConstants.routes.deleteItems,
    method: HttpEndpointMethod.Delete,
    requestBody: deletePermissionItemsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody:
      mfdocEndpointHttpResponseItems.multipleLongRunningJobResponseBody,
    name: 'fimidara/permissionItems/deleteItems',
    description: multilineTextToParagraph(`
      Delete permission items from a workspace. This operation removes existing permission grants or denials.
      You can delete permissions by specifying the exact criteria (target, entity, action) or use broader criteria
      to delete multiple permission items at once. The deletion is processed as a long-running job.
    `),
    tags: [kEndpointTag.public],
  });

export const resolveEntityPermissionsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ResolveEntityPermissionsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ResolveEntityPermissionsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ResolveEntityPermissionsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ResolveEntityPermissionsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ResolveEntityPermissionsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ResolveEntityPermissionsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionItemConstants.routes.resolveEntityPermissions,
    method: HttpEndpointMethod.Post,
    requestBody: resolveEntityPermissionsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: resolveEntityPermissionsResponseBody,
    name: 'fimidara/permissionItems/resolveEntityPermissions',
    description: multilineTextToParagraph(`
      Resolve entity permissions for specific targets and actions. This endpoint checks whether given entities 
      have permission to perform specific actions on target resources. It considers both direct permissions 
      and inherited permissions from permission groups. The response indicates the final access decision 
      (grant/deny) and identifies which permission item and entity provided the access.
    `),
    tags: [kEndpointTag.public],
  });

export const permissionItemMddocParts = {
  entityId,
  entityIdOrList,
  entityIdList,
};
