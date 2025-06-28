import {IMultipartUploadParams, multipartUpload} from './multipart.js';

/**
 * Parameters for browser-based multipart upload operations.
 * Extends the base multipart upload params but uses browser-compatible data types.
 */
export interface IMultipartUploadBrowserParams
  extends Omit<IMultipartUploadParams, 'readFrom' | 'size'> {
  /** The data to upload - can be a string or Blob */
  data: string | Blob;
  /** Optional size override. If not provided, will use the Blob's size */
  size?: number;
}

/**
 * Performs a multipart upload in browser environments.
 *
 * @param params - Configuration parameters for the multipart upload
 * @returns Promise that resolves when the upload completes
 *
 * @example
 * ```typescript
 * const result = await multipartUploadBrowser({
 *   data: fileBlob,
 *   uploadId: 'upload-123',
 *   partSize: 5 * 1024 * 1024, // 5MB chunks
 *   // ... other params
 * });
 * ```
 */
export async function multipartUploadBrowser(
  params: IMultipartUploadBrowserParams
) {
  const {data, ...rest} = params;
  const inputBlob = data instanceof Blob ? data : new Blob([data]);

  async function readFrom(start: number, end: number) {
    const blob = inputBlob.slice(start, end);
    const size = blob.size;
    return {
      size,
      data: blob,
    };
  }

  let size = params.size;
  if (!size) {
    size = inputBlob.size;
  }

  return await multipartUpload({...rest, readFrom, size});
}
