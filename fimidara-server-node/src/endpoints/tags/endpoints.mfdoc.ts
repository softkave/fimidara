import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {PublicTag} from '../../definitions/tag.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {AddTagEndpointParams, AddTagEndpointResult} from './addTag/types.js';
import {tagConstants} from './constants.js';
import {CountWorkspaceTagsEndpointParams} from './countWorkspaceTags/types.js';
import {DeleteTagEndpointParams} from './deleteTag/types.js';
import {GetTagEndpointParams, GetTagEndpointResult} from './getTag/types.js';
import {
  GetWorkspaceTagsEndpointParams,
  GetWorkspaceTagsEndpointResult,
} from './getWorkspaceTags/types.js';
import {
  AddTagHttpEndpoint,
  CountWorkspaceTagsHttpEndpoint,
  DeleteTagHttpEndpoint,
  GetTagHttpEndpoint,
  GetWorkspaceTagsHttpEndpoint,
  UpdateTagHttpEndpoint,
} from './types.js';
import {
  UpdateTagEndpointParams,
  UpdateTagEndpointResult,
  UpdateTagInput,
} from './updateTag/types.js';

const updateTagInput = mfdocConstruct.constructObject<UpdateTagInput>({
  name: 'UpdateTagInput',
  description:
    'Input fields for updating an existing tag. All fields are optional - only provide the fields you want to update.',
  fields: {
    name: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.name,
    }),
    description: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.description,
    }),
  },
});

const tag = mfdocConstruct.constructObject<PublicTag>({
  name: 'Tag',
  description:
    'A tag resource that can be used to categorize and organize workspace items like files and folders.',
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
  },
});

const addTagParams = mfdocConstruct.constructObject<AddTagEndpointParams>({
  name: 'AddTagEndpointParams',
  description: 'Parameters for creating a new tag in a workspace.',
  fields: {
    workspaceId: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.workspaceId,
    }),
    name: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.name,
    }),
    description: mfdocConstruct.constructObjectField({
      required: false,
      data: fReusables.description,
    }),
  },
});

const addTagResponseBody = mfdocConstruct.constructObject<AddTagEndpointResult>(
  {
    name: 'AddTagEndpointResult',
    description: 'Response containing the newly created tag.',
    fields: {
      tag: mfdocConstruct.constructObjectField({
        required: true,
        data: tag,
      }),
    },
  }
);

const getWorkspaceTagsParams =
  mfdocConstruct.constructObject<GetWorkspaceTagsEndpointParams>({
    name: 'GetWorkspaceTagsEndpointParams',
    description:
      'Parameters for retrieving a paginated list of tags from a workspace.',
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
  });

const getWorkspaceTagsResponseBody =
  mfdocConstruct.constructObject<GetWorkspaceTagsEndpointResult>({
    name: 'GetWorkspaceTagsEndpointResult',
    description: 'Response containing a paginated list of workspace tags.',
    fields: {
      tags: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicTag>({
          type: tag,
        }),
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
      }),
    },
  });

const countWorkspaceTagsParams =
  mfdocConstruct.constructObject<CountWorkspaceTagsEndpointParams>({
    name: 'CountWorkspaceTagsEndpointParams',
    description:
      'Parameters for counting the total number of tags in a workspace.',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
      }),
    },
  });

const updateTagParams = mfdocConstruct.constructObject<UpdateTagEndpointParams>(
  {
    name: 'UpdateTagEndpointParams',
    description: 'Parameters for updating an existing tag.',
    fields: {
      tagId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
      tag: mfdocConstruct.constructObjectField({
        required: true,
        data: updateTagInput,
      }),
    },
  }
);

const updateTagResponseBody =
  mfdocConstruct.constructObject<UpdateTagEndpointResult>({
    name: 'UpdateTagEndpointResult',
    description: 'Response containing the updated tag.',
    fields: {
      tag: mfdocConstruct.constructObjectField({
        required: true,
        data: tag,
      }),
    },
  });

const getTagParams = mfdocConstruct.constructObject<GetTagEndpointParams>({
  name: 'GetTagEndpointParams',
  description: 'Parameters for retrieving a specific tag by its ID.',
  fields: {
    tagId: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.id,
    }),
  },
});

const getTagResponseBody = mfdocConstruct.constructObject<GetTagEndpointResult>(
  {
    name: 'GetTagEndpointResult',
    description: 'Response containing the requested tag.',
    fields: {
      tag: mfdocConstruct.constructObjectField({
        required: true,
        data: tag,
      }),
    },
  }
);

const deleteTagParams = mfdocConstruct.constructObject<DeleteTagEndpointParams>(
  {
    name: 'DeleteTagEndpointParams',
    description: 'Parameters for deleting a specific tag by its ID.',
    fields: {
      tagId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.id,
      }),
    },
  }
);

export const addTagEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      AddTagHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      AddTagHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<AddTagHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      AddTagHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      AddTagHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      AddTagHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: tagConstants.routes.addTag,
    method: HttpEndpointMethod.Post,
    description:
      'Creates a new tag in the specified workspace. Tags can be used to categorize and organize files, folders, and other workspace resources.',
    requestBody: addTagParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: addTagResponseBody,
    name: 'fimidara/tags/addTag',
    tags: [kEndpointTag.public],
  });

export const getTagEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetTagHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetTagHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<GetTagHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      GetTagHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetTagHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetTagHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: tagConstants.routes.getTag,
    method: HttpEndpointMethod.Post,
    description: 'Retrieves a specific tag by its unique identifier.',
    requestBody: getTagParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getTagResponseBody,
    name: 'fimidara/tags/getTag',
    tags: [kEndpointTag.public],
  });

export const updateTagEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      UpdateTagHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      UpdateTagHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<UpdateTagHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      UpdateTagHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      UpdateTagHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      UpdateTagHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: tagConstants.routes.updateTag,
    method: HttpEndpointMethod.Post,
    description:
      "Updates an existing tag's properties such as name and description. Only the fields provided in the request will be updated.",
    requestBody: updateTagParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: updateTagResponseBody,
    name: 'fimidara/tags/updateTag',
    tags: [kEndpointTag.public],
  });

export const deleteTagEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      DeleteTagHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      DeleteTagHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<DeleteTagHttpEndpoint['mfdocHttpDefinition']['query']>,
    InferFieldObjectOrMultipartType<
      DeleteTagHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      DeleteTagHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      DeleteTagHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: tagConstants.routes.deleteTag,
    method: HttpEndpointMethod.Delete,
    description:
      'Permanently deletes a tag from the workspace. This operation cannot be undone and will remove the tag from all associated resources.',
    requestBody: deleteTagParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.longRunningJobResponseBody,
    name: 'fimidara/tags/deleteTag',
    tags: [kEndpointTag.public],
  });

export const getWorkspaceTagsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: tagConstants.routes.getWorkspaceTags,
    method: HttpEndpointMethod.Post,
    description:
      'Retrieves a paginated list of all tags in the specified workspace. Use the page and pageSize parameters to control pagination.',
    requestBody: getWorkspaceTagsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspaceTagsResponseBody,
    name: 'fimidara/tags/getWorkspaceTags',
    tags: [kEndpointTag.public],
  });

export const countWorkspaceTagsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountWorkspaceTagsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: tagConstants.routes.countWorkspaceTags,
    method: HttpEndpointMethod.Post,
    description:
      'Returns the total number of tags in the specified workspace. Useful for pagination calculations and displaying summary statistics.',
    requestBody: countWorkspaceTagsParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/tags/countWorkspaceTags',
    tags: [kEndpointTag.public],
  });
