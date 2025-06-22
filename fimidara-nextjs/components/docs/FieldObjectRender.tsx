import { first } from "lodash-es";
import { MfdocFieldObjectTypePrimitive } from "mfdoc/mfdoc-core";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.tsx";
import FieldObjectAsJson from "./FieldObjectAsJson";
import FieldObjectAsTable from "./FieldObjectAsTable";

const kTableMode = "table" as const;
const kJsonMode = "json" as const;

export interface FieldObjectRenderProps {
  fieldObject: MfdocFieldObjectTypePrimitive<any>;
  modes?: Array<typeof kJsonMode | typeof kTableMode>;
  propName?: string;
  isForJsSdk?: boolean;
}

const FieldObjectRender: React.FC<FieldObjectRenderProps> = (props) => {
  const {
    fieldObject,
    propName,
    isForJsSdk,
    modes = [kJsonMode, kTableMode],
  } = props;

  return (
    <Tabs defaultValue={first(modes)}>
      <TabsList>
        {modes?.includes(kJsonMode) && (
          <TabsTrigger value={kJsonMode}>JSON</TabsTrigger>
        )}
        {modes?.includes(kTableMode) && (
          <TabsTrigger value={kTableMode}>Table</TabsTrigger>
        )}
      </TabsList>
      {modes?.includes(kJsonMode) && (
        <TabsContent value={kJsonMode} className="w-full">
          <FieldObjectAsJson
            fieldObject={fieldObject}
            propName={propName}
            isForJsSdk={isForJsSdk}
          />
        </TabsContent>
      )}
      {modes?.includes(kTableMode) && (
        <TabsContent value={kTableMode} className="w-full">
          <FieldObjectAsTable
            fieldObject={fieldObject}
            propName={propName}
            isForJsSdk={isForJsSdk}
          />
        </TabsContent>
      )}
    </Tabs>
  );
};

export default FieldObjectRender;
