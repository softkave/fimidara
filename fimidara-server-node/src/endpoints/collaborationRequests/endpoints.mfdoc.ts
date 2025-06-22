import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {
  kCollaborationRequestStatusTypeMap,
  PublicCollaborationRequestForUser,
  PublicCollaborationRequestForWorkspace,
} from '../../definitions/collaborationRequest.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {collabRequestConstants} from './constants.js';
import {CountWorkspaceCollaborationRequestsEndpointParams} from './countWorkspaceRequests/types.js';
import {DeleteCollaborationRequestEndpointParams} from './deleteRequest/types.js';
import {
  GetUserCollaborationRequestEndpointParams,
  GetUserCollaborationRequestEndpointResult,
} from './getUserRequest/types.js';
import {
  GetUserCollaborationRequestsEndpointParams,
  GetUserCollaborationRequestsEndpointResult,
} from './getUserRequests/types.js';
import {
  GetWorkspaceCollaborationRequestEndpointParams,
  GetWorkspaceCollaborationRequestEndpointResult,
} from './getWorkspaceRequest/types.js';
import {
  GetWorkspaceCollaborationRequestsEndpointParams,
  GetWorkspaceCollaborationRequestsEndpointResult,
} from './getWorkspaceRequests/types.js';
import {
  RespondToCollaborationRequestEndpointParams,
  RespondToCollaborationRequestEndpointResult,
} from './respondToRequest/types.js';
import {
  RevokeCollaborationRequestEndpointParams,
  RevokeCollaborationRequestEndpointResult,
} from './revokeRequest/types.js';
import {
  SendCollaborationRequestEndpointParams,
  SendCollaborationRequestEndpointResult,
} from './sendRequest/types.js';
import {
  CountUserCollaborationRequestsHttpEndpoint,
  CountWorkspaceCollaborationRequestsHttpEndpoint,
  DeleteCollaborationRequestHttpEndpoint,
  GetUserCollaborationRequestHttpEndpoint,
  GetUserCollaborationRequestsHttpEndpoint,
  GetWorkspaceCollaborationRequestHttpEndpoint,
  GetWorkspaceCollaborationRequestsHttpEndpoint,
  RespondToCollaborationRequestHttpEndpoint,
  RevokeCollaborationRequestHttpEndpoint,
  SendCollaborationRequestHttpEndpoint,
  UpdateCollaborationRequestHttpEndpoint,
} from './types.js';
import {
  UpdateCollaborationRequestEndpointParams,
  UpdateCollaborationRequestEndpointResult,
  UpdateCollaborationRequestInput,
} from './updateRequest/types.js';

const recipientEmail = mfdocConstruct.constructString({
  description:
    'Email address of the user you want to collaborate with. This user will receive the collaboration request and can accept or decline it.',
  example: 'babar@fimidara.com',
});
const message = mfdocConstruct.constructString({
  description:
    'Personal message to include with the collaboration request. Use this to explain why you want to collaborate or provide context about the workspace.',
  example:
    'Hi! I would love to collaborate with you on this project. Your expertise in data analysis would be very valuable.',
});
const statusType = mfdocConstruct.constructString({
  description:
    'Current status of the collaboration request. Shows whether the request is pending, accepted, declined, or revoked.',
  example: kCollaborationRequestStatusTypeMap.Accepted,
  valid: Object.values(kCollaborationRequestStatusTypeMap),
  enumName: 'CollaborationRequestStatusType',
});
const response = mfdocConstruct.constructString({
  description:
    'Your response to a collaboration request. Use "accepted" to join the workspace or "declined" to reject the invitation.',
  example: kCollaborationRequestStatusTypeMap.Accepted,
  valid: [
    kCollaborationRequestStatusTypeMap.Accepted,
    kCollaborationRequestStatusTypeMap.Declined,
  ],
  enumName: 'CollaborationRequestResponseType',
});

const updateCollaborationRequestInput =
  mfdocConstruct.constructObject<UpdateCollaborationRequestInput>({
    name: 'UpdateCollaborationRequestInput',
    description:
      'Fields you can update in a collaboration request. You can modify the message or extend the expiration date.',
    fields: {
      message: mfdocConstruct.constructObjectField({
        required: false,
        data: message,
      }),
      expires: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.expires,
      }),
    },
  });

const collaborationRequestForUser =
  mfdocConstruct.constructObject<PublicCollaborationRequestForUser>({
    name: 'CollaborationRequestForUser',
    description:
      'A collaboration request as seen by the recipient user. Contains all the information needed to understand and respond to the collaboration invitation.',
    fields: {
      ...fReusables.resourceParts,
      recipientEmail: mfdocConstruct.constructObjectField({
        required: true,
        data: recipientEmail,
      }),
      message: mfdocConstruct.constructObjectField({
        required: true,
        data: message,
      }),
      expiresAt: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.expires,
      }),
      workspaceName: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.workspaceName,
      }),
      readAt: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.date,
      }),
      status: mfdocConstruct.constructObjectField({
        required: true,
        data: statusType,
      }),
      statusDate: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.date,
      }),
    },
  });
const collaborationRequestForWorkspace =
  mfdocConstruct.constructObject<PublicCollaborationRequestForWorkspace>({
    name: 'CollaborationRequestForWorkspace',
    description:
      'A collaboration request as seen by the workspace owner. Contains details about who was invited and the current status of the invitation.',
    fields: {
      ...fReusables.workspaceResourceParts,
      recipientEmail: mfdocConstruct.constructObjectField({
        required: true,
        data: recipientEmail,
      }),
      message: mfdocConstruct.constructObjectField({
        required: true,
        data: message,
      }),
      expiresAt: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.expires,
      }),
      workspaceName: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.workspaceName,
      }),
      readAt: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.date,
      }),
      status: mfdocConstruct.constructObjectField({
        required: true,
        data: statusType,
      }),
      statusDate: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.date,
      }),
    },
  });

const sendCollaborationRequestParams =
  mfdocConstruct.constructObject<SendCollaborationRequestEndpointParams>({
    name: 'SendCollaborationRequestEndpointParams',
    description:
      'Parameters needed to send a collaboration request to invite someone to your workspace.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceId,
      }),
      recipientEmail: mfdocConstruct.constructObjectField({
        required: true,
        data: recipientEmail,
      }),
      message: mfdocConstruct.constructObjectField({
        required: true,
        data: message,
      }),
      expires: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.expires,
      }),
    },
  });
const sendCollaborationRequestResponseBody =
  mfdocConstruct.constructObject<SendCollaborationRequestEndpointResult>({
    name: 'SendCollaborationRequestEndpointResult',
    description:
      'Response returned after successfully sending a collaboration request. Contains the created request details.',
    fields: {
      request: mfdocConstruct.constructObjectField({
        required: true,
        data: collaborationRequestForWorkspace,
      }),
    },
  });
const getWorkspaceCollaborationRequestsParams =
  mfdocConstruct.constructObject<GetWorkspaceCollaborationRequestsEndpointParams>(
    {
      name: 'GetWorkspaceCollaborationRequestsEndpointParams',
      description:
        'Parameters for retrieving collaboration requests sent from your workspace. Use pagination to handle large numbers of requests.',
      fields: {
        workspaceId: mfdocConstruct.constructObjectField({
          required: false,
          data: fReusables.workspaceIdInput,
        }),
        page: mfdocConstruct.constructObjectField({
          required: false,
          data: fReusables.page,
        }),
        pageSize: mfdocConstruct.constructObjectField({
          required: false,
          data: fReusables.pageSize,
        }),
      },
    }
  );
const getWorkspaceCollaborationRequestsResponseBody =
  mfdocConstruct.constructObject<GetWorkspaceCollaborationRequestsEndpointResult>(
    {
      name: 'GetWorkspaceCollaborationRequestsEndpointResult',
      description:
        'Paginated list of collaboration requests sent from your workspace, showing the status of each invitation.',
      fields: {
        requests: mfdocConstruct.constructObjectField({
          required: true,
          data: mfdocConstruct.constructArray<PublicCollaborationRequestForWorkspace>(
            {
              type: collaborationRequestForWorkspace,
            }
          ),
        }),
        page: mfdocConstruct.constructObjectField({
          required: true,
          data: fReusables.page,
        }),
      },
    }
  );
const countWorkspaceCollaborationRequestsParams =
  mfdocConstruct.constructObject<CountWorkspaceCollaborationRequestsEndpointParams>(
    {
      name: 'CountWorkspaceCollaborationRequestsEndpointParams',
      description:
        'Parameters for counting the total number of collaboration requests sent from your workspace.',
      fields: {
        workspaceId: mfdocConstruct.constructObjectField({
          required: false,
          data: fReusables.workspaceIdInput,
        }),
      },
    }
  );
const getUserCollaborationRequestsParams =
  mfdocConstruct.constructObject<GetUserCollaborationRequestsEndpointParams>({
    name: 'GetUserCollaborationRequestsEndpointParams',
    description:
      'Parameters for retrieving collaboration requests you have received from other workspace owners.',
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
const getUserCollaborationRequestsResponseBody =
  mfdocConstruct.constructObject<GetUserCollaborationRequestsEndpointResult>({
    name: 'GetUserCollaborationRequestsEndpointResult',
    description:
      'Paginated list of collaboration requests you have received, which you can accept or decline.',
    fields: {
      requests: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicCollaborationRequestForUser>({
          type: collaborationRequestForUser,
        }),
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
      }),
    },
  });
const updateCollaborationRequestParams =
  mfdocConstruct.constructObject<UpdateCollaborationRequestEndpointParams>({
    name: 'UpdateCollaborationRequestEndpointParams',
    description:
      'Parameters for updating an existing collaboration request. You can modify the message or extend the expiration date.',
    fields: {
      requestId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
      request: mfdocConstruct.constructObjectField({
        required: true,
        data: updateCollaborationRequestInput,
      }),
    },
  });
const updateCollaborationRequestResponseBody =
  mfdocConstruct.constructObject<UpdateCollaborationRequestEndpointResult>({
    name: 'UpdateCollaborationRequestEndpointResult',
    description:
      'Response returned after successfully updating a collaboration request with the updated details.',
    fields: {
      request: mfdocConstruct.constructObjectField({
        required: true,
        data: collaborationRequestForWorkspace,
      }),
    },
  });
const respondToCollaborationRequestParams =
  mfdocConstruct.constructObject<RespondToCollaborationRequestEndpointParams>({
    name: 'RespondToCollaborationRequestEndpointParams',
    description:
      'Parameters for responding to a collaboration request you have received. Choose to accept and join the workspace or decline the invitation.',
    fields: {
      requestId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
      response: mfdocConstruct.constructObjectField({
        required: true,
        data: response,
      }),
    },
  });
const respondToCollaborationRequestResponseBody =
  mfdocConstruct.constructObject<RespondToCollaborationRequestEndpointResult>({
    name: 'RespondToCollaborationRequestEndpointResult',
    description:
      'Response returned after successfully responding to a collaboration request, showing the updated request status.',
    fields: {
      request: mfdocConstruct.constructObjectField({
        required: true,
        data: collaborationRequestForUser,
      }),
    },
  });
const getCollaborationRequestForUserParams =
  mfdocConstruct.constructObject<GetUserCollaborationRequestEndpointParams>({
    name: 'GetUserCollaborationRequestEndpointParams',
    description:
      'Parameters for retrieving details of a specific collaboration request you have received.',
    fields: {
      requestId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
    },
  });
const getCollaborationRequestForUserResponseBody =
  mfdocConstruct.constructObject<GetUserCollaborationRequestEndpointResult>({
    name: 'GetUserCollaborationRequestEndpointResult',
    description:
      'Details of a specific collaboration request you have received, including the message and workspace information.',
    fields: {
      request: mfdocConstruct.constructObjectField({
        required: true,
        data: collaborationRequestForUser,
      }),
    },
  });
const getCollaborationRequestForWorkspaceParams =
  mfdocConstruct.constructObject<GetWorkspaceCollaborationRequestEndpointParams>(
    {
      name: 'GetWorkspaceCollaborationRequestEndpointParams',
      description:
        'Parameters for retrieving details of a specific collaboration request sent from your workspace.',
      fields: {
        requestId: mfdocConstruct.constructObjectField({
          required: true,
          data: fReusables.id,
        }),
        workspaceId: mfdocConstruct.constructObjectField({
          required: false,
          data: fReusables.workspaceIdInput,
        }),
      },
    }
  );
const getCollaborationRequestForWorkspaceResponseBody =
  mfdocConstruct.constructObject<GetWorkspaceCollaborationRequestEndpointResult>(
    {
      name: 'GetWorkspaceCollaborationRequestEndpointResult',
      description:
        'Details of a specific collaboration request sent from your workspace, showing its current status and recipient information.',
      fields: {
        request: mfdocConstruct.constructObjectField({
          required: true,
          data: collaborationRequestForWorkspace,
        }),
      },
    }
  );
const revokeCollaborationRequestParams =
  mfdocConstruct.constructObject<RevokeCollaborationRequestEndpointParams>({
    name: 'RevokeCollaborationRequestEndpointParams',
    description:
      'Parameters for revoking a collaboration request you have sent. This cancels the invitation before it can be accepted.',
    fields: {
      requestId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
    },
  });
const revokeCollaborationRequestResponseBody =
  mfdocConstruct.constructObject<RevokeCollaborationRequestEndpointResult>({
    name: 'RevokeCollaborationRequestEndpointResult',
    description:
      'Response returned after successfully revoking a collaboration request, showing the updated request status.',
    fields: {
      request: mfdocConstruct.constructObjectField({
        required: true,
        data: collaborationRequestForWorkspace,
      }),
    },
  });
const deleteCollaborationRequestParams =
  mfdocConstruct.constructObject<DeleteCollaborationRequestEndpointParams>({
    name: 'DeleteCollaborationRequestEndpointParams',
    description:
      'Parameters for permanently deleting a collaboration request. This removes all record of the invitation.',
    fields: {
      requestId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
    },
  });
export const sendCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      SendCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      SendCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      SendCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      SendCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      SendCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      SendCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.sendRequest,
    method: HttpEndpointMethod.Post,
    requestBody: sendCollaborationRequestParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: sendCollaborationRequestResponseBody,
    name: 'fimidara/collaborationRequests/sendRequest',
    description:
      'Send a collaboration request to invite a user to your workspace. The recipient will receive an email notification and can accept or decline the invitation through the platform.',
    tags: [kEndpointTag.public],
  });

export const getUserCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetUserCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetUserCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.getUserRequest,
    method: HttpEndpointMethod.Post,
    requestBody: getCollaborationRequestForUserParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getCollaborationRequestForUserResponseBody,
    name: 'fimidara/collaborationRequests/getUserRequest',
    description:
      'Get details of a specific collaboration request you have received. Use this to review the invitation details before accepting or declining.',
    tags: [kEndpointTag.private],
  });

export const getWorkspaceCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspaceCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.getWorkspaceRequest,
    method: HttpEndpointMethod.Post,
    requestBody: getCollaborationRequestForWorkspaceParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getCollaborationRequestForWorkspaceResponseBody,
    name: 'fimidara/collaborationRequests/getWorkspaceRequest',
    description:
      'Get details of a specific collaboration request sent from your workspace. Use this to check the status of invitations you have sent.',
    tags: [kEndpointTag.public],
  });

export const updateCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdateCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdateCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.updateRequest,
    method: HttpEndpointMethod.Post,
    requestBody: updateCollaborationRequestParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateCollaborationRequestResponseBody,
    name: 'fimidara/collaborationRequests/updateRequest',
    description:
      'Update an existing collaboration request you have sent. You can modify the message to provide additional context or extend the expiration date.',
    tags: [kEndpointTag.public],
  });

export const respondToCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      RespondToCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      RespondToCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      RespondToCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      RespondToCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      RespondToCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      RespondToCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.respondToRequest,
    method: HttpEndpointMethod.Post,
    requestBody: respondToCollaborationRequestParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: respondToCollaborationRequestResponseBody,
    name: 'fimidara/collaborationRequests/respondToRequest',
    description:
      'Respond to a collaboration request you have received. Accept the invitation to join the workspace or decline if you are not interested.',
    tags: [kEndpointTag.private],
  });

export const revokeCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      RevokeCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      RevokeCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      RevokeCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      RevokeCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      RevokeCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      RevokeCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.revokeRequest,
    method: HttpEndpointMethod.Post,
    requestBody: revokeCollaborationRequestParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: revokeCollaborationRequestResponseBody,
    name: 'fimidara/collaborationRequests/revokeRequest',
    description:
      'Revoke a collaboration request you have sent. This cancels the invitation and the recipient will no longer be able to accept it.',
    tags: [kEndpointTag.public],
  });

export const deleteCollaborationRequestEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeleteCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeleteCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeleteCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeleteCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeleteCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeleteCollaborationRequestHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.deleteRequest,
    method: HttpEndpointMethod.Delete,
    requestBody: deleteCollaborationRequestParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/collaborationRequests/deleteRequest',
    description:
      'Permanently delete a collaboration request. This removes all records of the invitation and cannot be undone.',
    tags: [kEndpointTag.public],
  });

export const getWorkspaceCollaborationRequestsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.getWorkspaceRequests,
    method: HttpEndpointMethod.Post,
    requestBody: getWorkspaceCollaborationRequestsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspaceCollaborationRequestsResponseBody,
    name: 'fimidara/collaborationRequests/getWorkspaceRequests',
    description:
      'Get a paginated list of all collaboration requests sent from your workspace. Use this to track the status of all invitations you have sent.',
    tags: [kEndpointTag.public],
  });

export const getUserCollaborationRequestsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.getUserRequests,
    method: HttpEndpointMethod.Post,
    requestBody: getUserCollaborationRequestsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getUserCollaborationRequestsResponseBody,
    name: 'fimidara/collaborationRequests/getUserRequests',
    description:
      'Get a paginated list of all collaboration requests you have received. Use this to see all pending invitations from workspace owners.',
    tags: [kEndpointTag.private],
  });

export const countUserCollaborationRequestsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountUserCollaborationRequestsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: collabRequestConstants.routes.countUserRequests,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/collaborationRequests/countUserRequests',
    description:
      'Get the total count of collaboration requests you have received. Useful for displaying notification badges in your UI.',
    tags: [kEndpointTag.private],
  });

export const countWorkspaceCollaborationRequestsEndpointDefinition =
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
    path: collabRequestConstants.routes.countWorkspaceRequests,
    method: HttpEndpointMethod.Post,
    requestBody: countWorkspaceCollaborationRequestsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/collaborationRequests/countWorkspaceRequests',
    description:
      'Get the total count of collaboration requests sent from your workspace. Useful for analytics and pagination calculations.',
    tags: [kEndpointTag.public],
  });
