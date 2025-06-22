import { Folder } from "fimidara";
import { isBoolean } from "lodash-es";
import { useState } from "react";
import FolderForm from "../app/workspaces/files/FolderForm.tsx";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet.tsx";
import { MaybeScroll } from "../internal/maybe-scroll.tsx";

export function useFolderForm(props: {
  workspaceId: string;
  workspaceRootname: string;
  folderpath?: string;
}) {
  const { workspaceId, workspaceRootname, folderpath } = props;
  const [formOpen, setFormOpen] = useState<Folder | boolean>(false);

  const isNewResourceForm = isBoolean(formOpen);
  const node = formOpen && (
    <Sheet open={!!formOpen} onOpenChange={setFormOpen}>
      <SheetContent className="w-full max-w-[420px] p-0">
        <MaybeScroll className="h-full overflow-y-auto">
          <SheetTitle className="p-6">
            {isNewResourceForm ? "New Folder" : "Update Folder"}
          </SheetTitle>
          <FolderForm
            workspaceRootname={workspaceRootname}
            workspaceId={workspaceId}
            folder={isBoolean(formOpen) ? undefined : formOpen}
            className="p-6 pt-0"
            parentPath={folderpath}
          />
        </MaybeScroll>
      </SheetContent>
    </Sheet>
  );

  return { setFormOpen, node };
}
