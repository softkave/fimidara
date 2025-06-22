import type { RcFile } from "rc-upload/es/interface";

export type SingleFileFormValue = {
  __localId: string;
  resourceId?: string;
  description?: string | null;
  encoding?: string;
  mimetype?: string;
  file?: RcFile;
  name: string;
};
