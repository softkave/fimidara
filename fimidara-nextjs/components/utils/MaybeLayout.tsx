import { useServerUserLoggedIn } from "@/lib/hooks/session/useServerUserLoggedIn.ts";
import { use } from "react";
import { AppLayout } from "./AppLayout.tsx";
import { WebLayout } from "./WebLayout.tsx";

export interface IMaybeLayoutProps {
  children?: React.ReactNode;
  isDocs: boolean;
  shouldRedirectToWorkspace: boolean;
  contentClassName?: string;
}

export const MaybeLayout = (props: IMaybeLayoutProps) => {
  const { children, isDocs, shouldRedirectToWorkspace, contentClassName } =
    props;
  const isLoggedIn = use(useServerUserLoggedIn());

  return isLoggedIn ? (
    <AppLayout contentClassName={contentClassName}>{children}</AppLayout>
  ) : (
    <WebLayout
      isDocs={isDocs}
      shouldRedirectToWorkspace={shouldRedirectToWorkspace}
      contentClassName={contentClassName}
    >
      {children}
    </WebLayout>
  );
};
