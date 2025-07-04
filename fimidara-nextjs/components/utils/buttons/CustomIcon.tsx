import { cn } from "@/components/utils";
import { Omit1 } from "@/lib/utils/types";
import Icon from "@ant-design/icons/lib/components/Icon";
import { isFunction } from "lodash-es";
import React from "react";
import { IconType } from "react-icons/lib";

export interface ICustomIconProps {
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  icon: React.ReactElement | IconType;
  onClick?: () => void;
}

export type IExtendsCustomIconProps = Omit1<ICustomIconProps, "icon">;

const CustomIcon: React.FC<ICustomIconProps> = (props) => {
  const { style, className, disabled, icon, onClick } = props;
  return (
    <Icon
      disabled={disabled}
      onClick={onClick}
      className={cn("text-base", className)}
      style={style}
      component={isFunction(icon) ? icon : () => icon}
    >
      {/* {icon} */}
    </Icon>
  );
};

export default React.memo(CustomIcon);
