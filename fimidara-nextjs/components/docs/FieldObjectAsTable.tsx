import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { forEach, map } from "lodash-es";
import {
  isMfdocCustomType,
  isMfdocFieldArray,
  isMfdocFieldBinary,
  isMfdocFieldBoolean,
  isMfdocFieldDate,
  isMfdocFieldNull,
  isMfdocFieldNumber,
  isMfdocFieldObject,
  isMfdocFieldOrCombination,
  isMfdocFieldString,
  isMfdocFieldUndefined,
  MfdocFieldObjectTypePrimitive,
} from "mfdoc/mfdoc-core";
import React from "react";
import FieldDescription from "./FieldDescription";
import { useContainedFieldObjects } from "./hooks";
import { getTypeNameID } from "./utils";

export interface FieldObjectAsTableProps {
  propName?: string;
  isForJsSdk?: boolean;
  fieldObject: MfdocFieldObjectTypePrimitive<any>;
}

const FieldObjectAsTable: React.FC<FieldObjectAsTableProps> = (props) => {
  const { propName, fieldObject, isForJsSdk } = props;
  const objectsToProcess = useContainedFieldObjects({ fieldObject });
  const nodes = React.useMemo(() => {
    const nodes: React.ReactNode[] = [];
    objectsToProcess.forEach((nextObject, index) => {
      nodes.push(
        renderFieldObjectAsTable(
          nextObject,
          isForJsSdk ?? false,
          index,
          nextObject === fieldObject ? propName : undefined
        )
      );
    });

    return nodes;
  }, [objectsToProcess, fieldObject, isForJsSdk, propName]);

  return <div className="space-y-4">{nodes}</div>;
};

export default FieldObjectAsTable;

type FieldObjectTableColumns = {
  field: string;
  fieldbase: any;
  required?: boolean;
  description?: React.ReactNode;
};

export function renderTableFieldType(
  data: any,
  isForJsSdk: boolean
): React.ReactNode {
  if (isMfdocFieldString(data)) {
    return <code>string</code>;
  } else if (isMfdocFieldNumber(data)) {
    return <code>number</code>;
  } else if (isMfdocFieldBoolean(data)) {
    return <code>boolean</code>;
  } else if (isMfdocFieldNull(data)) {
    return <code>null</code>;
  } else if (isMfdocFieldUndefined(data)) {
    return <code>undefined</code>;
  } else if (isMfdocFieldDate(data)) {
    return <code>number</code>;
  } else if (isMfdocFieldArray(data)) {
    if (!data.type) return "";
    const containedTypeNode = renderTableFieldType(data.type, isForJsSdk);
    return (
      <span>
        <code>array</code> of {containedTypeNode}
      </span>
    );
  } else if (isMfdocFieldObject(data)) {
    return data.name ? (
      <a href={`#${getTypeNameID(data.name)}`}>
        <code className="line-clamp-1">{data.name}</code>
      </a>
    ) : null;
  } else if (isMfdocFieldOrCombination(data)) {
    if (!data.types) return "";
    const nodes: React.ReactNode[] = [];

    forEach(data.types, (type) => {
      const node = renderTableFieldType(type, isForJsSdk);
      if (nodes.length) nodes.push(" or ", node);
      else nodes.push(node);
    });

    return nodes;
  } else if (isMfdocFieldBinary(data)) {
    return (
      <span>
        <code>string</code> |<br />
        <a href="https://nodejs.org/api/stream.html#class-streamreadable">
          <code className="line-clamp-1">Node.js Readable</code>
        </a>{" "}
        |<br />
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream">
          <code className="line-clamp-1">Browser ReadableStream</code>
        </a>{" "}
      </span>
    );
  } else if (isMfdocCustomType(data)) {
    if (data.descriptionLink) {
      return (
        <a href={data.descriptionLink}>
          <code>{data.name}</code>
        </a>
      );
    } else {
      return <code className="line-clamp-1">{data.name}</code>;
    }
  }

  return <code>unknown</code>;
}

function renderFieldObjectAsTable(
  nextObject: MfdocFieldObjectTypePrimitive<any>,
  isForJsSdk: boolean,
  index: number | string | undefined,
  propName?: string
) {
  const rows = map(
    nextObject.fields,
    (fieldbase, key): FieldObjectTableColumns => {
      return {
        field: key,
        fieldbase: fieldbase.data,
        required: fieldbase.required,
        description: fieldbase.data.description,
      };
    }
  );

  return (
    <div key={nextObject.name || index}>
      <div className="space-x-2 flex mb-4">
        {propName && <code>{propName}</code>}
        {nextObject.name && (
          <h5 id={getTypeNameID(nextObject.name)} className="text-secondary">
            {nextObject.name}
          </h5>
        )}
      </div>
      <FieldDescription fieldbase={nextObject} style={{ margin: 0 }} />
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Field</TableHead>
              <TableHead className="w-[150px]">Type</TableHead>
              <TableHead className="w-[80px]">Required</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="font-mono">
                  <code>{row.field}</code>
                </TableCell>
                <TableCell>
                  {renderTableFieldType(row.fieldbase, isForJsSdk)}
                </TableCell>
                <TableCell>{row.required ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <FieldDescription
                    fieldbase={row.fieldbase}
                    className="[&_.ant-typography]:m-0"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
