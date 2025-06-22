import { Button } from "@/components/ui/button";
import { cn } from "@/components/utils";
import { FileUp, Upload as UploadIcon, X } from "lucide-react";
import prettyBytes from "pretty-bytes";
import RcUpload from "rc-upload";
import type {
  RcFile,
  UploadProps as RcUploadProps,
} from "rc-upload/es/interface";
import React, { useCallback, useMemo, useState } from "react";

// Types
export interface UploadFile extends RcFile {}

export interface UploadChangeParam {
  file: UploadFile;
  fileList: UploadFile[];
}

export interface UploadProps
  extends Omit<
    RcUploadProps,
    "onChange" | "beforeUpload" | "value" | "defaultValue"
  > {
  // Custom props
  multiple?: boolean;
  directory?: boolean;
  accept?: string;
  maxFileSize?: number; // in bytes
  maxFiles?: number;
  disabled?: boolean;
  loading?: boolean;

  // Styling
  className?: string;
  style?: React.CSSProperties;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost";
  buttonSize?: "default" | "sm" | "lg" | "icon";

  // Callbacks
  onChange?: (info: UploadChangeParam) => void;
  beforeUpload?: (file: RcFile, fileList: RcFile[]) => boolean;
  onFileSelect?: (files: UploadFile[]) => void;
  onFileRemove?: (file: UploadFile) => void;

  // Display options
  showFileList?: boolean;
  showUploadButton?: boolean;
  showFileSize?: boolean;
  showRemoveButton?: boolean;

  // Form integration
  value?: UploadFile[];
  defaultValue?: UploadFile[];

  // Custom validation
  validator?: (file: RcFile) => string | null; // returns error message or null

  // Children for custom trigger
  children?: React.ReactNode;
}

export interface UploadListProps {
  files: UploadFile[];
  onRemove?: (file: UploadFile) => void;
  showFileSize?: boolean;
  showRemoveButton?: boolean;
  className?: string;
}

// Validation helpers
const validateFile = (
  file: RcFile,
  props: Pick<UploadProps, "maxFileSize" | "accept" | "validator">
): string | null => {
  const { maxFileSize, accept, validator } = props;

  // Check file size
  if (maxFileSize && file.size > maxFileSize) {
    return `File size exceeds ${prettyBytes(maxFileSize)}`;
  }

  // Check file type
  if (accept && file.type) {
    const acceptedTypes = accept.split(",").map((t) => t.trim());
    const fileType = file.type;
    const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;

    const isAccepted = acceptedTypes.some((type) => {
      if (type.startsWith(".")) {
        return fileExtension === type.toLowerCase();
      }
      if (type.endsWith("/*")) {
        return fileType.startsWith(type.slice(0, -1));
      }
      return fileType === type;
    });

    if (!isAccepted) {
      return `File type not accepted. Allowed: ${accept}`;
    }
  }

  // Custom validation
  if (validator) {
    return validator(file);
  }

  return null;
};

// Upload List Component
const UploadList: React.FC<UploadListProps> = ({
  files,
  onRemove,
  showFileSize = true,
  showRemoveButton = true,
  className,
}) => {
  if (files.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)}>
      {files.map((file) => (
        <div
          key={file.uid}
          className={cn(
            "flex items-center justify-between p-3 border rounded-lg",
            "bg-background hover:bg-muted/50 transition-colors"
          )}
        >
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <FileUp className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{file.name}</p>
              {showFileSize && (
                <p className="text-xs text-muted-foreground">
                  {prettyBytes(file.size)}
                </p>
              )}
            </div>
          </div>

          {showRemoveButton && onRemove && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(file)}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

// Main Upload Component
export const Upload: React.FC<UploadProps> = ({
  // Custom props
  multiple = false,
  directory = false,
  accept,
  maxFileSize,
  maxFiles,
  disabled = false,
  loading = false,

  // Styling
  className,
  style,
  buttonText = "Select Files",
  buttonVariant = "outline",
  buttonSize = "default",

  // Callbacks
  onChange,
  beforeUpload: customBeforeUpload,
  onFileSelect,
  onFileRemove,

  // Display options
  showFileList = true,
  showUploadButton = true,
  showFileSize = true,
  showRemoveButton = true,

  // Form integration
  value,
  defaultValue,

  // Custom validation
  validator,

  // Children
  children,

  // RC Upload props
  ...rcUploadProps
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>(
    value || defaultValue || []
  );
  const [isUploading, setIsUploading] = useState(false);

  // Update fileList when value prop changes
  React.useEffect(() => {
    if (value !== undefined) {
      setFileList(value);
    }
  }, [value]);

  // Handle file selection
  const handleBeforeUpload = useCallback(
    (file: RcFile, fileList: RcFile[]): boolean => {
      // Validate files
      for (const f of fileList) {
        const error = validateFile(f, { maxFileSize, accept, validator });
        if (error) {
          console.error(`Validation error for ${f.name}:`, error);
          return false;
        }
      }

      // Check max files limit
      if (maxFiles && fileList.length > maxFiles) {
        console.error(`Maximum ${maxFiles} files allowed`);
        return false;
      }

      // Custom beforeUpload logic
      if (customBeforeUpload) {
        return customBeforeUpload(file, fileList);
      }

      // Convert to UploadFile format
      const uploadFiles: UploadFile[] = fileList;

      setFileList(uploadFiles);

      // Call callbacks
      onFileSelect?.(uploadFiles);
      onChange?.({
        file: uploadFiles[0],
        fileList: uploadFiles,
      });

      return false; // Prevent default upload behavior
    },
    [
      maxFileSize,
      accept,
      validator,
      maxFiles,
      customBeforeUpload,
      onFileSelect,
      onChange,
    ]
  );

  // Handle file removal
  const handleFileRemove = useCallback(
    (file: UploadFile) => {
      const newFileList = fileList.filter((f) => f.uid !== file.uid);
      setFileList(newFileList);
      onFileRemove?.(file);
      onChange?.({
        file,
        fileList: newFileList,
      });
    },
    [fileList, onFileRemove, onChange]
  );

  // Default upload button
  const defaultUploadButton = useMemo(() => {
    if (!showUploadButton) return null;

    if (children) {
      return children;
    }

    return (
      <Button
        variant={buttonVariant}
        size={buttonSize}
        disabled={disabled || loading || isUploading}
        className="space-x-2"
      >
        <UploadIcon className="h-4 w-4" />
        <span>{buttonText}</span>
      </Button>
    );
  }, [
    showUploadButton,
    children,
    buttonVariant,
    buttonSize,
    disabled,
    loading,
    isUploading,
    buttonText,
  ]);

  return (
    <div className={cn("space-y-4", className)} style={style}>
      {/* File List */}
      {showFileList && (
        <UploadList
          files={fileList}
          onRemove={showRemoveButton ? handleFileRemove : undefined}
          showFileSize={showFileSize}
          showRemoveButton={showRemoveButton}
        />
      )}

      {/* Upload Component */}
      <RcUpload
        {...rcUploadProps}
        multiple={multiple}
        directory={directory}
        accept={accept}
        disabled={disabled || loading || isUploading}
        beforeUpload={handleBeforeUpload}
        openFileDialogOnClick={true}
      >
        {defaultUploadButton}
      </RcUpload>
    </div>
  );
};

// Specialized components for common use cases

// Multiple Files Upload
export interface MultipleFilesUploadProps
  extends Omit<UploadProps, "multiple"> {
  maxFiles?: number;
  onFilesSelect?: (files: UploadFile[]) => void;
}

export const MultipleFilesUpload: React.FC<MultipleFilesUploadProps> = (
  props
) => {
  return <Upload {...props} multiple={true} />;
};

// Single File Upload
export interface SingleFileUploadProps
  extends Omit<UploadProps, "multiple" | "onFileSelect"> {
  onFileSelect?: (file: UploadFile) => void;
}

export const SingleFileUpload: React.FC<SingleFileUploadProps> = ({
  onFileSelect,
  ...props
}) => {
  const handleFileSelect = useCallback(
    (files: UploadFile[]) => {
      onFileSelect?.(files[0]);
    },
    [onFileSelect]
  );

  return <Upload {...props} multiple={false} onFileSelect={handleFileSelect} />;
};

// Directory Upload
export interface DirectoryUploadProps extends Omit<UploadProps, "directory"> {
  onDirectorySelect?: (files: UploadFile[]) => void;
}

export const DirectoryUpload: React.FC<DirectoryUploadProps> = (props) => {
  return (
    <Upload
      {...props}
      directory={true}
      onFileSelect={props.onDirectorySelect}
    />
  );
};

// Avatar Upload
export interface AvatarUploadProps
  extends Omit<UploadProps, "accept" | "multiple" | "onFileSelect"> {
  onImageSelect?: (file: UploadFile) => void;
  maxSize?: number; // in bytes
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  onImageSelect,
  maxSize = 5 * 1024 * 1024, // 5MB default
  ...props
}) => {
  const handleFileSelect = useCallback(
    (files: UploadFile[]) => {
      onImageSelect?.(files[0]);
    },
    [onImageSelect]
  );

  return (
    <Upload
      {...props}
      multiple={false}
      accept="image/*"
      maxFileSize={maxSize}
      onFileSelect={handleFileSelect}
      buttonText="Upload Image"
    />
  );
};

export default Upload;
