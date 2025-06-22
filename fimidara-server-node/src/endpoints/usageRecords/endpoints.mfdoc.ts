import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {
  PublicUsageRecord,
  kUsageRecordCategory,
} from '../../definitions/usageRecord.js';
import {
  fReusables,
  mfdocEndpointHttpHeaderItems,
  mfdocEndpointHttpResponseItems,
} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {kUsageRecordConstants} from './constants.js';
import {CountWorkspaceSummedUsageEndpointParams} from './countWorkspaceSummedUsage/types.js';
import {GetUsageCostsEndpointResult} from './getUsageCosts/types.js';
import {
  GetWorkspaceSummedUsageEndpointParams,
  GetWorkspaceSummedUsageEndpointResult,
  WorkspaceSummedUsageQuery,
} from './getWorkspaceSummedUsage/types.js';
import {
  CountWorkspaceSummedUsageHttpEndpoint,
  GetUsageCostsHttpEndpoint,
  GetWorkspaceSummedUsageHttpEndpoint,
} from './types.js';

const cost = mfdocConstruct.constructNumber({
  description: 'Usage cost in USD',
  example: 0.05,
});
const month = mfdocConstruct.constructNumber({
  description: 'Usage recording month from 0-11, January-December',
  example: 0,
  integer: true,
  min: 0,
  max: 11,
});
const year = mfdocConstruct.constructNumber({
  description: 'Usage recording year',
  example: 2024,
  integer: true,
  min: 1970,
});
const usageCosts = mfdocConstruct.constructObject<
  GetUsageCostsEndpointResult['costs']
>({
  name: 'UsageCosts',
  description: 'Breakdown of usage costs by category',
  fields: {
    [kUsageRecordCategory.storage]: mfdocConstruct.constructObjectField({
      required: true,
      data: cost,
      description: 'Cost for storage usage',
    }),
    [kUsageRecordCategory.storageEverConsumed]:
      mfdocConstruct.constructObjectField({
        required: true,
        data: cost,
        description: 'Cost for maximum storage ever consumed',
      }),
    [kUsageRecordCategory.bandwidthIn]: mfdocConstruct.constructObjectField({
      required: true,
      data: cost,
      description: 'Cost for inbound bandwidth usage',
    }),
    [kUsageRecordCategory.bandwidthOut]: mfdocConstruct.constructObjectField({
      required: true,
      data: cost,
      description: 'Cost for outbound bandwidth usage',
    }),
    [kUsageRecordCategory.total]: mfdocConstruct.constructObjectField({
      required: true,
      data: cost,
      description: 'Total cost across all usage categories',
    }),
  },
});

const summedUsageQuery =
  mfdocConstruct.constructObject<WorkspaceSummedUsageQuery>({
    name: 'SummedUsageQuery',
    description: 'Query parameters for filtering usage records',
    fields: {
      category: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.usageCategoryOrList,
        description: 'Filter by usage category (storage, bandwidth, etc.)',
      }),
      fromDate: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.date,
        description: 'Filter usage records from this date onwards',
      }),
      toDate: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.date,
        description: 'Filter usage records up to this date',
      }),
      fulfillmentStatus: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.usageFulfillmentStatusOrList,
        description: 'Filter by fulfillment status (fulfilled, pending, etc.)',
      }),
    },
  });

const usageRecord = mfdocConstruct.constructObject<PublicUsageRecord>({
  name: 'UsageRecord',
  description: 'A workspace usage record containing usage metrics and costs',
  fields: {
    ...fReusables.workspaceResourceParts,
    category: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.usageCategory,
      description:
        'The type of usage being recorded (storage, bandwidth, etc.)',
    }),
    usage: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.usage,
      description: 'The amount of usage recorded (in bytes for storage, etc.)',
    }),
    usageCost: mfdocConstruct.constructObjectField({
      required: true,
      data: cost,
      description: 'The cost associated with this usage record',
    }),
    status: mfdocConstruct.constructObjectField({
      required: true,
      data: fReusables.usageFulfillmentStatus,
      description: 'The fulfillment status of this usage record',
    }),
    month: mfdocConstruct.constructObjectField({
      required: true,
      data: month,
      description: 'The month this usage was recorded for',
    }),
    year: mfdocConstruct.constructObjectField({
      required: true,
      data: year,
      description: 'The year this usage was recorded for',
    }),
  },
});

const getWorkspaceSummedUsageParams =
  mfdocConstruct.constructObject<GetWorkspaceSummedUsageEndpointParams>({
    name: 'GetWorkspaceSummedUsageEndpointParams',
    description: 'Parameters for retrieving workspace usage records',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description: 'Workspace ID',
      }),
      page: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.page,
        description: 'Page number for pagination (starts from 0)',
      }),
      pageSize: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.pageSize,
        description: 'Number of records to return per page',
      }),
      query: mfdocConstruct.constructObjectField({
        required: false,
        data: summedUsageQuery,
        description: 'Query filters to apply to the usage records',
      }),
    },
  });
const getWorkspaceSummedUsageResponseBody =
  mfdocConstruct.constructObject<GetWorkspaceSummedUsageEndpointResult>({
    name: 'GetWorkspaceSummedUsageEndpointResult',
    description:
      'Response containing workspace usage records and pagination info',
    fields: {
      records: mfdocConstruct.constructObjectField({
        required: true,
        data: mfdocConstruct.constructArray<PublicUsageRecord>({
          type: usageRecord,
        }),
        description: 'Array of usage records matching the query',
      }),
      page: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.page,
        description: 'Current page number returned',
      }),
    },
  });
const countWorkspaceSummedUsageParams =
  mfdocConstruct.constructObject<CountWorkspaceSummedUsageEndpointParams>({
    name: 'CountWorkspaceSummedUsageEndpointParams',
    description: 'Parameters for counting workspace usage records',
    fields: {
      workspaceId: mfdocConstruct.constructObjectField({
        required: false,
        data: fReusables.workspaceIdInput,
        description: 'ID of the workspace to count usage for',
      }),
      query: mfdocConstruct.constructObjectField({
        required: false,
        data: summedUsageQuery,
        description: 'Query filters to apply when counting usage records',
      }),
    },
  });
const getUsageCostsResponseBody =
  mfdocConstruct.constructObject<GetUsageCostsEndpointResult>({
    name: 'GetUsageCostsEndpointResult',
    description: 'Response containing usage cost breakdown by category',
    fields: {
      costs: mfdocConstruct.constructObjectField({
        required: true,
        data: usageCosts,
        description: 'Detailed breakdown of costs by usage category',
      }),
    },
  });
export const getUsageCostsEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetUsageCostsHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetUsageCostsHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetUsageCostsHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetUsageCostsHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetUsageCostsHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetUsageCostsHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUsageRecordConstants.routes.getUsageCosts,
    method: HttpEndpointMethod.Post,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getUsageCostsResponseBody,
    name: 'fimidara/usageRecords/getUsageCosts',
    description:
      'Get usage costs breakdown by category for the current workspace',
    tags: [kEndpointTag.public],
  });

export const getWorkspaceSummedUsageEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUsageRecordConstants.routes.getWorkspaceSummedUsage,
    method: HttpEndpointMethod.Post,
    requestBody: getWorkspaceSummedUsageParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getWorkspaceSummedUsageResponseBody,
    name: 'fimidara/usageRecords/getWorkspaceSummedUsage',
    description:
      'Retrieve paginated workspace usage records with optional filtering by category, date range, and fulfillment status',
    tags: [kEndpointTag.public],
  });

export const countWorkspaceSummedUsageEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      CountWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      CountWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      CountWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      CountWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      CountWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      CountWorkspaceSummedUsageHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: kUsageRecordConstants.routes.countWorkspaceSummedUsage,
    method: HttpEndpointMethod.Post,
    requestBody: countWorkspaceSummedUsageParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: mfdocEndpointHttpResponseItems.countResponseBody,
    name: 'fimidara/usageRecords/countWorkspaceSummedUsage',
    description:
      'Count the total number of workspace usage records matching the specified filters',
    tags: [kEndpointTag.public],
  });
