import { Folder } from "fimidara";
import { isBoolean } from "lodash-es";
import { useState } from "react";
import FolderForm from "../app/workspaces/files/FolderForm.tsx";
import { MaybeScroll } from "../internal/maybe-scroll.tsx";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet.tsx";

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
        <MaybeScroll>
          <SheetHeader className="p-6 space-y-2">
            <SheetTitle>
              {isNewResourceForm ? "New Folder" : "Update Folder"}
            </SheetTitle>
          </SheetHeader>
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
