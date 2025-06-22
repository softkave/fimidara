import { flatten, map } from "lodash-es";
import { MfdocFieldObjectTypePrimitive } from "mfdoc/mfdoc-core";
import React from "react";
import { extractContainedFieldObjects } from "./utils";

export function useContainedFieldObjects(props: {
  fieldObject: MfdocFieldObjectTypePrimitive<any>;
}) {
  const { fieldObject } = props;
  const containedObjects = React.useMemo(() => {
    const objectsMap: Map<
      string | undefined,
      MfdocFieldObjectTypePrimitive<any>
    > = new Map([[fieldObject.name, fieldObject]]);

    objectsMap.forEach((nextObject) => {
      const nextContainedObjects = flatten(
        map(nextObject.fields, (field) =>
          extractContainedFieldObjects(field.data)
        )
      );
      nextContainedObjects.forEach((fieldbase) =>
        objectsMap.set(fieldbase.name, fieldbase)
      );
    });

    return objectsMap;
  }, [fieldObject]);

  return containedObjects;
}
