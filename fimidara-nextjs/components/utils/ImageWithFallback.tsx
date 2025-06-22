import { useToast } from "@/hooks/use-toast.ts";
import { DeleteFilled, LoadingOutlined } from "@ant-design/icons";
import React from "react";
import Image from "../internal/image";
import { Button } from "../ui/button.tsx";
import { cn } from "../utils.ts";
import { errorMessageNotificatition } from "./errorHandling";

export interface IImageWithFallbackProps {
  allowDelete?: boolean;
  width?: number;
  height?: number;
  fallbackNode?: React.ReactNode;
  preview?: boolean;
  refreshKey?: string;
  filepath: string;
  alt: string;
  onClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onDelete?: () => void;
}

const skipEventForTag = "skip-click-event-on-delete-btn";

const ImageWithFallback: React.FC<IImageWithFallbackProps> = (props) => {
  const {
    preview,
    width,
    height,
    filepath,
    alt,
    fallbackNode,
    allowDelete,
    refreshKey,
    onClick,
    onDelete,
  } = props;
  const { toast } = useToast();

  const [isDeleting, setIsDeleting] = React.useState(false);

  const internalOnDelete = async () => {
    if (onDelete) {
      setIsDeleting(true);

      try {
        await onDelete();
      } catch (error: unknown) {
        errorMessageNotificatition(error, "Error deleting image", toast);
      }

      setTimeout(() => {
        setIsDeleting(false);
      }, 2000);
    }
  };

  const imageNode = (
    <Image
      preview={preview}
      width={width}
      height={height}
      filepath={filepath}
      alt={alt}
      onClick={onClick}
      fallbackNode={fallbackNode}
      refreshKey={refreshKey}
    />
  );

  const imageWrapperNode = (
    <div className="relative" style={{ width, height }}>
      {imageNode}
      {allowDelete && (
        <div
          className={cn(
            "absolute top-0 left-0 flex justify-end items-start w-full h-full p-1 [&>*]:hidden hover:[&>*]:!inline-block",
            {
              "[&>*]:!inline-block": isDeleting,
            }
          )}
          onClick={onClick}
        >
          <Button
            type="button"
            disabled={isDeleting}
            data-skipeventfortag={skipEventForTag}
            onClick={(evt) => {
              evt.stopPropagation();
              internalOnDelete();
            }}
            variant="outline"
            size="icon"
          >
            {isDeleting ? (
              <LoadingOutlined className="h-4 w-4" />
            ) : (
              <DeleteFilled className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </div>
  );

  return imageWrapperNode;
};

export default ImageWithFallback;
