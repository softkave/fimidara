import { map } from "lodash-es";
import {
  isMfdocFieldArray,
  isMfdocFieldObject,
  isMfdocFieldOrCombination,
  MfdocFieldObjectTypePrimitive,
} from "mfdoc/mfdoc-core";

export function extractContainedFieldObjects(
  data: any
): MfdocFieldObjectTypePrimitive<any>[] {
  if (isMfdocFieldArray(data)) {
    if (data.type) {
      return extractContainedFieldObjects(data.type);
    }
  } else if (isMfdocFieldObject(data)) {
    let containedObjects = [data];

    if (data.fields) {
      containedObjects = containedObjects.concat(
        ...map(data.fields, (field) => extractContainedFieldObjects(field.data))
      );
    }

    return containedObjects;
  } else if (isMfdocFieldOrCombination(data)) {
    if (data.types) {
      const containedObjects: MfdocFieldObjectTypePrimitive<any>[] = [];
      return containedObjects.concat(
        ...map(data.types, extractContainedFieldObjects)
      );
    }
  }

  return [];
}

export function fieldObjectHasRequiredFields(
  item: MfdocFieldObjectTypePrimitive<any>
) {
  return item.fields
    ? Object.values(item.fields).findIndex((next) => next.required) !== -1
    : false;
}

export function getTypeNameID(name: string) {
  return `fimidara__docs__${name}`;
}
