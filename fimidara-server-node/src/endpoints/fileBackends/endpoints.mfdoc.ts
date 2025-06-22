import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {customAlphabet} from 'nanoid';
import {
  kFileBackendType,
  PublicFileBackendConfig,
  PublicFileBackendMount,
} from '../../definitions/fileBackend.js';
import {multilineTextToParagraph} from '../../utils/fns.js';
import {kResourceTypeShortNames} from '../../utils/resource.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {
  AddFileBackendConfigEndpointParams,
  AddFileBackendConfigEndpointResult,
} from './addConfig/types.js';
import {
  AddFileBackendMountEndpointParams,
  AddFileBackendMountEndpointResult,
} from './addMount/types.js';
import {kFileBackendConstants} from './constants.js';
import {CountFileBackendConfigsEndpointParams} from './countConfigs/types.js';
import {CountFileBackendMountsEndpointParams} from './countMounts/types.js';
import {DeleteFileBackendConfigEndpointParams} from './deleteConfig/types.js';
import {DeleteFileBackendMountEndpointParams} from './deleteMount/types.js';
import {
  GetFileBackendConfigEndpointParams,
  GetFileBackendConfigEndpointResult,
} from './getConfig/types.js';
import {
  GetFileBackendConfigsEndpointParams,
  GetFileBackendConfigsEndpointResult,
} from './getConfigs/types.js';
import {
  GetFileBackendMountEndpointParams,
  GetFileBackendMountEndpointResult,
} from './getMount/types.js';
import {
  GetFileBackendMountsEndpointParams,
  GetFileBackendMountsEndpointResult,
} from './getMounts/types.js';
import {
  ResolveFileBackendMountsEndpointParams,
  ResolveFileBackendMountsEndpointResult,
} from './resolveMounts/types.js';
import {
  AddFileBackendConfigHttpEndpoint,
  AddFileBackendMountHttpEndpoint,
  CountFileBackendConfigsHttpEndpoint,
  CountFileBackendMountsHttpEndpoint,
  DeleteFileBackendConfigHttpEndpoint,
  DeleteFileBackendMountHttpEndpoint,
  GetFileBackendConfigHttpEndpoint,
  GetFileBackendConfigsHttpEndpoint,
  GetFileBackendMountHttpEndpoint,
  GetFileBackendMountsHttpEndpoint,
  ResolveFileBackendMountsHttpEndpoint,
  UpdateFileBackendConfigHttpEndpoint,
  UpdateFileBackendMountHttpEndpoint,
} from './types.js';
import {
  UpdateFileBackendConfigEndpointParams,
  UpdateFileBackendConfigEndpointResult,
  UpdateFileBackendConfigInput,
} from './updateConfig/types.js';
import {
  UpdateFileBackendMountEndpointParams,
  UpdateFileBackendMountEndpointResult,
  UpdateFileBackendMountInput,
} from './updateMount/types.js';

const backend = mfdocConstruct.constructString({
  description:
    'File backend type - determines which storage provider to use (AWS S3, Google Cloud Storage, etc.)',
  example: kFileBackendType.fimidara,
  valid: Object.values(kFileBackendType),
  enumName: 'FileBackendType',
});

const configId = mfdocConstruct.constructString({
  description:
    'Unique identifier for a file backend configuration. Used to reference stored credentials and settings for a specific backend provider.',
  example: `${kResourceTypeShortNames.fileBackendConfig}_${customAlphabet(
    '0'
  )()}`,
});
const configIdOrNull = mfdocConstruct.constructOrCombination({
  description:
    'Backend config ID to use for this mount, or null to use the default fimidara backend with no external storage',
  types: [configId, fReusables.nullValue],
});

const index = mfdocConstruct.constructNumber({
  description:
    'File backend mount priority/weight when multiple mounts are attached to the same folder. ' +
    'Higher values have higher priority and will be preferred for new files. Used for load balancing and failover.',
  example: 10,
});

const mountedFrom = mfdocConstruct.constructString({
  description: multilineTextToParagraph(`
    Storage location path within the backend provider. Format varies by provider:
    - AWS S3: bucket name or bucket/prefix (e.g., 'my-bucket' or 'my-bucket/folder01')
    - Local filesystem: directory path (e.g., '/storage/files')
    This defines where files will actually be stored in the backend.
  `),
  example: 'my-bucket/documents',
});

const mountedFromAsList = mfdocConstruct.constructArray<string>({
  type: mfdocConstruct.constructString({}),
  description: multilineTextToParagraph(`
    Storage location path as an array of path segments. Format varies by provider:
    - AWS S3: ["bucket-name"] or ["bucket-name", "folder01", "subfolder"] 
    - Local filesystem: ["storage", "files", "subfolder"]
    Each element represents a path segment in the backend storage hierarchy.
  `),
  example: ['my-bucket', 'documents', 'uploads'],
});

const credentials = mfdocConstruct.constructObject<Record<string, unknown>>({
  name: 'FileBackendConfigCredentials',
  fields: {},
  description: multilineTextToParagraph(`
    Authentication credentials and configuration for the backend provider. 
    Structure varies by backend type:
    - AWS S3: accessKeyId, secretAccessKey, region, etc.
    - Google Cloud: service account key JSON
    - Azure: connection string or account keys
    Store sensitive values as environment variable references.
  `),
  example: {
    accessKeyId: 'AKIA...',
    secretAccessKey: 'NPox...',
    region: 'us-east-1',
  },
});

const updateFileBackendMountInput =
  mfdocConstruct.constructObject<UpdateFileBackendMountInput>({
    name: 'UpdateFileBackendMountInput',
    description:
      'Input fields for updating an existing file backend mount. All fields are optional - only provide fields you want to change.',
    fields: {
      name: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.name,
        description: 'New display name for the mount',
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
        description: 'New description explaining the purpose of this mount',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: false,
        data: configId,
        description: 'New backend config ID to use for this mount',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
        description: 'New folder path where this mount should be attached',
      }),
      index: mfdocConstruct.constructObjectField({
        required: false,
        data: index,
        description: 'New priority index for this mount',
      }),
      mountedFrom: mfdocConstruct.constructObjectField({
        required: false,
        data: mountedFrom,
        description: 'New storage location path in the backend provider',
      }),
    },
  });

const fileBackendMount = mfdocConstruct.constructObject<PublicFileBackendMount>(
  {
    name: 'FileBackendMount',
    description:
      'A file backend mount connects a folder in your workspace to external storage, allowing files to be stored in AWS S3, Google Cloud, etc.',
    fields: {
      ...fReusables.workspaceResourceParts,
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.name,
        description: 'Display name for this mount',
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
        description:
          'Optional description explaining the purpose of this mount',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: true,
        data: backend,
        description: 'The storage backend type (AWS S3, Google Cloud, etc.)',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: true,
        data: configIdOrNull,
        description:
          'Backend config ID containing credentials, or null for default storage',
      }),
      namepath: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.namepathList,
        description:
          'Array of folder names representing the path where this mount is attached',
      }),
      index: mfdocConstruct.constructObjectField({
        required: true,
        data: index,
        description:
          'Priority index when multiple mounts exist on the same folder',
      }),
      mountedFrom: mfdocConstruct.constructObjectField({
        required: true,
        data: mountedFromAsList,
        description:
          'Path segments indicating where files are stored in the backend',
      }),
    },
  }
);

const fileBackendMountList =
  mfdocConstruct.constructArray<PublicFileBackendMount>({
    type: fileBackendMount,
    description: 'List of file backend mounts in the workspace',
  });

const updateFileBackendConfigInput =
  mfdocConstruct.constructObject<UpdateFileBackendConfigInput>({
    name: 'UpdateFileBackendConfigInput',
    description:
      'Input fields for updating an existing file backend config. All fields are optional - only provide fields you want to change.',
    fields: {
      name: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.name,
        description: 'New display name for the config',
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
        description: 'New description for the config',
      }),
      credentials: mfdocConstruct.constructObjectField({
        required: false,
        data: credentials,
        description: 'New credentials and settings for the backend provider',
      }),
    },
  });

const fileBackendConfig =
  mfdocConstruct.constructObject<PublicFileBackendConfig>({
    name: 'FileBackendConfig',
    description:
      'A file backend config stores credentials and settings for connecting to external storage providers like AWS S3, Google Cloud Storage, etc.',
    fields: {
      ...fReusables.workspaceResourceParts,
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.name,
        description: 'Display name for this backend config',
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
        description:
          'Optional description explaining what this config is used for',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: true,
        data: backend,
        description: 'The storage backend type this config is for',
      }),
    },
  });

const fileBackendConfigList =
  mfdocConstruct.constructArray<PublicFileBackendConfig>({
    type: fileBackendConfig,
    description: 'List of file backend configs in the workspace',
  });

const addFileBackendMountParams =
  mfdocConstruct.constructObject<AddFileBackendMountEndpointParams>({
    name: 'AddFileBackendMountEndpointParams',
    description:
      'Parameters for creating a new file backend mount to connect a folder to external storage',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceId,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.name,
        description: 'Display name for the new mount',
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
        description:
          'Optional description explaining the purpose of this mount',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: true,
        data: backend,
        description: 'Storage backend type to use (AWS S3, Google Cloud, etc.)',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.folderpath,
        description:
          'Folder path where this mount should be attached (e.g., "/documents")',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: true,
        data: configIdOrNull,
        description:
          'Backend config ID to use, or null for default fimidara storage',
      }),
      index: mfdocConstruct.constructObjectField({
        required: true,
        data: index,
        description: 'Priority index (higher numbers = higher priority)',
      }),
      mountedFrom: mfdocConstruct.constructObjectField({
        required: true,
        data: mountedFrom,
        description:
          'Storage location in the backend (e.g., S3 bucket name or path)',
      }),
    },
  });

const addFileBackendMountSuccessResponseBody =
  mfdocConstruct.constructObject<AddFileBackendMountEndpointResult>({
    name: 'AddFileBackendMountEndpointResult',
    description: 'Response when successfully creating a new file backend mount',
    fields: {
      mount: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendMount,
        description: 'The newly created file backend mount',
      }),
    },
  });

const getFileBackendMountsParams =
  mfdocConstruct.constructObject<GetFileBackendMountsEndpointParams>({
    name: 'GetFileBackendMountsEndpointParams',
    description:
      'Parameters for retrieving a list of file backend mounts with optional filtering',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID to filter mounts (optional if using workspace from auth context)',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: false,
        data: backend,
        description: 'Filter mounts by backend type (optional)',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
        description: 'Filter mounts by folder path (optional)',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.id,
        description: 'Filter mounts by backend config ID (optional)',
      }),
      page: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.page,
        description: 'Page number for pagination (optional, defaults to 0)',
      }),
      pageSize: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.pageSize,
        description:
          'Number of items per page (optional, defaults to system limit)',
      }),
    },
  });

const getFileBackendMountsSuccessResponseBody =
  mfdocConstruct.constructObject<GetFileBackendMountsEndpointResult>({
    name: 'GetFileBackendMountsEndpointResult',
    description: 'Response containing a paginated list of file backend mounts',
    fields: {
      mounts: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendMountList,
        description: 'Array of file backend mounts matching the query criteria',
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
        description: 'Current page number in the paginated results',
      }),
    },
  });

const countFileBackendMountsParams =
  mfdocConstruct.constructObject<CountFileBackendMountsEndpointParams>({
    name: 'CountFileBackendMountsEndpointParams',
    description:
      'Parameters for counting file backend mounts with optional filtering',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID to filter mounts (optional if using workspace from auth context)',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: false,
        data: backend,
        description: 'Filter mounts by backend type (optional)',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
        description: 'Filter mounts by folder path (optional)',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.id,
        description: 'Filter mounts by backend config ID (optional)',
      }),
    },
  });

const updateFileBackendMountParams =
  mfdocConstruct.constructObject<UpdateFileBackendMountEndpointParams>({
    name: 'UpdateFileBackendMountEndpointParams',
    description: 'Parameters for updating an existing file backend mount',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      mountId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
        description: 'ID of the mount to update',
      }),
      mount: mfdocConstruct.constructObjectField({
        required: true,
        data: updateFileBackendMountInput,
        description: 'Mount update data containing only the fields to change',
      }),
    },
  });

const updateFileBackendMountSuccessResponseBody =
  mfdocConstruct.constructObject<UpdateFileBackendMountEndpointResult>({
    name: 'UpdateFileBackendMountEndpointResult',
    description: 'Response when successfully updating a file backend mount',
    fields: {
      mount: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendMount,
        description: 'The updated file backend mount',
      }),
      jobId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.jobId,
        description:
          'Background job ID if the update triggered file migration (optional)',
      }),
    },
  });

const getFileBackendMountParams =
  mfdocConstruct.constructObject<GetFileBackendMountEndpointParams>({
    name: 'GetFileBackendMountEndpointParams',
    description:
      'Parameters for retrieving a specific file backend mount by ID',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      mountId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
        description: 'ID of the mount to retrieve',
      }),
    },
  });

const getFileBackendMountSuccessBody =
  mfdocConstruct.constructObject<GetFileBackendMountEndpointResult>({
    name: 'GetFileBackendMountEndpointResult',
    description: 'Response containing the requested file backend mount',
    fields: {
      mount: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendMount,
        description: 'The requested file backend mount',
      }),
    },
  });

const deleteFileBackendMountParams =
  mfdocConstruct.constructObject<DeleteFileBackendMountEndpointParams>({
    name: 'DeleteFileBackendMountEndpointParams',
    description: 'Parameters for deleting a file backend mount',
    fields: {
      mountId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
        description: 'ID of the mount to delete',
      }),
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
    },
  });

const resolveFileBackendMountsParams =
  mfdocConstruct.constructObject<ResolveFileBackendMountsEndpointParams>({
    name: 'ResolveFileBackendMountsEndpointParams',
    description:
      'Parameters for resolving which file backend mounts apply to a specific file or folder. Provide either file or folder identifiers.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      folderId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderId,
        description:
          'Folder ID to resolve mounts for (alternative to folderpath)',
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
        description:
          'Folder path to resolve mounts for (alternative to folderId)',
      }),
      fileId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.fileId,
        description: 'File ID to resolve mounts for (alternative to filepath)',
      }),
      filepath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.filepath,
        description: 'File path to resolve mounts for (alternative to fileId)',
      }),
    },
  });

const resolveFileBackendMountsSuccessResponseBody =
  mfdocConstruct.constructObject<ResolveFileBackendMountsEndpointResult>({
    name: 'ResolveFileBackendMountsEndpointResult',
    description:
      'Response containing the file backend mounts that apply to the specified file or folder',
    fields: {
      mounts: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendMountList,
        description:
          'Array of file backend mounts that apply to the specified location, ordered by priority',
      }),
    },
  });

const addFileBackendConfigParams =
  mfdocConstruct.constructObject<AddFileBackendConfigEndpointParams>({
    name: 'AddFileBackendConfigEndpointParams',
    description:
      'Parameters for creating a new file backend config to store credentials and settings for external storage providers',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceId,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      name: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.name,
        description: 'Display name for the new backend config',
      }),
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
        description:
          'Optional description explaining what this config is used for',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: true,
        data: backend,
        description: 'Storage backend type (AWS S3, Google Cloud, etc.)',
      }),
      credentials: mfdocConstruct.constructObjectField({
        required: true,
        data: credentials,
        description:
          'Authentication credentials and configuration for the backend provider',
      }),
    },
  });

const addFileBackendConfigSuccessResponseBody =
  mfdocConstruct.constructObject<AddFileBackendConfigEndpointResult>({
    name: 'AddFileBackendConfigEndpointResult',
    description:
      'Response when successfully creating a new file backend config',
    fields: {
      config: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendConfig,
        description: 'The newly created file backend config',
      }),
    },
  });

const getFileBackendConfigsParams =
  mfdocConstruct.constructObject<GetFileBackendConfigsEndpointParams>({
    name: 'GetFileBackendConfigsEndpointParams',
    description:
      'Parameters for retrieving a list of file backend configs with optional filtering',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID to filter configs (optional if using workspace from auth context)',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: false,
        data: backend,
        description: 'Filter configs by backend type (optional)',
      }),
      page: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.page,
        description: 'Page number for pagination (optional, defaults to 0)',
      }),
      pageSize: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.pageSize,
        description:
          'Number of items per page (optional, defaults to system limit)',
      }),
    },
  });

const getFileBackendConfigsSuccessResponseBody =
  mfdocConstruct.constructObject<GetFileBackendConfigsEndpointResult>({
    name: 'GetFileBackendConfigsEndpointResult',
    description: 'Response containing a paginated list of file backend configs',
    fields: {
      configs: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendConfigList,
        description:
          'Array of file backend configs matching the query criteria',
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
        description: 'Current page number in the paginated results',
      }),
    },
  });

const countFileBackendConfigsParams =
  mfdocConstruct.constructObject<CountFileBackendConfigsEndpointParams>({
    name: 'CountFileBackendConfigsEndpointParams',
    description:
      'Parameters for counting file backend configs with optional filtering',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID to filter configs (optional if using workspace from auth context)',
      }),
      backend: mfdocConstruct.constructObjectField({
        required: false,
        data: backend,
        description: 'Filter configs by backend type (optional)',
      }),
    },
  });

const updateFileBackendConfigParams =
  mfdocConstruct.constructObject<UpdateFileBackendConfigEndpointParams>({
    name: 'UpdateFileBackendConfigEndpointParams',
    description: 'Parameters for updating an existing file backend config',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
        description: 'ID of the config to update',
      }),
      config: mfdocConstruct.constructObjectField({
        required: true,
        data: updateFileBackendConfigInput,
        description: 'Config update data containing only the fields to change',
      }),
    },
  });

const updateFileBackendConfigSuccessResponseBody =
  mfdocConstruct.constructObject<UpdateFileBackendConfigEndpointResult>({
    name: 'UpdateFileBackendConfigEndpointResult',
    description: 'Response when successfully updating a file backend config',
    fields: {
      config: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendConfig,
        description: 'The updated file backend config',
      }),
    },
  });

const getFileBackendConfigParams =
  mfdocConstruct.constructObject<GetFileBackendConfigEndpointParams>({
    name: 'GetFileBackendConfigEndpointParams',
    description:
      'Parameters for retrieving a specific file backend config by ID',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
      configId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
        description: 'ID of the config to retrieve',
      }),
    },
  });

const getFileBackendConfigSuccessBody =
  mfdocConstruct.constructObject<GetFileBackendConfigEndpointResult>({
    name: 'GetFileBackendConfigEndpointResult',
    description: 'Response containing the requested file backend config',
    fields: {
      config: mfdocConstruct.constructObjectField({
        required: true,
        data: fileBackendConfig,
        description: 'The requested file backend config',
      }),
    },
  });

const deleteFileBackendConfigParams =
  mfdocConstruct.constructObject<DeleteFileBackendConfigEndpointParams>({
    name: 'DeleteFileBackendConfigEndpointParams',
    description: 'Parameters for deleting a file backend config',
    fields: {
      configId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
        description: 'ID of the config to delete',
      }),
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description:
          'Workspace ID (optional if using workspace from auth context)',
      }),
    },
  });

export const addFileBackendMountEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddFileBackendMountHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      AddFileBackendMountHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      AddFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.addMount,
    method: HttpEndpointMethod.Post,
    requestBody: addFileBackendMountParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseBody: addFileBackendMountSuccessResponseBody,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    name: 'fimidara/fileBackends/addMount',
    description:
      'Create a new file backend mount to connect a workspace folder to external storage like AWS S3, Google Cloud Storage, etc. This allows files uploaded to the specified folder to be automatically stored in the external backend.',
    tags: [kEndpointTag.public],
  });

export const getFileBackendMountEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendMountHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetFileBackendMountHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.getMount,
    method: HttpEndpointMethod.Post,
    requestBody: getFileBackendMountParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getFileBackendMountSuccessBody,
    name: 'fimidara/fileBackends/getMount',
    description:
      'Retrieve a specific file backend mount by its ID. Returns details about the mount including its configuration, storage backend, and target folder.',
    tags: [kEndpointTag.public],
  });

export const updateFileBackendMountEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateFileBackendMountHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdateFileBackendMountHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdateFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.updateMount,
    method: HttpEndpointMethod.Post,
    requestBody: updateFileBackendMountParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateFileBackendMountSuccessResponseBody,
    name: 'fimidara/fileBackends/updateMount',
    tags: [kEndpointTag.public],
  });

export const deleteFileBackendMountEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeleteFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeleteFileBackendMountHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeleteFileBackendMountHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeleteFileBackendMountHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeleteFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeleteFileBackendMountHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.deleteMount,
    method: HttpEndpointMethod.Delete,
    requestBody: deleteFileBackendMountParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/fileBackends/deleteMount',
    tags: [kEndpointTag.public],
  });

export const getFileBackendMountsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.getMounts,
    method: HttpEndpointMethod.Post,
    requestBody: getFileBackendMountsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getFileBackendMountsSuccessResponseBody,
    name: 'fimidara/fileBackends/getMounts',
    description:
      'Retrieve a paginated list of file backend mounts in the workspace. Supports filtering by backend type, folder path, or config ID to find specific mounts.',
    tags: [kEndpointTag.public],
  });

export const countFileBackendMountsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.countMounts,
    method: HttpEndpointMethod.Post,
    requestBody: countFileBackendMountsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/fileBackends/countMounts',
    tags: [kEndpointTag.public],
  });

export const resolveFileBackendMountsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ResolveFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ResolveFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ResolveFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ResolveFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ResolveFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ResolveFileBackendMountsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.resolveMounts,
    method: HttpEndpointMethod.Post,
    requestBody: resolveFileBackendMountsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: resolveFileBackendMountsSuccessResponseBody,
    name: 'fimidara/fileBackends/resolveMounts',
    description:
      'Determine which file backend mounts apply to a specific file or folder path. Returns mounts ordered by priority, helping you understand where files will be stored.',
    tags: [kEndpointTag.public],
  });

export const addFileBackendConfigEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      AddFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      AddFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.addConfig,
    method: HttpEndpointMethod.Post,
    requestBody: addFileBackendConfigParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseBody: addFileBackendConfigSuccessResponseBody,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    name: 'fimidara/fileBackends/addConfig',
    description:
      'Create a new file backend config to store credentials and settings for external storage providers like AWS S3, Google Cloud Storage, etc. This config can then be referenced when creating mounts.',
    tags: [kEndpointTag.public],
  });

export const getFileBackendConfigEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.getConfig,
    method: HttpEndpointMethod.Post,
    requestBody: getFileBackendConfigParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getFileBackendConfigSuccessBody,
    name: 'fimidara/fileBackends/getConfig',
    tags: [kEndpointTag.public],
  });

export const updateFileBackendConfigEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdateFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdateFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.updateConfig,
    method: HttpEndpointMethod.Post,
    requestBody: updateFileBackendConfigParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateFileBackendConfigSuccessResponseBody,
    name: 'fimidara/fileBackends/updateConfig',
    tags: [kEndpointTag.public],
  });

export const deleteFileBackendConfigEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeleteFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeleteFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeleteFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeleteFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeleteFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeleteFileBackendConfigHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.deleteConfig,
    method: HttpEndpointMethod.Delete,
    requestBody: deleteFileBackendConfigParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/fileBackends/deleteConfig',
    tags: [kEndpointTag.public],
  });

export const getFileBackendConfigsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.getConfigs,
    method: HttpEndpointMethod.Post,
    requestBody: getFileBackendConfigsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getFileBackendConfigsSuccessResponseBody,
    name: 'fimidara/fileBackends/getConfigs',
    tags: [kEndpointTag.public],
  });

export const countFileBackendConfigsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountFileBackendConfigsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFileBackendConstants.routes.countConfigs,
    method: HttpEndpointMethod.Post,
    requestBody: countFileBackendConfigsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/fileBackends/countConfigs',
    tags: [kEndpointTag.public],
  });
