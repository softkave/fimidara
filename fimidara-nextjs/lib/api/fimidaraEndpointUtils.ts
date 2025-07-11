import { MfdocEndpointError as FimidaraEndpointError } from "fimidara";

export function isFimidaraEndpointError(
  error: unknown
): error is FimidaraEndpointError {
  return !!(error as FimidaraEndpointError | undefined)?.isMfdocEndpointError;
}
