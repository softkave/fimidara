import {
  MfdocHttpEndpointMethod as HttpEndpointMethod,
  InferMfdocFieldObjectOrMultipartType as InferFieldObjectOrMultipartType,
  InferMfdocFieldObjectType as InferFieldObjectType,
  mfdocConstruct,
} from 'mfdoc';
import {kJobStatus} from '../../definitions/job.js';
import {fReusables, mfdocEndpointHttpHeaderItems} from '../helpers.mfdoc.js';
import {kEndpointTag} from '../types.js';
import {jobConstants} from './constants.js';
import {
  GetJobStatusEndpointParams,
  GetJobStatusEndpointResult,
} from './getJobStatus/types.js';
import {GetJobStatusHttpEndpoint} from './types.js';

const jobStatus = mfdocConstruct.constructString({
  description: 'Job status indicating the current state of execution',
  example: 'completed',
  valid: Object.values(kJobStatus),
  enumName: 'JobStatus',
});

const getJobStatusParams =
  mfdocConstruct.constructObject<GetJobStatusEndpointParams>({
    name: 'GetJobStatusEndpointParams',
    description: 'Parameters required to retrieve the status of a specific job',
    fields: {
      jobId: mfdocConstruct.constructObjectField({
        required: true,
        data: fReusables.jobId,
        description:
          'Unique identifier of the job whose status is being requested',
      }),
    },
  });

const getJobStatusResponseBody =
  mfdocConstruct.constructObject<GetJobStatusEndpointResult>({
    name: 'GetJobStatusEndpointResult',
    description:
      'Response containing the current status and optional error information for the requested job',
    fields: {
      status: mfdocConstruct.constructObjectField({
        required: true,
        data: jobStatus,
        description: 'Current execution status of the job',
      }),
      errorMessage: mfdocConstruct.constructObjectField({
        required: false,
        data: mfdocConstruct.constructString({
          description: 'Error message if the job failed or encountered issues',
          example: 'File processing failed due to invalid format',
        }),
        description:
          'Optional error message providing details when job execution fails',
      }),
    },
  });

export const getJobStatusEndpointDefinition =
  mfdocConstruct.constructHttpEndpointDefinition<
    InferFieldObjectType<
      GetJobStatusHttpEndpoint['mfdocHttpDefinition']['requestHeaders']
    >,
    InferFieldObjectType<
      GetJobStatusHttpEndpoint['mfdocHttpDefinition']['pathParamaters']
    >,
    InferFieldObjectType<
      GetJobStatusHttpEndpoint['mfdocHttpDefinition']['query']
    >,
    InferFieldObjectOrMultipartType<
      GetJobStatusHttpEndpoint['mfdocHttpDefinition']['requestBody']
    >,
    InferFieldObjectType<
      GetJobStatusHttpEndpoint['mfdocHttpDefinition']['responseHeaders']
    >,
    InferFieldObjectType<
      GetJobStatusHttpEndpoint['mfdocHttpDefinition']['responseBody']
    >
  >({
    path: jobConstants.routes.getJobStatus,
    method: HttpEndpointMethod.Post,
    requestBody: getJobStatusParams,
    requestHeaders:
      mfdocEndpointHttpHeaderItems.requestHeaders_AuthRequired_JsonContentType,
    responseHeaders:
      mfdocEndpointHttpHeaderItems.responseHeaders_JsonContentType,
    responseBody: getJobStatusResponseBody,
    name: 'fimidara/jobs/getJobStatus',
    description:
      'Retrieve the current execution status of a job by its unique identifier. Returns the job status and any error messages if applicable.',
    tags: [kEndpointTag.public],
  });
