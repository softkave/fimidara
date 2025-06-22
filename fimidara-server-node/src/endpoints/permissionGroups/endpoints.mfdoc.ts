import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {
  PublicAssignedPermissionGroupMeta,
  PublicPermissionGroup,
} from '../../definitions/permissionGroups.js';
import {kFimidaraResourceType} from '../../definitions/system.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {permissionItemMddocParts} from '../permissionItems/endpoints.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {
  AddPermissionGroupEndpointParams,
  AddPermissionGroupEndpointResult,
} from './addPermissionGroup/types.js';
import {AssignPermissionGroupsEndpointParams} from './assignPermissionGroups/types.js';
import {permissionGroupConstants} from './constants.js';
import {CountWorkspacePermissionGroupsEndpointParams} from './countWorkspacePermissionGroups/types.js';
import {DeletePermissionGroupEndpointParams} from './deletePermissionGroup/types.js';
import {
  GetEntityAssignedPermissionGroupsEndpointParams,
  GetEntityAssignedPermissionGroupsEndpointResult,
} from './getEntityAssignedPermissionGroups/types.js';
import {
  GetPermissionGroupEndpointParams,
  GetPermissionGroupEndpointResult,
} from './getPermissionGroup/types.js';
import {
  GetWorkspacePermissionGroupsEndpointParams,
  GetWorkspacePermissionGroupsEndpointResult,
} from './getWorkspacePermissionGroups/types.js';
import {
  AddPermissionGroupHttpEndpoint,
  AssignPermissionGroupsHttpEndpoint,
  CountWorkspacePermissionGroupsHttpEndpoint,
  DeletePermissionGroupHttpEndpoint,
  GetEntityAssignedPermissionGroupsHttpEndpoint,
  GetPermissionGroupHttpEndpoint,
  GetWorkspacePermissionGroupsHttpEndpoint,
  UnassignPermissionGroupsHttpEndpoint,
  UpdatePermissionGroupHttpEndpoint,
} from './types.js';
import {
  UpdatePermissionGroupEndpointParams,
  UpdatePermissionGroupEndpointResult,
  UpdatePermissionGroupInput,
} from './udpatePermissionGroup/types.js';
import {UnassignPermissionGroupsEndpointParams} from './unassignPermissionGroups/types.js';

const permissionGroup = mfdocConstruct.constructObject<PublicPermissionGroup>({
  name: 'PermissionGroup',
  description:
    'A permission group that can be assigned to entities to grant access to workspace resources',
  fields: {
    ...fReusables.workspaceResourceParts,
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructString({
        ...fReusables.name,
        description: 'The name of the permission group',
        example: 'Editors',
      }),
    }),
    description: mfdocConstruct.constructObjectField({
      required: false,
      data: mfdocConstruct.constructString({
        ...fReusables.description,
        description:
          'Optional description explaining the purpose of this permission group',
        example: 'Users who can edit files and folders in the workspace',
      }),
    }),
  },
});

const assignedPermissionGroupMeta =
  mfdocConstruct.constructObject<PublicAssignedPermissionGroupMeta>({
    name: 'PublicAssignedPermissionGroupMeta',
    description: 'Metadata about a permission group assignment to an entity',
    fields: {
      permissionGroupId: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructString({
          ...fReusables.permissionGroupId,
          description: 'The ID of the assigned permission group',
          example: fReusables.makeResourceId(
            kFimidaraResourceType.PermissionGroup
          ),
        }),
      }),
      assignedBy: mfdocConstruct.constructObjectField({
        required: true,
        data: {
          ...fReusables.agent,
          description: 'Information about who assigned this permission group',
        },
      }),
      assignedAt: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructNumber({
          ...fReusables.date,
          description:
            'UTC timestamp in milliseconds when the permission group was assigned',
          example: 1697376600000,
        }),
      }),
      assigneeEntityId: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructString({
          ...permissionItemMddocParts.entityId,
          description:
            'The ID of the entity (user, collaborator, or agent token) that was assigned the permission group',
          example: fReusables.makeResourceId(kFimidaraResourceType.User),
        }),
      }),
    },
  });

const permissionGroupMatcherParts = {
  permissionGroupId: mfdocConstruct.constructObjectField<string>({
    required: false,
    data: mfdocConstruct.constructString({
      description:
        'Permission group ID. Either provide the permission group ID, or provide the workspace ID and permission group name',
      example: fReusables.makeResourceId(kFimidaraResourceType.PermissionGroup),
    }),
  }),
  name: mfdocConstruct.constructObjectField<string>({
    required: false,
    data: mfdocConstruct.constructString({
      description:
        'Permission group name. Either provide the permission group ID, or provide the workspace ID and permission group name',
      example: 'Editors',
    }),
  }),
  workspaceId: mfdocConstruct.constructObjectField<string>({
    required: false,
    data: mfdocConstruct.constructString({
      ...fReusables.workspaceIdInput,
      description:
        'Workspace ID. When not provided, will default to using workspace ID from agent token. Either provide the permission group ID, or provide the workspace ID and permission group name',
    }),
  }),
};

const addPermissionGroupParams =
  mfdocConstruct.constructObject<AddPermissionGroupEndpointParams>({
    name: 'AddPermissionGroupEndpointParams',
    description:
      'Parameters for creating a new permission group in a workspace',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          ...fReusables.workspaceIdInput,
          description:
            'Workspace ID where the permission group will be created. If not provided, uses the workspace from the agent token',
        }),
      }),
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructString({
          ...fReusables.name,
          description:
            'Name for the new permission group. Must be unique within the workspace',
          example: 'Content Editors',
        }),
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          ...fReusables.description,
          description:
            'Optional description explaining the purpose of this permission group',
          example: 'Users who can create, edit, and delete content files',
        }),
      }),
    },
  });

const addPermissionGroupResponseBody =
  mfdocConstruct.constructObject<AddPermissionGroupEndpointResult>({
    name: 'AddPermissionGroupEndpointResult',
    description: 'Response containing the newly created permission group',
    fields: {
      permissionGroup: mfdocConstruct.constructObjectField({
        required: true,
        data: permissionGroup,
      }),
    },
  });

const getWorkspacePermissionGroupsParams =
  mfdocConstruct.constructObject<GetWorkspacePermissionGroupsEndpointParams>({
    name: 'GetWorkspacePermissionGroupsEndpointParams',
    description:
      'Parameters for retrieving permission groups in a workspace with pagination',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          ...fReusables.workspaceIdInput,
          description:
            'Workspace ID to retrieve permission groups from. If not provided, uses the workspace from the agent token',
        }),
      }),
      page: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructNumber({
          ...fReusables.page,
          description: 'Page number for pagination (0-based)',
          example: 0,
        }),
      }),
      pageSize: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructNumber({
          ...fReusables.pageSize,
          description: 'Number of permission groups to return per page',
          example: 20,
        }),
      }),
    },
  });

const getWorkspacePermissionGroupsResponseBody =
  mfdocConstruct.constructObject<GetWorkspacePermissionGroupsEndpointResult>({
    name: 'GetWorkspacePermissionGroupsEndpointResult',
    description: 'Response containing a paginated list of permission groups',
    fields: {
      permissionGroups: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicPermissionGroup>({
          type: permissionGroup,
          description: 'Array of permission groups in the workspace',
        }),
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructNumber({
          ...fReusables.page,
          description: 'Current page number (0-based)',
          example: 0,
        }),
      }),
    },
  });

const getEntityAssignedPermissionGroupsParams =
  mfdocConstruct.constructObject<GetEntityAssignedPermissionGroupsEndpointParams>(
    {
      name: 'GetEntityAssignedPermissionGroupsParams',
      description:
        'Parameters for retrieving permission groups assigned to a specific entity',
      fields: {
        workspaceId: mfdocConstruct.constructObjectField({
          required: false,
          data: mfdocConstruct.constructString({
            ...fReusables.workspaceIdInput,
            description:
              'Workspace ID to search within. If not provided, uses the workspace from the agent token',
          }),
        }),
        entityId: mfdocConstruct.constructObjectField({
          required: true,
          data: mfdocConstruct.constructString({
            ...permissionItemMddocParts.entityId,
            description:
              'ID of the entity (user, collaborator, or agent token) to get assigned permission groups for',
            example: fReusables.makeResourceId(kFimidaraResourceType.User),
          }),
        }),
        includeInheritedPermissionGroups: mfdocConstruct.constructObjectField({
          required: false,
          data: mfdocConstruct.constructBoolean({
            description:
              'Whether to include permission groups not directly assigned but inherited through permission groups assigned to entity',
            example: true,
          }),
        }),
      },
    }
  );

const getEntityAssignedPermissionGroupsResponseBody =
  mfdocConstruct.constructObject<GetEntityAssignedPermissionGroupsEndpointResult>(
    {
      name: 'GetEntityAssignedPermissionGroupsEndpointResult',
      description:
        'Response containing permission groups assigned to an entity',
      fields: {
        permissionGroups: mfdocConstruct.constructObjectField({
          required: true,
          data: mfdocConstruct.constructArray<PublicPermissionGroup>({
            type: permissionGroup,
            description:
              'Array of permission groups assigned to the entity (including inherited ones if requested)',
          }),
        }),
        immediateAssignedPermissionGroupsMeta:
          mfdocConstruct.constructObjectField({
            required: true,
            data: mfdocConstruct.constructArray<PublicAssignedPermissionGroupMeta>(
              {
                type: assignedPermissionGroupMeta,
                description:
                  'Metadata about the direct assignment of permission groups (excludes inherited ones)',
              }
            ),
          }),
      },
    }
  );

const countWorkspacePermissionGroupsParams =
  mfdocConstruct.constructObject<CountWorkspacePermissionGroupsEndpointParams>({
    name: 'CountWorkspacePermissionGroupsEndpointParams',
    description: 'Parameters for counting permission groups in a workspace',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          ...fReusables.workspaceIdInput,
          description:
            'Workspace ID to count permission groups in. If not provided, uses the workspace from the agent token',
        }),
      }),
    },
  });

const updatePermissionGroupParams =
  mfdocConstruct.constructObject<UpdatePermissionGroupEndpointParams>({
    name: 'UpdatePermissionGroupEndpointParams',
    description: 'Parameters for updating an existing permission group',
    fields: {
      ...permissionGroupMatcherParts,
      data: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructObject<UpdatePermissionGroupInput>({
          name: 'UpdatePermissionGroupInput',
          description: 'Fields to update on the permission group',
          fields: {
            name: mfdocConstruct.constructObjectField<string>({
              required: false,
              data: mfdocConstruct.constructString({
                ...fReusables.name,
                description: 'New name for the permission group',
                example: 'Senior Editors',
              }),
            }),
            description: mfdocConstruct.constructObjectField<string>({
              required: false,
              data: mfdocConstruct.constructString({
                ...fReusables.description,
                description: 'New description for the permission group',
                example: 'Senior users who can edit and manage content',
              }),
            }),
          },
        }),
      }),
    },
  });

const updatePermissionGroupResponseBody =
  mfdocConstruct.constructObject<UpdatePermissionGroupEndpointResult>({
    name: 'UpdatePermissionGroupEndpointResult',
    description: 'Response containing the updated permission group',
    fields: {
      permissionGroup: mfdocConstruct.constructObjectField({
        required: true,
        data: permissionGroup,
      }),
    },
  });

const assignPermissionGroupsParams =
  mfdocConstruct.constructObject<AssignPermissionGroupsEndpointParams>({
    name: 'AssignPermissionGroupsEndpointParams',
    description: 'Parameters for assigning permission groups to entities',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          ...fReusables.workspaceIdInput,
          description:
            'Workspace ID where the assignment will take place. If not provided, uses the workspace from the agent token',
        }),
      }),
      entityId: mfdocConstruct.constructObjectField({
        required: true,
        data: {
          ...permissionItemMddocParts.entityIdOrList,
          description:
            'Entity ID or array of entity IDs (users, collaborators, or agent tokens) to assign permission groups to',
          example: fReusables.makeResourceId(kFimidaraResourceType.User),
        },
      }),
      permissionGroupId: mfdocConstruct.constructObjectField({
        required: true,
        data: {
          ...fReusables.idOrList,
          description:
            'Permission group ID or array of permission group IDs to assign',
          example: fReusables.makeResourceId(
            kFimidaraResourceType.PermissionGroup
          ),
        },
      }),
    },
  });

const unassignPermissionGroupsParams =
  mfdocConstruct.constructObject<UnassignPermissionGroupsEndpointParams>({
    name: 'UnassignPermissionGroupsEndpointParams',
    description:
      'Parameters for removing permission group assignments from entities',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          ...fReusables.workspaceIdInput,
          description:
            'Workspace ID where the unassignment will take place. If not provided, uses the workspace from the agent token',
        }),
      }),
      entityId: mfdocConstruct.constructObjectField({
        required: true,
        data: {
          ...permissionItemMddocParts.entityIdOrList,
          description:
            'Entity ID or array of entity IDs (users, collaborators, or agent tokens) to remove permission groups from',
          example: fReusables.makeResourceId(kFimidaraResourceType.User),
        },
      }),
      permissionGroupId: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructOrCombination({
          types: [
            mfdocConstruct.constructString({
              description: 'Permission group ID',
              example: fReusables.makeResourceId(
                kFimidaraResourceType.PermissionGroup
              ),
            }),
            mfdocConstruct.constructArray<string>({
              type: mfdocConstruct.constructString({
                description: 'Permission group ID',
                example: fReusables.makeResourceId(
                  kFimidaraResourceType.PermissionGroup
                ),
              }),
              description: 'List of permission group IDs',
            }),
          ],
          description:
            'Permission group ID or array of permission group IDs to unassign',
        }),
      }),
    },
  });

const getPermissionGroupParams =
  mfdocConstruct.constructObject<GetPermissionGroupEndpointParams>({
    name: 'GetPermissionGroupEndpointParams',
    description:
      'Parameters for retrieving a single permission group by ID or name',
    fields: permissionGroupMatcherParts,
  });

const getPermissionGroupResponseBody =
  mfdocConstruct.constructObject<GetPermissionGroupEndpointResult>({
    name: 'GetPermissionGroupEndpointResult',
    description: 'Response containing the requested permission group',
    fields: {
      permissionGroup: mfdocConstruct.constructObjectField({
        required: true,
        data: permissionGroup,
      }),
    },
  });

const deletePermissionGroupParams =
  mfdocConstruct.constructObject<DeletePermissionGroupEndpointParams>({
    name: 'DeletePermissionGroupEndpointParams',
    description: 'Parameters for deleting a permission group',
    fields: permissionGroupMatcherParts,
  });

export const addPermissionGroupEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddPermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddPermissionGroupHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      AddPermissionGroupHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      AddPermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddPermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddPermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.addPermissionGroup,
    method: HttpEndpointMethod.Post,
    requestBody: addPermissionGroupParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: addPermissionGroupResponseBody,
    name: 'fimidara/permissionGroups/addPermissionGroup',
    description:
      'Create a new permission group in a workspace. Permission groups are used to organize permissions and can be assigned to users, collaborators, or agent tokens.',
    tags: [kEndpointTag.public],
  });

export const getPermissionGroupEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetPermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetPermissionGroupHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetPermissionGroupHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetPermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetPermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetPermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.getPermissionGroup,
    method: HttpEndpointMethod.Post,
    requestBody: getPermissionGroupParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getPermissionGroupResponseBody,
    name: 'fimidara/permissionGroups/getPermissionGroup',
    description:
      'Retrieve a specific permission group by its ID or name. You can identify the permission group either by providing its ID directly, or by providing the workspace ID and permission group name.',
    tags: [kEndpointTag.public],
  });

export const updatePermissionGroupEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdatePermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdatePermissionGroupHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdatePermissionGroupHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdatePermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdatePermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdatePermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.updatePermissionGroup,
    method: HttpEndpointMethod.Post,
    requestBody: updatePermissionGroupParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updatePermissionGroupResponseBody,
    name: 'fimidara/permissionGroups/updatePermissionGroup',
    description:
      "Update an existing permission group's name or description. You can identify the permission group either by its ID or by providing the workspace ID and permission group name.",
    tags: [kEndpointTag.public],
  });

export const deletePermissionGroupEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeletePermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeletePermissionGroupHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeletePermissionGroupHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeletePermissionGroupHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeletePermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeletePermissionGroupHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.deletePermissionGroup,
    method: HttpEndpointMethod.Delete,
    requestBody: deletePermissionGroupParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/permissionGroups/deletePermissionGroup',
    description:
      'Delete a permission group and remove all its assignments. This operation runs asynchronously - use the returned job ID to check completion status. Deleted permission groups cannot be recovered.',
    tags: [kEndpointTag.public],
  });

export const getWorkspacePermissionGroupsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.getWorkspacePermissionGroups,
    method: HttpEndpointMethod.Post,
    requestBody: getWorkspacePermissionGroupsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspacePermissionGroupsResponseBody,
    name: 'fimidara/permissionGroups/getWorkspacePermissionGroups',
    description:
      'Retrieve a paginated list of all permission groups in a workspace. Use the page and pageSize parameters to control pagination.',
    tags: [kEndpointTag.public],
  });

export const countWorkspacePermissionGroupsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountWorkspacePermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.countWorkspacePermissionGroups,
    method: HttpEndpointMethod.Post,
    requestBody: countWorkspacePermissionGroupsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/permissionGroups/countWorkspacePermissionGroups',
    description:
      'Get the total count of permission groups in a workspace. Useful for pagination calculations and workspace management.',
    tags: [kEndpointTag.public],
  });

export const assignPermissionGroupsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AssignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AssignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      AssignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      AssignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AssignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AssignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.assignPermissionGroups,
    method: HttpEndpointMethod.Post,
    requestBody: assignPermissionGroupsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    name: 'fimidara/permissionGroups/assignPermissionGroups',
    description:
      'Assign one or more permission groups to one or more entities (users, collaborators, or agent tokens). This grants the entities all permissions contained within the assigned permission groups.',
    tags: [kEndpointTag.public],
  });

export const unassignPermissionGroupsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UnassignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UnassignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UnassignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UnassignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UnassignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UnassignPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.unassignPermissionGroups,
    method: HttpEndpointMethod.Post,
    requestBody: unassignPermissionGroupsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    name: 'fimidara/permissionGroups/unassignPermissionGroups',
    description:
      'Remove permission group assignments from one or more entities (users, collaborators, or agent tokens). This revokes the permissions contained within the unassigned permission groups.',
    tags: [kEndpointTag.public],
  });

export const getEntityAssignedPermissionGroupsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetEntityAssignedPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetEntityAssignedPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetEntityAssignedPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetEntityAssignedPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetEntityAssignedPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetEntityAssignedPermissionGroupsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: permissionGroupConstants.routes.getEntityAssignedPermissionGroups,
    method: HttpEndpointMethod.Post,
    requestBody: getEntityAssignedPermissionGroupsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getEntityAssignedPermissionGroupsResponseBody,
    name: 'fimidara/permissionGroups/getEntityAssignedPermissionGroups',
    description:
      'Get all permission groups assigned to a specific entity (user, collaborator, or agent token). Optionally include inherited permission groups from other assigned permission groups.',
    tags: [kEndpointTag.public],
  });
