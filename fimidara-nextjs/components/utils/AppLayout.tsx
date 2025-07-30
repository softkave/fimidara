"use client";

import { Suspense } from "react";
import AppHeader from "../app/AppHeader.tsx";
import FimidaraSideNav from "../app/FimidaraSideNav.tsx";
import { usePageAuthRequired } from "../hooks/usePageAuthRequired.tsx";
import { MaybeScroll } from "../internal/maybe-scroll.tsx";
import { cn } from "../utils.ts";

export interface IAppLayoutProps {
  children?: React.ReactNode;
  contentClassName?: string;
}

const AppLayoutImpl = (props: IAppLayoutProps) => {
  const { children, contentClassName } = props;

  return usePageAuthRequired({
    render() {
      return (
        <div className="flex flex-1 max-h-screen">
          <FimidaraSideNav />
          <div className="flex-1 flex flex-col">
            <AppHeader />
            <MaybeScroll>
              <div
                className={cn(
                  "mx-auto p-4 flex-1 w-full max-w-lg",
                  contentClassName
                )}
              >
                {children}
              </div>
            </MaybeScroll>
          </div>
        </div>
      );
    },
  });
};

export const AppLayout = (props: IAppLayoutProps) => {
  return (
    <Suspense fallback={null}>
      <AppLayoutImpl {...props} />
    </Suspense>
  );
};
