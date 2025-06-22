import { cn } from "@/components/utils";
import React from "react";

export interface IButtonGroupProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const ButtonGroup: React.FC<IButtonGroupProps> = (props) => {
  const { style, className, children } = props;
  return (
    <div
      className={cn(
        className,
        "[&_.ant-btn]:rounded-none [&_.ant-btn]:border-l-0",
        "[&_.ant-btn:first-of-type]:rounded-l [&_.ant-btn:first-of-type]:border-l",
        "[&_.ant-btn:last-of-type]:rounded-r"
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default React.memo(ButtonGroup);
