import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {kUsageRecordCategory} from '../../definitions/usageRecord.js';
import {
  PublicUsageThreshold,
  PublicWorkspace,
  kWorkspaceBillStatusMap,
} from '../../definitions/workspace.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {EndpointOptionalWorkspaceIDParam, kEndpointTag} from '../types.js';
import {
  AddWorkspaceEndpointParams,
  AddWorkspaceEndpointResult,
} from './addWorkspace/types.js';
import {workspaceConstants} from './constants.js';
import {
  GetUserWorkspacesEndpointParams,
  GetUserWorkspacesEndpointResult,
} from './getUserWorkspaces/types.js';
import {GetWorkspaceEndpointResult} from './getWorkspace/types.js';
import {
  AddWorkspaceHttpEndpoint,
  CountUserWorkspacesHttpEndpoint,
  DeleteWorkspaceHttpEndpoint,
  GetUserWorkspacesHttpEndpoint,
  GetWorkspaceHttpEndpoint,
  UpdateWorkspaceHttpEndpoint,
} from './types.js';
import {
  UpdateWorkspaceEndpointParams,
  UpdateWorkspaceEndpointResult,
  UpdateWorkspaceInput,
} from './updateWorkspace/types.js';

const workspaceDescription = mfdocConstruct.constructString({
  description: 'Workspace description',
  example:
    'fimidara, a super awesome company that offers file management with access control for devs',
});

const usageRecordCategory = mfdocConstruct.constructString({
  description: 'Usage record category',
  example: kUsageRecordCategory.storage,
  valid: Object.values(kUsageRecordCategory),
  enumName: 'UsageRecordCategory',
});

const price = mfdocConstruct.constructNumber({
  description: 'Price in USD',
  example: 5,
});

const usageThreshold = mfdocConstruct.constructObject<PublicUsageThreshold>({
  name: 'UsageThreshold',
  description: 'Usage threshold configuration for workspace billing and limits',
  fields: {
    lastUpdatedBy: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.agent,
    }),
    lastUpdatedAt: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.date,
    }),
    category: mfdocConstruct.constructObjectField({
      required: true,
      data: usageRecordCategory,
    }),
    budget: mfdocConstruct.constructObjectField({
      required: true,
      data: price,
    }),
    usage: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.usage,
    }),
  },
});

const workspace = mfdocConstruct.constructObject<PublicWorkspace>({
  name: 'Workspace',
  description:
    'A workspace containing files, folders, and access control settings',
  fields: {
    ...fReusables.workspaceResourceParts,
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.workspaceName,
    }),
    rootname: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.workspaceRootname,
    }),
    description: mfdocConstruct.constructObjectField({
      required: false,
      data: workspaceDescription,
    }),
    publicPermissionGroupId: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.id,
    }),
    billStatusAssignedAt: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.date,
    }),
    billStatus: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructString({
        description: 'Workspace bill status',
        example: kWorkspaceBillStatusMap.ok,
        valid: Object.values(kWorkspaceBillStatusMap),
        enumName: 'WorkspaceBillStatus',
      }),
    }),
    usageThresholds: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructObject<PublicWorkspace['usageThresholds']>({
        name: 'WorkspaceUsageThresholds',
        description:
          'Usage thresholds for different resource categories in the workspace',
        fields: {
          [kUsageRecordCategory.storage]: mfdocConstruct.constructObjectField({
            required: false,
            data: usageThreshold,
          }),
          [kUsageRecordCategory.storageEverConsumed]:
            mfdocConstruct.constructObjectField({
              required: false,
              data: usageThreshold,
            }),
          [kUsageRecordCategory.bandwidthIn]:
            mfdocConstruct.constructObjectField({
              required: false,
              data: usageThreshold,
            }),
          [kUsageRecordCategory.bandwidthOut]:
            mfdocConstruct.constructObjectField({
              required: false,
              data: usageThreshold,
            }),
          [kUsageRecordCategory.total]: mfdocConstruct.constructObjectField({
            required: false,
            data: usageThreshold,
          }),
        },
      }),
    }),
  },
});

const addWorkspaceParams =
  mfdocConstruct.constructObject<AddWorkspaceEndpointParams>({
    name: 'AddWorkspaceEndpointParams',
    description: 'Parameters for creating a new workspace',
    fields: {
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.workspaceName,
      }),
      rootname: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.workspaceRootname,
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: workspaceDescription,
      }),
    },
  });

const addWorkspaceResponseBody =
  mfdocConstruct.constructObject<AddWorkspaceEndpointResult>({
    name: 'AddWorkspaceEndpointResult',
    description: 'Response containing the newly created workspace',
    fields: {
      workspace: mfdocConstruct.constructObjectField({
        required: true,
        data: workspace,
      }),
    },
  });

const getWorkspaceParams =
  mfdocConstruct.constructObject<EndpointOptionalWorkspaceIDParam>({
    name: 'GetWorkspaceEndpointParams',
    description:
      "Parameters for retrieving workspace information. If workspaceId is not provided, returns the current user's default workspace",
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
      }),
    },
  });

const getWorkspaceResponseBody =
  mfdocConstruct.constructObject<GetWorkspaceEndpointResult>({
    name: 'GetWorkspaceEndpointResult',
    description: 'Response containing the requested workspace information',
    fields: {
      workspace: mfdocConstruct.constructObjectField({
        required: true,
        data: workspace,
      }),
    },
  });

const getUserWorkspacesParams =
  mfdocConstruct.constructObject<GetUserWorkspacesEndpointParams>({
    name: 'GetUserWorkspacesEndpointParams',
    description: "Parameters for retrieving user's workspaces with pagination",
    fields: {
      page: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.page,
      }),
      pageSize: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.pageSize,
      }),
    },
  });

const getUserWorkspacesResponseBody =
  mfdocConstruct.constructObject<GetUserWorkspacesEndpointResult>({
    name: 'GetUserWorkspacesEndpointResult',
    description: "Paginated response containing user's workspaces",
    fields: {
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
      }),
      workspaces: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicWorkspace>({
          type: workspace,
          description: 'List of workspaces accessible to the user',
        }),
      }),
    },
  });

const updateWorkspaceParams =
  mfdocConstruct.constructObject<UpdateWorkspaceEndpointParams>({
    name: 'UpdateWorkspaceEndpointParams',
    description: 'Parameters for updating workspace information',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
      }),
      workspace: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructObject<UpdateWorkspaceInput>({
          name: 'UpdateWorkspaceInput',
          description: 'Workspace fields to update',
          fields: {
            name: mfdocConstruct.constructObjectField({
              required: false,
              data: fReusables.workspaceName,
            }),
            description: mfdocConstruct.constructObjectField({
              required: false,
              data: workspaceDescription,
            }),
          },
        }),
      }),
    },
  });

const updateWorkspaceResponseBody =
  mfdocConstruct.constructObject<UpdateWorkspaceEndpointResult>({
    name: 'UpdateWorkspaceEndpointResult',
    description: 'Response containing the updated workspace',
    fields: {
      workspace: mfdocConstruct.constructObjectField({
        required: true,
        data: workspace,
      }),
    },
  });

const deleteWorkspaceParams =
  mfdocConstruct.constructObject<EndpointOptionalWorkspaceIDParam>({
    name: 'DeleteWorkspaceEndpointParams',
    description:
      "Parameters for deleting a workspace. If workspaceId is not provided, deletes the current user's default workspace",
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
      }),
    },
  });

export const addWorkspaceEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddWorkspaceHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      AddWorkspaceHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      AddWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: workspaceConstants.routes.addWorkspace,
    method: HttpEndpointMethod.Post,
    requestBody: addWorkspaceParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: addWorkspaceResponseBody,
    name: 'fimidara/workspaces/addWorkspace',
    description:
      'Create a new workspace with the specified name and optional description',
    tags: [kEndpointTag.private],
  });

export const getWorkspaceEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspaceHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: workspaceConstants.routes.getWorkspace,
    method: HttpEndpointMethod.Post,
    requestBody: getWorkspaceParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspaceResponseBody,
    name: 'fimidara/workspaces/getWorkspace',
    description:
      "Retrieve information about a specific workspace or the current user's default workspace",
    tags: [kEndpointTag.public],
  });

export const getUserWorkspacesEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: workspaceConstants.routes.getUserWorkspaces,
    method: HttpEndpointMethod.Post,
    requestBody: getUserWorkspacesParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getUserWorkspacesResponseBody,
    name: 'fimidara/workspaces/getUserWorkspaces',
    description:
      'Retrieve a paginated list of workspaces accessible to the current user',
    tags: [kEndpointTag.private],
  });

export const updateWorkspaceEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateWorkspaceHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdateWorkspaceHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdateWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: workspaceConstants.routes.updateWorkspace,
    method: HttpEndpointMethod.Post,
    requestBody: updateWorkspaceParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateWorkspaceResponseBody,
    name: 'fimidara/workspaces/updateWorkspace',
    description: 'Update workspace information such as name and description',
    tags: [kEndpointTag.public],
  });

export const deleteWorkspaceEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeleteWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeleteWorkspaceHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeleteWorkspaceHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeleteWorkspaceHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeleteWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeleteWorkspaceHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: workspaceConstants.routes.deleteWorkspace,
    method: HttpEndpointMethod.Delete,
    requestBody: deleteWorkspaceParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/workspaces/deleteWorkspace',
    description:
      'Delete a workspace and all its contents. This is a long-running operation that cannot be undone',
    tags: [kEndpointTag.private],
  });

export const countUserWorkspacesEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountUserWorkspacesHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: workspaceConstants.routes.countUserWorkspaces,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/workspaces/countUserWorkspaces',
    description:
      'Get the total count of workspaces accessible to the current user',
    tags: [kEndpointTag.private],
  });

export const workspaceEndpointsMddocParts = {workspace};
