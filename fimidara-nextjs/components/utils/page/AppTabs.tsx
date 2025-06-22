import { cn } from "@/components/utils";
import { AnyFn } from "@/lib/utils/types";
import React from "react";
import { StyleableComponentProps } from "../styling/types";

export type AppTabItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
};

export interface AppTabsProps extends StyleableComponentProps {
  activeKey?: string;
  activeKeyClassName?: string;
  itemClassName?: string;
  items: Array<AppTabItem>;
  onChange: AnyFn<[string, AppTabItem], void>;
}

const AppTabs: React.FC<AppTabsProps> = (props) => {
  const {
    activeKey,
    activeKeyClassName,
    itemClassName,
    items,
    style,
    className,
    onChange,
  } = props;

  const itemsNode = items.map((item) => {
    const active = item.key === activeKey;
    return (
      <div
        key={item.key}
        onClick={() => onChange(item.key, item)}
        className={cn(
          "inline-flex items-center mx-4 leading-8 py-1 cursor-pointer first:ml-0 last:mr-0",
          active && "font-bold",
          itemClassName,
          active && activeKeyClassName
        )}
      >
        {item.icon && (
          <span className="inline-flex items-center mr-2 leading-8 [&>svg]:text-sm">
            {item.icon}
          </span>
        )}
        {item.label}
      </div>
    );
  });
  return (
    <div style={style} className={cn("flex flex-row", className)}>
      {itemsNode}
    </div>
  );
};

export default AppTabs;
