import { AgentToken } from "fimidara";
import { isBoolean } from "lodash-es";
import { useState } from "react";
import AgentTokenForm from "../app/workspaces/agentTokens/AgentTokenForm.tsx";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet.tsx";
import { MaybeScroll } from "../internal/maybe-scroll.tsx";

export function useAgentTokenForm(props: { workspaceId: string }) {
  const { workspaceId } = props;
  const [formOpen, setFormOpen] = useState<AgentToken | boolean>(false);

  const isNewResourceForm = isBoolean(formOpen);
  const node = formOpen && (
    <Sheet open={!!formOpen} onOpenChange={setFormOpen}>
      <SheetContent className="w-full max-w-[420px] p-0">
        <MaybeScroll className="h-full overflow-y-auto">
          <SheetTitle className="p-6">
            {isNewResourceForm ? "New Agent Token" : "Update Agent Token"}
          </SheetTitle>
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
