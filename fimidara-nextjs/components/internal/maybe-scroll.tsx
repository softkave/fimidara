"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

export function MaybeScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <div className={cn("h-full overflow-y-auto", className)}>{children}</div>
  ) : (
    <ScrollArea className={cn("h-[calc(100vh)]", className)}>
      {children}
    </ScrollArea>
  );
}
