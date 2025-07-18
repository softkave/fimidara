import { map } from "lodash-es";
import {
  isMfdocCustomType,
  isMfdocFieldArray,
  isMfdocFieldBinary,
  isMfdocFieldBoolean,
  isMfdocFieldDate,
  isMfdocFieldNumber,
  isMfdocFieldOrCombination,
  isMfdocFieldString,
  MfdocFieldBaseTypePrimitive,
} from "mfdoc/mfdoc-core";
import prettyBytes from "pretty-bytes";
import React from "react";
import { Separator } from "../ui/separator.tsx";
import { cn } from "../utils.ts";
import { StyleableComponentProps } from "../utils/styling/types";

export interface FieldDescriptionProps extends StyleableComponentProps {
  fieldbase: any;
  type?: "secondary";
}

const FieldDescription: React.FC<FieldDescriptionProps> = (props) => {
  const { fieldbase, style, className, type } = props;
  const nodes: React.ReactNode[] = [];
  if (
    fieldbase &&
    (fieldbase as Pick<MfdocFieldBaseTypePrimitive, "description">)
  ) {
    nodes.push(
      <p
        key="description"
        className={type === "secondary" ? "text-secondary" : undefined}
      >
        {fieldbase.description}
      </p>
    );
  }

  if (isMfdocFieldString(fieldbase)) {
    if (fieldbase.valid) {
      nodes.push(
        <p key="string-enum">
          <strong>Enum</strong>:{" "}
          {map(fieldbase.valid, (enumString) => (
            <code>{enumString}</code>
          ))}
        </p>
      );
    }
    if (fieldbase.min) {
      nodes.push(
        <p key="string-min">
          <strong>Min characters</strong>: {fieldbase.min}
        </p>
      );
    }
    if (fieldbase.max) {
      nodes.push(
        <p key="string-max">
          <strong>Max characters</strong>: {fieldbase.max}
        </p>
      );
    }
    if (fieldbase.example) {
      nodes.push(
        <p key="string-example">
          <strong>Example</strong>: {fieldbase.example}
        </p>
      );
    }
  } else if (isMfdocFieldNumber(fieldbase)) {
    if (fieldbase.integer) {
      nodes.push(
        <p key="number-subset">
          <strong>Number subset</strong>: <code>integer</code> only
        </p>
      );
    } else {
      nodes.push(
        <p key="number-subset">
          <strong>Number subset</strong>: <code>floating point</code> or{" "}
          <code>integer</code>
        </p>
      );
    }

    if (fieldbase.min) {
      nodes.push(
        <p key="number-min">
          <strong>Min</strong>: {fieldbase.min}
        </p>
      );
    }
    if (fieldbase.max) {
      nodes.push(
        <p key="number-max">
          <strong>Max</strong>: {fieldbase.max}
        </p>
      );
    }
    if (fieldbase.example) {
      nodes.push(
        <p key="number-example">
          <strong>Example</strong>: {fieldbase.example}
        </p>
      );
    }
  } else if (isMfdocFieldBoolean(fieldbase)) {
    if (fieldbase.example) {
      nodes.push(
        <p key="boolean-example">
          <strong>Example</strong>: {fieldbase.example}
        </p>
      );
    }
  } else if (isMfdocFieldDate(fieldbase)) {
    nodes.push(
      <p key="date-fieldbase-type">
        <code>unix milliseconds timestamp</code>
      </p>
    );

    if (fieldbase.example) {
      nodes.push(
        <p key="date-example">
          <strong>Example</strong>: {fieldbase.example}
        </p>
      );
    }
  } else if (isMfdocFieldArray(fieldbase)) {
    if (fieldbase.min) {
      nodes.push(
        <p key="array-min">
          <strong>Min items</strong>: {fieldbase.min}
        </p>
      );
    }
    if (fieldbase.max) {
      nodes.push(
        <p key="array-max">
          <strong>Max items</strong>: {fieldbase.max}
        </p>
      );
    }
  } else if (isMfdocFieldBinary(fieldbase)) {
    if (fieldbase.min) {
      nodes.push(
        <p key="binary-min">
          <strong>Min bytes</strong>: {prettyBytes(fieldbase.min)}
        </p>
      );
    }
    if (fieldbase.max) {
      nodes.push(
        <p key="binary-max">
          <strong>Max bytes</strong>: {prettyBytes(fieldbase.max)}
        </p>
      );
    }
  } else if (isMfdocCustomType(fieldbase)) {
    if (fieldbase.descriptionLink) {
      nodes.push(
        <p key="custom-type-description-link">
          <strong>Link</strong>:{" "}
          <a href={fieldbase.descriptionLink}>{fieldbase.descriptionLink}</a>
        </p>
      );
    }
  } else if (isMfdocFieldOrCombination(fieldbase)) {
    const descriptions = map(fieldbase.types ?? {}, (type, i) => (
      <React.Fragment key={i}>
        {Number(i) != 0 && <Separator />}
        <FieldDescription fieldbase={type} />
      </React.Fragment>
    ));
    nodes.push(...descriptions);
  }

  return (
    <div style={style} className={cn("my-0.5", className)}>
      {nodes}
    </div>
  );
};

export default FieldDescription;
