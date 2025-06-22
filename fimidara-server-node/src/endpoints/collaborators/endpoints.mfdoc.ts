import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {kFimidaraResourceType} from '../../definitions/system.js';
import {PublicCollaborator} from '../../definitions/user.js';
import {CountWorkspaceCollaborationRequestsHttpEndpoint} from '../collaborationRequests/types.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {collaboratorConstants} from './constants.js';
import {CountWorkspaceCollaboratorsEndpointParams} from './countWorkspaceCollaborators/types.js';
import {
  GetCollaboratorEndpointParams,
  GetCollaboratorEndpointResult,
} from './getCollaborator/types.js';
import {
  GetCollaboratorsWithoutPermissionEndpointParams,
  GetCollaboratorsWithoutPermissionEndpointResult,
} from './getCollaboratorsWithoutPermission/types.js';
import {
  GetWorkspaceCollaboratorsEndpointParams,
  GetWorkspaceCollaboratorsEndpointResult,
} from './getWorkspaceCollaborators/types.js';
import {RemoveCollaboratorEndpointParams} from './removeCollaborator/types.js';
import {
  GetCollaboratorHttpEndpoint,
  GetCollaboratorsWithoutPermissionHttpEndpoint,
  GetWorkspaceCollaboratorsHttpEndpoint,
  RemoveCollaboratorHttpEndpoint,
} from './types.js';

const collaborator = mfdocConstruct.constructObject<PublicCollaborator>({
  name: 'Collaborator',
  description: 'Publicly visible information about a collaborator.',
  fields: {
    ...fReusables.workspaceResourceParts,
    firstName: mfdocConstruct.constructObjectField({
      required: true,
      description:
        "Collaborator's first name as provided during registration or invitation.",
      example: 'John',
      data: fReusables.firstName,
    }),
    lastName: mfdocConstruct.constructObjectField({
      required: true,
      description:
        "Collaborator's last name as provided during registration or invitation.",
      example: 'Doe',
      data: fReusables.lastName,
    }),
    email: mfdocConstruct.constructObjectField({
      required: true,
      description:
        "Collaborator's email address used for authentication and notifications.",
      example: 'johndoe@email.com',
      data: fReusables.emailAddress,
    }),
  },
});

const getWorkspaceCollaboratorsParams =
  mfdocConstruct.constructObject<GetWorkspaceCollaboratorsEndpointParams>({
    name: 'GetWorkspaceCollaboratorsEndpointParams',
    description: 'Parameters for getting a list of workspace collaborators.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        description:
          "ID of the workspace to get collaborators from. If not provided, the user's default workspace is used.",
        example: fReusables.makeResourceId(kFimidaraResourceType.Workspace),
        data: fReusables.workspaceIdInput,
      }),
      page: mfdocConstruct.constructObjectField({
        required: false,
        description: 'Page number to fetch. Starts from 1 for the first page.',
        example: 1,
        data: fReusables.page,
      }),
      pageSize: mfdocConstruct.constructObjectField({
        required: false,
        description:
          'Number of collaborators to fetch per page. Defaults to 20, maximum 100.',
        example: 20,
        data: fReusables.pageSize,
      }),
    },
  });

const getWorkspaceCollaboratorsResponseBody =
  mfdocConstruct.constructObject<GetWorkspaceCollaboratorsEndpointResult>({
    name: 'GetWorkspaceCollaboratorsEndpointResult',
    description: 'Result of getting a list of workspace collaborators.',
    fields: {
      collaborators: mfdocConstruct.constructObjectField({
        required: true,
        description: 'List of collaborators in the workspace.',
        data: mfdocConstruct.constructArray<PublicCollaborator>({
          type: collaborator,
          description: 'Array of workspace collaborators.',
          example: [
            {
              resourceId: fReusables.makeResourceId(kFimidaraResourceType.User),
              workspaceId: fReusables.workspaceId,
              firstName: 'John',
              lastName: 'Doe',
              email: 'john.doe@example.com',
              createdAt: '2024-01-15T10:30:00.000Z',
              lastUpdatedAt: '2024-01-15T10:30:00.000Z',
            },
          ],
        }),
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        description: 'The current page number of results returned.',
        example: 1,
        data: fReusables.page,
      }),
    },
  });

const getCollaboratorsWithoutPermissionParams =
  mfdocConstruct.constructObject<GetCollaboratorsWithoutPermissionEndpointParams>(
    {
      name: 'GetCollaboratorsWithoutPermissionEndpointParams',
      description:
        'Parameters for getting collaborators without a specific permission.',
      fields: {
        workspaceId: mfdocConstruct.constructObjectField({
          required: false,
          description:
            "ID of the workspace to check collaborators in. If not provided, the user's default workspace is used.",
          example: fReusables.makeResourceId(kFimidaraResourceType.Workspace),
          data: fReusables.workspaceIdInput,
        }),
      },
    }
  );

const getCollaboratorsWithoutPermissionResponseBody =
  mfdocConstruct.constructObject<GetCollaboratorsWithoutPermissionEndpointResult>(
    {
      name: 'GetCollaboratorsWithoutPermissionEndpointResult',
      description:
        'A list of IDs of collaborators who do not have a specific permission.',
      fields: {
        collaboratorIds: mfdocConstruct.constructObjectField({
          required: true,
          description:
            'List of IDs of collaborators who do not have the permission.',
          data: mfdocConstruct.constructArray<string>({
            type: fReusables.id,
            description: 'Array of collaborator IDs.',
            example: [
              fReusables.makeResourceId(kFimidaraResourceType.User),
              fReusables.makeResourceId(kFimidaraResourceType.User),
            ],
          }),
        }),
      },
    }
  );

const countWorkspaceCollaboratorsParams =
  mfdocConstruct.constructObject<CountWorkspaceCollaboratorsEndpointParams>({
    name: 'CountWorkspaceCollaboratorsEndpointParams',
    description: 'Parameters for counting workspace collaborators.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        description:
          "ID of the workspace to count collaborators in. If not provided, the user's default workspace is used.",
        example: fReusables.makeResourceId(kFimidaraResourceType.Workspace),
        data: fReusables.workspaceIdInput,
      }),
    },
  });

const getCollaboratorParams =
  mfdocConstruct.constructObject<GetCollaboratorEndpointParams>({
    name: 'GetCollaboratorEndpointParams',
    description: 'Parameters for getting a specific collaborator by ID.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        description:
          "ID of the workspace containing the collaborator. If not provided, the user's default workspace is used.",
        example: fReusables.makeResourceId(kFimidaraResourceType.Workspace),
        data: fReusables.workspaceIdInput,
      }),
      collaboratorId: mfdocConstruct.constructObjectField({
        required: true,
        description: 'Unique ID of the collaborator to retrieve.',
        example: fReusables.makeResourceId(kFimidaraResourceType.User),
        data: fReusables.id,
      }),
    },
  });

const getCollaboratorResponseBody =
  mfdocConstruct.constructObject<GetCollaboratorEndpointResult>({
    name: 'GetCollaboratorEndpointResult',
    description: 'Result containing the requested collaborator information.',
    fields: {
      collaborator: mfdocConstruct.constructObjectField({
        required: true,
        description:
          'The collaborator information including personal details and workspace association.',
        data: collaborator,
      }),
    },
  });

const removeCollaboratorParams =
  mfdocConstruct.constructObject<RemoveCollaboratorEndpointParams>({
    name: 'RevokeCollaboratorEndpointParams',
    description: 'Parameters for removing a collaborator from a workspace.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        description:
          "ID of the workspace to remove the collaborator from. If not provided, the user's default workspace is used.",
        example: fReusables.makeResourceId(kFimidaraResourceType.Workspace),
        data: fReusables.workspaceIdInput,
      }),
      collaboratorId: mfdocConstruct.constructObjectField({
        required: true,
        description: 'ID of the collaborator to remove from the workspace.',
        example: fReusables.makeResourceId(kFimidaraResourceType.User),
        data: fReusables.id,
      }),
    },
  });

export const getCollaboratorEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetCollaboratorHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetCollaboratorHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetCollaboratorHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetCollaboratorHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetCollaboratorHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetCollaboratorHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collaboratorConstants.routes.getCollaborator,
    method: HttpEndpointMethod.Post,
    requestBody: getCollaboratorParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getCollaboratorResponseBody,
    name: 'fimidara/collaborators/getCollaborator',
    description:
      'Retrieve detailed information about a specific collaborator by their ID. Requires the collaborator to exist in the specified workspace and appropriate permissions to view collaborator details.',
    tags: [kEndpointTag.public],
  });

export const removeCollaboratorEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      RemoveCollaboratorHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      RemoveCollaboratorHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      RemoveCollaboratorHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      RemoveCollaboratorHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      RemoveCollaboratorHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      RemoveCollaboratorHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collaboratorConstants.routes.removeCollaborator,
    method: HttpEndpointMethod.Post,
    requestBody: removeCollaboratorParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/collaborators/removeCollaborator',
    description:
      'Remove a collaborator from a workspace. This revokes their access and removes all associated permissions. The operation runs as a background job and returns immediately with a job ID for tracking progress.',
    tags: [kEndpointTag.public],
  });

export const getWorkspaceCollaboratorsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspaceCollaboratorsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaboratorsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaboratorsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspaceCollaboratorsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaboratorsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaboratorsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collaboratorConstants.routes.getWorkspaceCollaborators,
    method: HttpEndpointMethod.Post,
    requestBody: getWorkspaceCollaboratorsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspaceCollaboratorsResponseBody,
    name: 'fimidara/collaborators/getWorkspaceCollaborators',
    description:
      'Retrieve a paginated list of all collaborators in a workspace. Results include basic collaborator information such as name, email, and workspace association. Use pagination parameters to navigate through large result sets.',
    tags: [kEndpointTag.public],
  });

export const countWorkspaceCollaboratorsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collaboratorConstants.routes.countWorkspaceCollaborators,
    method: HttpEndpointMethod.Post,
    requestBody: countWorkspaceCollaboratorsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/collaborators/countWorkspaceCollaborators',
    description:
      'Get the total number of collaborators in a workspace. Useful for pagination calculations and workspace analytics without fetching the full list of collaborators.',
    tags: [kEndpointTag.public],
  });

export const getCollaboratorsWithoutPermissionEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetCollaboratorsWithoutPermissionHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetCollaboratorsWithoutPermissionHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetCollaboratorsWithoutPermissionHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetCollaboratorsWithoutPermissionHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetCollaboratorsWithoutPermissionHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetCollaboratorsWithoutPermissionHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collaboratorConstants.routes.getCollaboratorsWithoutPermission,
    method: HttpEndpointMethod.Post,
    requestBody: getCollaboratorsWithoutPermissionParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getCollaboratorsWithoutPermissionResponseBody,
    name: 'fimidara/collaborators/getCollaboratorsWithoutPermission',
    description:
      'Get a list of collaborator IDs who do not have a specific permission in the workspace. This is an internal endpoint used for permission management and bulk operations. Returns only collaborator IDs, not full collaborator details.',
    tags: [kEndpointTag.private],
  });
