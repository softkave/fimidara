import { cn } from "@/components/utils";
import React from "react";
import { StyleableComponentProps } from "../styling/types";

export interface AppIconProps extends StyleableComponentProps {
  icon: React.ReactNode;
}

const AppTabText: React.FC<AppIconProps> = (props) => {
  const { icon: node, className, style } = props;
  return (
    <span className={cn("inline-flex items-center", className)} style={style}>
      {node}
    </span>
  );
};

export default React.memo(AppTabText);
