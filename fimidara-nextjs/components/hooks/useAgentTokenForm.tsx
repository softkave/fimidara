import { AgentToken } from "fimidara";
import { isBoolean } from "lodash-es";
import { useState } from "react";
import AgentTokenForm from "../app/workspaces/agentTokens/AgentTokenForm.tsx";
import { MaybeScroll } from "../internal/maybe-scroll.tsx";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet.tsx";

export function useAgentTokenForm(props: { workspaceId: string }) {
  const { workspaceId } = props;
  const [formOpen, setFormOpen] = useState<AgentToken | boolean>(false);

  const isNewResourceForm = isBoolean(formOpen);
  const node = formOpen && (
    <Sheet open={!!formOpen} onOpenChange={setFormOpen}>
      <SheetContent className="w-full max-w-[420px] p-0">
        <MaybeScroll>
          <SheetHeader className="p-6 space-y-2">
            <SheetTitle>
              {isNewResourceForm ? "New Agent Token" : "Update Agent Token"}
            </SheetTitle>
          </SheetHeader>
          <AgentTokenForm
            workspaceId={workspaceId}
            agentToken={isBoolean(formOpen) ? undefined : formOpen}
            className="p-6 pt-0"
          />
        </MaybeScroll>
      </SheetContent>
    </Sheet>
  );

  return { setFormOpen, node };
}
