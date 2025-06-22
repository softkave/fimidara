import {MfdocFieldObjectFieldsMap, mfdocConstruct} from 'mfdoc';
import {customAlphabet} from 'nanoid';
import {AnyObject} from 'softkave-js-utils';
import {
  FimidaraPermissionAction,
  kFimidaraPermissionActions,
} from '../definitions/permissionItem.js';
import {
  FimidaraResourceType,
  PublicAgent,
  PublicResource,
  PublicWorkspaceResource,
  kFimidaraPublicResourceType,
  kValidAgentTypes,
} from '../definitions/system.js';
import {
  UsageRecordCategory,
  UsageRecordFulfillmentStatus,
  kUsageRecordCategory,
  kUsageRecordFulfillmentStatus,
} from '../definitions/usageRecord.js';
import {FimidaraExternalError} from '../utils/OperationError.js';
import {kIdSeparator, kResourceTypeShortNames} from '../utils/resource.js';
import {kEndpointConstants} from './constants.js';
import {
  LongRunningJobResult,
  MultipleLongRunningJobResult,
} from './jobs/types.js';
import {
  BaseEndpointResult,
  CountItemsEndpointResult,
  EndpointResultNote,
  HttpEndpointRequestHeaders_AuthOptional,
  HttpEndpointRequestHeaders_AuthOptional_ContentType,
  HttpEndpointRequestHeaders_AuthRequired,
  HttpEndpointRequestHeaders_AuthRequired_ContentType,
  HttpEndpointRequestHeaders_ContentType,
  HttpEndpointResponseHeaders_ContentType_ContentLength,
  ServerRecommendedActionsMap,
  kEndpointResultNoteCodeMap,
} from './types.js';

export const mfdocEndpointStatusCodes = {
  success: `${kEndpointConstants.httpStatusCode.ok}`,
  error: '4XX or 5XX',
} as const;

const requestHeaderItem_JsonContentType = mfdocConstruct.constructString({
  description: 'HTTP JSON request content type',
  example: 'application/json',
});
const requestHeaderItem_MultipartFormdataContentType =
  mfdocConstruct.constructString({
    description: 'HTTP multipart form-data request content type',
    example: 'multipart/form-data',
    valid: ['multipart/form-data'],
  });
const responseHeaderItem_JsonContentType = mfdocConstruct.constructString({
  description: 'HTTP JSON response content type',
  example: 'application/json',
});
const responseHeaderItem_ContentLength = mfdocConstruct.constructString({
  description: 'HTTP response content length in bytes',
  example: '1024',
});
const responseHeaderItem_ContentDisposition = mfdocConstruct.constructString({
  description: 'HTTP response content disposition',
  example: 'attachment; filename="file.txt"',
});
const requestHeaderItem_Authorization = mfdocConstruct.constructString({
  description: 'Access token',
  example: 'Bearer <token>',
});
const requestHeaderItem_ContentType = mfdocConstruct.constructString({
  description: 'HTTP request content type',
  example: 'application/json or multipart/form-data',
});
const requestHeaderItem_InterServerAuthSecret = mfdocConstruct.constructString({
  description: 'Inter server auth secret',
  example: customAlphabet('0')(),
});

const requestHeaders_AuthRequired_JsonContentType =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_AuthRequired_ContentType>(
    {
      name: 'HttpEndpointRequestHeaders_AuthRequired_JsonContentType',
      fields: {
        Authorization: mfdocConstruct.constructObjectField({
          required: true,
          data: requestHeaderItem_Authorization,
        }),
        'Content-Type': mfdocConstruct.constructObjectField({
          required: true,
          data: requestHeaderItem_JsonContentType,
        }),
      },
    }
  );
const requestHeaders_AuthOptional_JsonContentType =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_AuthOptional_ContentType>(
    {
      name: 'HttpEndpointRequestHeaders_AuthOptional_JsonContentType',
      fields: {
        Authorization: mfdocConstruct.constructObjectField({
          required: false,
          data: requestHeaderItem_Authorization,
        }),
        'Content-Type': mfdocConstruct.constructObjectField({
          required: true,
          data: requestHeaderItem_JsonContentType,
        }),
      },
    }
  );
const requestHeaders_JsonContentType =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_ContentType>({
    name: 'HttpEndpointRequestHeaders_JsonContentType',
    fields: {
      'Content-Type': mfdocConstruct.constructObjectField({
        required: true,
        data: requestHeaderItem_JsonContentType,
      }),
    },
  });
const requestHeaders_AuthRequired_MultipartContentType =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_AuthRequired_ContentType>(
    {
      name: 'HttpEndpointRequestHeaders_AuthRequired_MultipartContentType',
      fields: {
        Authorization: mfdocConstruct.constructObjectField({
          required: true,
          data: requestHeaderItem_Authorization,
        }),
        'Content-Type': mfdocConstruct.constructObjectField({
          required: true,
          data: requestHeaderItem_MultipartFormdataContentType,
        }),
      },
    }
  );
const requestHeaders_AuthOptional_MultipartContentType =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_AuthOptional_ContentType>(
    {
      name: 'HttpEndpointRequestHeaders_AuthOptional_MultipartContentType',
      fields: {
        Authorization: mfdocConstruct.constructObjectField({
          required: false,
          data: requestHeaderItem_Authorization,
        }),
        'Content-Type': mfdocConstruct.constructObjectField({
          required: true,
          data: requestHeaderItem_MultipartFormdataContentType,
        }),
      },
    }
  );
const requestHeaders_MultipartContentType =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_ContentType>({
    name: 'HttpEndpointRequestHeaders_MultipartContentType',
    fields: {
      'Content-Type': mfdocConstruct.constructObjectField({
        required: true,
        data: requestHeaderItem_MultipartFormdataContentType,
      }),
    },
  });
const requestHeaders_AuthRequired =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_AuthRequired>({
    name: 'HttpEndpointRequestHeaders_AuthRequired',
    fields: {
      Authorization: mfdocConstruct.constructObjectField({
        required: true,
        data: requestHeaderItem_Authorization,
      }),
    },
  });
const requestHeaders_AuthOptional =
  mfdocConstruct.constructObject<HttpEndpointRequestHeaders_AuthOptional>({
    name: 'HttpEndpointRequestHeaders_AuthOptional',
    fields: {
      Authorization: mfdocConstruct.constructObjectField({
        required: false,
        data: requestHeaderItem_Authorization,
      }),
    },
  });
const responseHeaders_JsonContentType =
  mfdocConstruct.constructObject<HttpEndpointResponseHeaders_ContentType_ContentLength>(
    {
      name: 'HttpEndpointResponseHeaders_ContentType_ContentLength',
      fields: {
        'Content-Type': mfdocConstruct.constructObjectField({
          required: true,
          data: responseHeaderItem_JsonContentType,
        }),
        'Content-Length': mfdocConstruct.constructObjectField({
          required: true,
          data: responseHeaderItem_ContentLength,
        }),
      },
    }
  );

export const mfdocEndpointHttpHeaderItems = {
  requestHeaderItem_Authorization,
  requestHeaderItem_ContentType,
  responseHeaderItem_JsonContentType,
  requestHeaderItem_JsonContentType,
  requestHeaderItem_MultipartFormdataContentType,
  requestHeaders_AuthRequired_JsonContentType,
  requestHeaders_AuthRequired,
  requestHeaders_JsonContentType,
  requestHeaders_AuthOptional,
  requestHeaders_MultipartContentType,
  requestHeaders_AuthOptional_MultipartContentType,
  requestHeaders_AuthRequired_MultipartContentType,
  requestHeaders_AuthOptional_JsonContentType,
  responseHeaderItem_ContentLength,
  responseHeaders_JsonContentType,
  responseHeaderItem_ContentDisposition,
  requestHeaderItem_InterServerAuthSecret,
};

const nullValue = mfdocConstruct.constructNull({
  description: 'Null value, indicating the field is not set or not applicable',
});
const agent = mfdocConstruct.constructObject<PublicAgent>({
  name: 'Agent',
  description:
    'Represents a user or system entity that performed an action (e.g., created or updated a resource)',
  fields: {
    agentId: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructString({
        description: 'Agent ID. Possible agents are users and agent tokens',
        example: `${
          kResourceTypeShortNames.user
        }${kIdSeparator}${customAlphabet('0')()}`,
      }),
    }),
    agentType: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructString({
        description: 'Agent type',
        example: kFimidaraPublicResourceType.AgentToken,
        valid: kValidAgentTypes,
        enumName: 'AgentType',
      }),
    }),
  },
});
const date = mfdocConstruct.constructNumber({
  description: 'UTC timestamp in milliseconds',
  example: 1672531200000, // Jan 1, 2023 00:00:00 UTC
});
const dateOrNull = mfdocConstruct.constructOrCombination({
  description: 'UTC timestamp in milliseconds, or null if not set',
  types: [date, nullValue],
});
const id = mfdocConstruct.constructString({
  description: 'Resource ID',
  example: `${kResourceTypeShortNames.workspace}${kIdSeparator}${customAlphabet(
    '0'
  )()}`,
});
const idList = mfdocConstruct.constructArray<string>({
  description: 'List of resource IDs',
  type: id,
});
const idOrList = mfdocConstruct.constructOrCombination({
  description: 'A single resource ID or an array of resource IDs',
  types: [id, idList],
});
const jobId = mfdocConstruct.constructString({
  description: 'Long-running job ID',
  example: `${kResourceTypeShortNames.job}${kIdSeparator}${customAlphabet(
    '0'
  )()}`,
});
const jobIds = mfdocConstruct.constructArray<string>({
  description: 'Multiple long running job IDs',
  type: jobId,
});
const workspaceId = mfdocConstruct.constructString({
  description: 'Workspace ID',
  example: `${kResourceTypeShortNames.workspace}${kIdSeparator}${customAlphabet(
    '0'
  )()}`,
});
const workspaceIdInput = mfdocConstruct.constructString({
  description: 'Workspace ID',
  example: `${kResourceTypeShortNames.workspace}${kIdSeparator}${customAlphabet(
    '0'
  )()}`,
});

const folderId = mfdocConstruct.constructString({
  description: 'Folder ID',
  example: `${kResourceTypeShortNames.folder}${kIdSeparator}${customAlphabet(
    '0'
  )()}`,
});
const folderIdOrNull = mfdocConstruct.constructOrCombination({
  description:
    'Folder ID or null if resource is not in a folder (e.g., at workspace root)',
  types: [folderId, mfdocConstruct.constructNull({})],
});
const fileId = mfdocConstruct.constructString({
  description: 'File ID',
  example: `${kResourceTypeShortNames.file}${kIdSeparator}${customAlphabet(
    '0'
  )()}`,
});
const permissionGroupId = mfdocConstruct.constructString({
  description: 'Permission group ID',
  example: `${
    kResourceTypeShortNames[kFimidaraPublicResourceType.PermissionGroup]
  }${kIdSeparator}${customAlphabet('0')()}`,
});
const permissionItemId = mfdocConstruct.constructString({
  description: 'Permission item ID',
  example: `${
    kResourceTypeShortNames[kFimidaraPublicResourceType.PermissionItem]
  }${kIdSeparator}${customAlphabet('0')()}`,
});
const idPath = mfdocConstruct.constructArray<string>({
  type: folderId,
  description: 'List of parent folder IDs',
});
const name = mfdocConstruct.constructString({
  description: 'Resource name',
  example: 'My resource name',
});
const nameList = mfdocConstruct.constructArray<string>({
  description: 'List of resource names',
  type: name,
});
const description = mfdocConstruct.constructString({
  description: 'Resource description',
  example: 'This is a resource description.',
});
const descriptionOrNull = mfdocConstruct.constructOrCombination({
  description: 'Resource description, or null',
  types: [description, nullValue],
});
const expires = mfdocConstruct.constructNumber({
  description: 'Expiration date as UTC timestamp in milliseconds',
  example: 1704067200000, // Jan 1, 2024 00:00:00 UTC
});
const jwtTokenExpiresAt = mfdocConstruct.constructNumber({
  description:
    'JWT token expiration date. Not the expiration date of the token itself.',
});
const duration = mfdocConstruct.constructNumber({
  description: 'Time duration in milliseconds, for example, 1000 for 1 second',
  example: 86400000, // 24 hours in milliseconds
});
const tokenString = mfdocConstruct.constructString({
  description: 'JWT token string used for authentication',
  example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
});
const refreshTokenString = mfdocConstruct.constructString({
  description: 'JWT refresh token string used to obtain new access tokens',
  example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
});
const effectOnReferenced = mfdocConstruct.constructBoolean({
  description:
    'Whether to perform action on the token used to authorize the API call ' +
    'when performing actions on tokens and a token ID or provided resource ID is not provided. ' +
    'Defaults to true if a call is made and a token ID is not provided',
  example: false,
});
const providedResourceId = mfdocConstruct.constructString({
  description:
    'Resource ID provided by you, allowing you to use your own identifier instead of system-generated ones',
  example: 'my-custom-resource-id',
  max: kEndpointConstants.providedResourceIdMaxLength,
});
const providedResourceIdOrNull = mfdocConstruct.constructOrCombination({
  description:
    'Custom resource ID provided by you, or null if using system-generated ID',
  types: [providedResourceId, nullValue],
});
const workspaceName = mfdocConstruct.constructString({
  description: 'Workspace name, case insensitive',
  example: 'fimidara',
});

// TODO: set allowed characters for rootname and file and folder name
const workspaceRootname = mfdocConstruct.constructString({
  description:
    'Workspace root name, must be a URL compatible name, case insensitive',
  example: 'fimidara-rootname',
});
const firstName = mfdocConstruct.constructString({
  description: 'First name',
  example: 'Jesus',
});
const lastName = mfdocConstruct.constructString({
  description: 'Last name',
  example: 'Christ',
});
const password = mfdocConstruct.constructString({
  description: 'Password for authentication',
  example: 'mySecurePassword123!',
});
const emailAddress = mfdocConstruct.constructString({
  description: 'Email address, case insensitive',
  example: 'my-email-address@email-domain.com',
});
const foldername = mfdocConstruct.constructString({
  description: 'Folder name, case insensitive',
  example: 'my-folder',
});
const filename = mfdocConstruct.constructString({
  description: 'File name, case insensitive',
  example: 'my-file',
});
const folderpath = mfdocConstruct.constructString({
  description:
    'Folder path, with each folder name separated by a forward slash. The first item must be the workspace rootname. e.g /workspace-rootname/my-folder/my-sub-folder.',
  example: '/workspace-rootname/my-folder/my-sub-folder',
});
const folderpathList = mfdocConstruct.constructArray<string>({
  description:
    'Folder path as a list of folder names. Must include the workspace rootname. e.g ["workspace-rootname", "my-folder", "my-sub-folder"].',
  type: mfdocConstruct.constructString({}),
  example: ['workspace-rootname', 'my-folder', 'my-sub-folder'],
});
const namepathList = mfdocConstruct.constructArray<string>({
  description:
    'Folder path as a list of folder names. It should not include the workspace rootname. e.g ["my-folder", "my-sub-folder"].',
  type: mfdocConstruct.constructString({}),
  example: ['my-folder', 'my-sub-folder'],
});
const folderpathOrList = mfdocConstruct.constructOrCombination({
  description: 'A single folder path or an array of folder paths',
  types: [folderpath, folderpathList],
});
const filepath = mfdocConstruct.constructString({
  description:
    'File path, with each folder name separated by a forward slash. The first item must be the workspace rootname, and must include the file extension. e.g /workspace-rootname/my-folder/my-file.txt.',
  example: '/workspace-rootname/my-folder/my-file.txt',
});
const filepathOrId = mfdocConstruct.constructString({
  description:
    'File path with workspace rootname (case insensitive) or file ID for flexible file identification',
  example: '/workspace-rootname/folder/file.ext',
});
const filepathList = mfdocConstruct.constructArray<string>({
  description:
    'File path as a list of folder and file names. e.g ["my-folder", "my-file.txt"].',
  type: mfdocConstruct.constructString({}),
  example: ['my-folder', 'my-file.txt'],
});
const filepathOrList = mfdocConstruct.constructOrCombination({
  description: 'A single file path or an array of file paths',
  types: [filepath, filepathList],
});
const action = mfdocConstruct.constructString({
  description: 'Permission action',
  example: kFimidaraPermissionActions.uploadFile,
  valid: Object.values(kFimidaraPermissionActions),
  enumName: 'FimidaraPermissionAction',
});
const actionList = mfdocConstruct.constructArray<FimidaraPermissionAction>({
  description: 'List of permission actions',
  type: action,
  example: [kFimidaraPermissionActions.addFolder],
});
const actionOrList = mfdocConstruct.constructOrCombination({
  description: 'A single permission action or an array of permission actions',
  types: [action, actionList],
});
const resourceType = mfdocConstruct.constructString({
  description: 'Resource type',
  example: kFimidaraPublicResourceType.File,
  valid: Object.values(kFimidaraPublicResourceType),
  enumName: 'FimidaraResourceType',
});
const usageCategory = mfdocConstruct.constructString({
  description: 'Usage record category',
  example: kUsageRecordCategory.storage,
  valid: Object.values(kUsageRecordCategory),
  enumName: 'UsageRecordCategory',
});
const usageCategoryList = mfdocConstruct.constructArray<UsageRecordCategory>({
  type: usageCategory,
});
const usageCategoryOrList = mfdocConstruct.constructOrCombination({
  description: 'A single usage category or an array of usage categories',
  types: [usageCategory, usageCategoryList],
});
const usageFulfillmentStatus = mfdocConstruct.constructString({
  description: 'Usage record fulfillment status',
  example: kUsageRecordFulfillmentStatus.fulfilled,
  valid: Object.values(kUsageRecordFulfillmentStatus),
  enumName: 'UsageRecordFulfillmentStatus',
});
const usageFulfillmentStatusList =
  mfdocConstruct.constructArray<UsageRecordFulfillmentStatus>({
    type: usageFulfillmentStatus,
  });
const usageFulfillmentStatusOrList = mfdocConstruct.constructOrCombination({
  description:
    'A single usage fulfillment status or an array of usage fulfillment statuses',
  types: [usageFulfillmentStatus, usageFulfillmentStatusList],
});
const page = mfdocConstruct.constructNumber({
  description: 'Page number, starting from 0',
  example: 0,
  min: kEndpointConstants.minPage,
});
const pageSize = mfdocConstruct.constructNumber({
  description: 'Page size, with a default of 50 and a max of 100',
  example: 50,
  min: kEndpointConstants.minPageSize,
  max: kEndpointConstants.maxPageSize,
});
const resultNoteCode = mfdocConstruct.constructString({
  description: 'Endpoint result or error note code',
  example: kEndpointResultNoteCodeMap.unsupportedOperationInMountBackend,
  valid: Object.values(kEndpointResultNoteCodeMap),
  enumName: 'EndpointResultNoteCode',
});
const resultNoteMessage = mfdocConstruct.constructString({
  description: 'Endpoint result or error note message',
  example:
    "Some mounts in the requested folder's mount chain do not support operation abc",
});
const resultNote = mfdocConstruct.constructObject<EndpointResultNote>({
  name: 'EndpointResultNote',
  fields: {
    code: mfdocConstruct.constructObjectField({
      required: true,
      data: resultNoteCode,
    }),
    message: mfdocConstruct.constructObjectField({
      required: true,
      data: resultNoteMessage,
    }),
  },
});
const resultNoteList = mfdocConstruct.constructArray<EndpointResultNote>({
  type: resultNote,
});
const publicResourceParts: MfdocFieldObjectFieldsMap<PublicResource> = {
  resourceId: mfdocConstruct.constructObjectField({
    required: true,
    data: id,
  }),
  createdBy: mfdocConstruct.constructObjectField({
    required: false,
    data: agent,
  }),
  createdAt: mfdocConstruct.constructObjectField({
    required: true,
    data: date,
  }),
  lastUpdatedBy: mfdocConstruct.constructObjectField({
    required: false,
    data: agent,
  }),
  lastUpdatedAt: mfdocConstruct.constructObjectField({
    required: true,
    data: date,
  }),
  isDeleted: mfdocConstruct.constructObjectField({
    required: true,
    data: mfdocConstruct.constructBoolean({}),
  }),
  deletedAt: mfdocConstruct.constructObjectField({
    required: false,
    data: date,
  }),
  deletedBy: mfdocConstruct.constructObjectField({
    required: false,
    data: agent,
  }),
};
const workspaceResourceParts: MfdocFieldObjectFieldsMap<PublicWorkspaceResource> =
  {
    ...publicResourceParts,
    workspaceId: mfdocConstruct.constructObjectField({
      required: true,
      data: workspaceId,
    }),
    createdBy: mfdocConstruct.constructObjectField({
      required: true,
      data: agent,
    }),
    lastUpdatedBy: mfdocConstruct.constructObjectField({
      required: true,
      data: agent,
    }),
  };
const usage = mfdocConstruct.constructNumber({
  description: `Usage amount. Bytes for ${kUsageRecordCategory.storage}, ${kUsageRecordCategory.bandwidthIn}, and ${kUsageRecordCategory.bandwidthOut}. Always 0 for ${kUsageRecordCategory.total}, use \`usageCost\` instead`,
  example: 1024000, // 1MB in bytes
});

const makeResourceId = (type: FimidaraResourceType) => {
  return `${kResourceTypeShortNames[type]}${kIdSeparator}${customAlphabet(
    '0'
  )()}`;
};
const makeResourceIdFieldString = (
  type: FimidaraResourceType,
  description: string = `${type} ID`
) => {
  return mfdocConstruct.constructString({
    description,
    example: `${kResourceTypeShortNames[type]}${kIdSeparator}${customAlphabet(
      '0'
    )()}`,
  });
};

export const fReusables = {
  usage,
  agent,
  date,
  id,
  idList,
  name,
  description,
  expires,
  duration,
  workspaceId,
  tokenString,
  refreshTokenString,
  effectOnReferenced,
  providedResourceId,
  workspaceName,
  idOrList,
  workspaceRootname,
  firstName,
  lastName,
  emailAddress,
  folderId,
  idPath,
  foldername,
  filename,
  folderpath,
  filepath,
  fileId,
  filepathOrId,
  action,
  actionList,
  resourceType,
  permissionGroupId,
  permissionItemId,
  page,
  pageSize,
  workspaceIdInput,
  jobId,
  usageCategory,
  usageFulfillmentStatus,
  password,
  folderIdOrNull,
  filepathList,
  folderpathList,
  usageCategoryList,
  providedResourceIdOrNull,
  filepathOrList,
  folderpathOrList,
  actionOrList,
  usageCategoryOrList,
  usageFulfillmentStatusList,
  usageFulfillmentStatusOrList,
  dateOrNull,
  nullValue,
  resultNote,
  resultNoteCode,
  resultNoteList,
  resourceParts: publicResourceParts,
  workspaceResourceParts,
  jobIds,
  jwtTokenExpiresAt,
  namepathList,
  makeResourceId,
  makeResourceIdFieldString,
};

const errorObject = mfdocConstruct.constructObject<FimidaraExternalError>({
  name: 'OperationError',
  description:
    'Error object containing details about what went wrong during API call execution',
  fields: {
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructString({
        description: 'Error name',
        example: 'ValidationError',
      }),
    }),
    message: mfdocConstruct.constructObjectField({
      required: true,
      data: mfdocConstruct.constructString({
        description: 'Error message',
        example: 'Workspace name is invalid',
      }),
    }),
    action: mfdocConstruct.constructObjectField({
      required: false,
      data: mfdocConstruct.constructString({
        description: 'Recommended action to resolve the error',
        example: 'loginAgain',
        valid: Object.values(ServerRecommendedActionsMap),
      }),
    }),
    field: mfdocConstruct.constructObjectField({
      required: false,
      data: mfdocConstruct.constructString({
        example: 'workspace.innerField.secondInnerField',
        description:
          'Invalid field failing validation when error is ValidationError',
      }),
    }),
    notes: mfdocConstruct.constructObjectField({
      required: false,
      data: resultNoteList,
    }),
  },
});

const errorResponseBody = mfdocConstruct.constructObject<BaseEndpointResult>({
  name: 'EndpointErrorResult',
  description: 'Standard error response returned when API calls fail',
  fields: {
    errors: mfdocConstruct.constructObjectField({
      required: false,
      data: mfdocConstruct.constructArray<FimidaraExternalError>({
        type: errorObject,
        description: 'List of errors that occurred during the API call',
      }),
    }),
  },
});

const emptySuccessResponseBody = mfdocConstruct.constructObject<AnyObject>({
  name: 'EmptyEndpointResult',
  description:
    'Empty success response for operations that complete without returning data',
  fields: {},
});

const longRunningJobResponseBody =
  mfdocConstruct.constructObject<LongRunningJobResult>({
    name: 'LongRunningJobResult',
    description:
      'Response for operations that run asynchronously in the background',
    fields: {
      jobId: mfdocConstruct.constructObjectField({
        required: false,
        data: jobId,
      }),
    },
  });

const multipleLongRunningJobResponseBody =
  mfdocConstruct.constructObject<MultipleLongRunningJobResult>({
    name: 'MultipleLongRunningJobResult',
    description: 'Response for operations that spawn multiple background jobs',
    fields: {
      jobIds: mfdocConstruct.constructObjectField({
        required: true,
        data: jobIds,
      }),
    },
  });

const countResponseBody =
  mfdocConstruct.constructObject<CountItemsEndpointResult>({
    name: 'CountItemsResult',
    description:
      'Response containing the count of resources matching the query criteria',
    fields: {
      count: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructNumber({
          description: 'Total number of resources matching the query',
          example: 42,
        }),
      }),
    },
  });

export const mfdocEndpointHttpResponseItems = {
  errorResponseBody,
  emptySuccessResponseBody,
  longRunningJobResponseBody,
  countResponseBody,
  multipleLongRunningJobResponseBody,
};
