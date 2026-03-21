import type { ComponentPropsWithoutRef } from "react";

import { useFormikContext } from "formik";

import { Button } from "../button";
import { useMultiStep } from "@/multi-step";

export function BackButton(props: ComponentPropsWithoutRef<"button">) {
  const { values } = useFormikContext();
  const { onBack } = useMultiStep();
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={() => onBack(values as object)}
      {...props}
    />
  );
}
