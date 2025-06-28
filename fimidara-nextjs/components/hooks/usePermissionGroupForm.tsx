import { PermissionGroup } from "fimidara";
import { isBoolean } from "lodash-es";
import { useState } from "react";
import PermissionGroupForm from "../app/workspaces/permissionGroups/PermissionGroupForm.tsx";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet.tsx";

export function usePermissionGroupForm(props: { workspaceId: string }) {
  const { workspaceId } = props;
  const [formOpen, setFormOpen] = useState<PermissionGroup | boolean>(false);

  const isNewResourceForm = isBoolean(formOpen);
  const node = formOpen && (
    <Sheet open={!!formOpen} onOpenChange={setFormOpen}>
      <SheetContent className="w-full max-w-[420px] p-0">
        <SheetHeader className="p-6 space-y-2">
          <SheetTitle>
            {isNewResourceForm
              ? "New Permission Group"
              : "Update Permission Group"}
          </SheetTitle>
        </SheetHeader>
        <PermissionGroupForm
          workspaceId={workspaceId}
          permissionGroup={isBoolean(formOpen) ? undefined : formOpen}
          className="p-6 pt-0"
        />
      </SheetContent>
    </Sheet>
  );

  return { setFormOpen, node };
}
