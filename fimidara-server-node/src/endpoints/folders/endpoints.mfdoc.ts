import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {PublicFile} from '../../definitions/file.js';
import {PublicFolder} from '../../definitions/folder.js';
import {kFimidaraPublicResourceType} from '../../definitions/system.js';
import {fileEndpointsParts} from '../files/endpoints.mfdoc.js';
import {fReusables, mfdocEndpointHttpHeaderItems} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {
  AddFolderEndpointParams,
  AddFolderEndpointResult,
} from './addFolder/types.js';
import {kFolderConstants} from './constants.js';
import {
  CountFolderContentEndpointParams,
  CountFolderContentEndpointResult,
} from './countFolderContent/types.js';
import {
  DeleteFolderEndpointParams,
  DeleteFolderEndpointResult,
} from './deleteFolder/types.js';
import {
  GetFolderEndpointParams,
  GetFolderEndpointResult,
} from './getFolder/types.js';
import {
  ListFolderContentEndpointParams,
  ListFolderContentEndpointResult,
} from './listFolderContent/types.js';
import {
  AddFolderHttpEndpoint,
  CountFolderContentHttpEndpoint,
  DeleteFolderHttpEndpoint,
  GetFolderHttpEndpoint,
  ListFolderContentHttpEndpoint,
  UpdateFolderHttpEndpoint,
} from './types.js';
import {
  UpdateFolderEndpointParams,
  UpdateFolderEndpointResult,
  UpdateFolderInput,
} from './updateFolder/types.js';

const updateFolderInput = mfdocConstruct.constructObject<UpdateFolderInput>({
  name: 'UpdateFolderInput',
  description: 'Input data for updating folder properties',
  fields: {
    description: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.description,
    }),
  },
});

const folder = mfdocConstruct.constructObject<PublicFolder>({
  name: 'Folder',
  description:
    'Represents a folder in the workspace with its metadata and hierarchy information',
  fields: {
    ...fReusables.workspaceResourceParts,
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.name,
    }),
    description: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.description,
    }),
    idPath: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.idPath,
    }),
    namepath: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.namepathList,
    }),
    parentId: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.folderIdOrNull,
    }),
  },
});

const addFolderParams = mfdocConstruct.constructObject<AddFolderEndpointParams>(
  {
    name: 'AddFolderEndpointParams',
    description: 'Parameters for creating a new folder',
    fields: {
      description: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.description,
      }),
      folderpath: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.folderpath,
      }),
    },
  }
);

const addFolderResponseBody =
  mfdocConstruct.constructObject<AddFolderEndpointResult>({
    name: 'AddFolderEndpointResult',
    description: 'Response containing the newly created folder information',
    fields: {
      folder: mfdocConstruct.constructObjectField({
        required: true,
        data: folder,
      }),
      notes: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.resultNoteList,
      }),
    },
  });

const listFolderContentParams =
  mfdocConstruct.constructObject<ListFolderContentEndpointParams>({
    name: 'ListFolderContentEndpointParams',
    description:
      'Parameters for listing the contents of a folder with optional filtering and pagination',
    fields: {
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
      }),
      folderId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderId,
      }),
      contentType: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          description:
            'Filter by content type - specify "file" to get only files, "folder" to get only folders, or omit to get both',
          example: kFimidaraPublicResourceType.File,
          valid: [
            kFimidaraPublicResourceType.File,
            kFimidaraPublicResourceType.Folder,
          ],
        }),
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
  });

const listFolderContentResponseBody =
  mfdocConstruct.constructObject<ListFolderContentEndpointResult>({
    name: 'ListFolderContentEndpointResult',
    description:
      'Response containing the folder contents with folders and files arrays',
    fields: {
      folders: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicFolder>({
          type: folder,
          description: 'Array of folders in the requested directory',
        }),
      }),
      files: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicFile>({
          type: fileEndpointsParts.file,
          description: 'Array of files in the requested directory',
        }),
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
      }),
      notes: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.resultNoteList,
      }),
    },
  });

const countFolderContentParams =
  mfdocConstruct.constructObject<CountFolderContentEndpointParams>({
    name: 'CountFolderContentEndpointParams',
    description: 'Parameters for counting the number of items in a folder',
    fields: {
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
      }),
      folderId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderId,
      }),
      contentType: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          description:
            'Filter by content type - specify "file" to count only files, "folder" to count only folders, or omit to count both',
          example: kFimidaraPublicResourceType.File,
          valid: [
            kFimidaraPublicResourceType.File,
            kFimidaraPublicResourceType.Folder,
          ],
        }),
      }),
    },
  });

const countFolderContentResponseBody =
  mfdocConstruct.constructObject<CountFolderContentEndpointResult>({
    name: 'CountFolderContentEndpointResult',
    description:
      'Response containing counts of folders and files in the specified directory',
    fields: {
      foldersCount: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructNumber({
          description: 'Number of folders in the directory',
          example: 5,
        }),
      }),
      filesCount: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructNumber({
          description: 'Number of files in the directory',
          example: 12,
        }),
      }),
      notes: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.resultNoteList,
      }),
    },
  });

const updateFolderParams =
  mfdocConstruct.constructObject<UpdateFolderEndpointParams>({
    name: 'UpdateFolderEndpointParams',
    description: 'Parameters for updating an existing folder',
    fields: {
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
      }),
      folderId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderId,
      }),
      folder: mfdocConstruct.constructObjectField({
        required: true,
        data: updateFolderInput,
      }),
    },
  });

const updateFolderResponseBody =
  mfdocConstruct.constructObject<UpdateFolderEndpointResult>({
    name: 'UpdateFolderEndpointResult',
    description: 'Response containing the updated folder information',
    fields: {
      folder: mfdocConstruct.constructObjectField({
        required: true,
        data: folder,
      }),
    },
  });

const getFolderParams = mfdocConstruct.constructObject<GetFolderEndpointParams>(
  {
    name: 'GetFolderEndpointParams',
    description: 'Parameters for retrieving a specific folder by path or ID',
    fields: {
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
      }),
      folderId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderId,
      }),
    },
  }
);

const getFolderResponseBody =
  mfdocConstruct.constructObject<GetFolderEndpointResult>({
    name: 'GetFolderEndpointResult',
    description: 'Response containing the requested folder information',
    fields: {
      folder: mfdocConstruct.constructObjectField({
        required: true,
        data: folder,
      }),
    },
  });

const deleteFolderParams =
  mfdocConstruct.constructObject<DeleteFolderEndpointParams>({
    name: 'DeleteFolderEndpointParams',
    description: 'Parameters for deleting a folder and optionally its contents',
    fields: {
      folderpath: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderpath,
      }),
      folderId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.folderId,
      }),
    },
  });

const deleteFolderResponseBody =
  mfdocConstruct.constructObject<DeleteFolderEndpointResult>({
    name: 'DeleteFolderEndpointResult',
    description:
      'Response for folder deletion, may include job ID for tracking deletion progress',
    fields: {
      jobId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.jobId,
      }),
      notes: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.resultNoteList,
      }),
    },
  });

export const addFolderEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddFolderHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddFolderHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<AddFolderHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      AddFolderHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddFolderHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddFolderHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFolderConstants.routes.addFolder,
    method: HttpEndpointMethod.Post,
    requestBody: addFolderParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: addFolderResponseBody,
    name: 'fimidara/folders/addFolder',
    description:
      'Creates a new folder at the specified path within the workspace',
    tags: [kEndpointTag.public],
  });

export const getFolderEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetFolderHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetFolderHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<GetFolderHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      GetFolderHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetFolderHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetFolderHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFolderConstants.routes.getFolder,
    method: HttpEndpointMethod.Post,
    requestBody: getFolderParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getFolderResponseBody,
    name: 'fimidara/folders/getFolder',
    description:
      'Retrieves information about a specific folder by its path or ID',
    tags: [kEndpointTag.public],
  });

export const updateFolderEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateFolderHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateFolderHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      UpdateFolderHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      UpdateFolderHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateFolderHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateFolderHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFolderConstants.routes.updateFolder,
    method: HttpEndpointMethod.Post,
    requestBody: updateFolderParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateFolderResponseBody,
    name: 'fimidara/folders/updateFolder',
    description:
      'Updates the properties of an existing folder, such as its description',
    tags: [kEndpointTag.public],
  });

export const deleteFolderEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeleteFolderHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeleteFolderHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      DeleteFolderHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      DeleteFolderHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeleteFolderHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeleteFolderHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFolderConstants.routes.deleteFolder,
    method: HttpEndpointMethod.Delete,
    requestBody: deleteFolderParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: deleteFolderResponseBody,
    name: 'fimidara/folders/deleteFolder',
    description:
      'Deletes a folder and optionally its contents. May return a job ID for tracking deletion progress',
    tags: [kEndpointTag.public],
  });

export const listFolderContentEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      ListFolderContentHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      ListFolderContentHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      ListFolderContentHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      ListFolderContentHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      ListFolderContentHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      ListFolderContentHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFolderConstants.routes.listFolderContent,
    method: HttpEndpointMethod.Post,
    requestBody: listFolderContentParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: listFolderContentResponseBody,
    name: 'fimidara/folders/listFolderContent',
    description:
      'Lists the contents of a folder with optional filtering by content type and pagination support',
    tags: [kEndpointTag.public],
  });

export const countFolderContentEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountFolderContentHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountFolderContentHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountFolderContentHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountFolderContentHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountFolderContentHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountFolderContentHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kFolderConstants.routes.countFolderContent,
    method: HttpEndpointMethod.Post,
    requestBody: countFolderContentParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: countFolderContentResponseBody,
    name: 'fimidara/folders/countFolderContent',
    description:
      'Returns the count of files and folders within a specified directory',
    tags: [kEndpointTag.public],
  });

export const folderEndpointsParts = {
  folder,
};
