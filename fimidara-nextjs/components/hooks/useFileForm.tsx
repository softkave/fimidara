import { File } from "fimidara";
import { isBoolean } from "lodash-es";
import { useState } from "react";
import FileForm from "../app/workspaces/files/FileForm.tsx";
import { MaybeScroll } from "../internal/maybe-scroll.tsx";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet.tsx";

export function useFileForm(props: {
  workspaceId: string;
  workspaceRootname: string;
  folderpath?: string;
}) {
  const { workspaceId, workspaceRootname, folderpath } = props;
  const [formOpen, setFormOpen] = useState<File | boolean>(false);

  const isNewResourceForm = isBoolean(formOpen);
  const node = (
    <Sheet open={!!formOpen} onOpenChange={setFormOpen}>
      <SheetContent className="w-full max-w-[420px] p-0">
        <MaybeScroll>
          <SheetHeader className="p-6 space-y-2">
            <SheetTitle>
              {isNewResourceForm ? "New Files" : "Update File"}
            </SheetTitle>
          </SheetHeader>
          <FileForm
            workspaceRootname={workspaceRootname}
            workspaceId={workspaceId}
            file={isBoolean(formOpen) ? undefined : formOpen}
            className="p-6 pt-0"
            folderpath={folderpath}
          />
        </MaybeScroll>
      </SheetContent>
    </Sheet>
  );

  return { setFormOpen, node };
}
