import type { HTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { Hint } from "../Hint/Hint"
import { Label } from "../Label/Label"

import { fieldVariants, fieldLabelVariants, fieldContentVariants } from "./Field.variants"

export type FieldElement = HTMLDivElement

export type FieldProps = HTMLAttributes<FieldElement> &
  VariantProps<typeof fieldVariants> & {
    /**
     * The label for the field.
     */
    label?: ReactNode

    /**
     * The hint text for the field.
     */
    hint?: ReactNode

    /**
     * The side hint text for the field.
     */
    sideHint?: ReactNode

    /**
     * The tooltip text for the field.
     */
    tooltip?: ReactNode

    /**
     * Indicates if the field is required.
     */
    required?: boolean
  }

export const Field = forwardRef<FieldElement, FieldProps>((props, ref) => {
  const { children, className, label, hint, sideHint, tooltip, required, ...rest } = props

  return (
    <div ref={ref} className={cx(fieldVariants({ className }))} {...rest}>
      {label && (
        <div className={cx(fieldLabelVariants())}>
          <Label required={required}>{label}</Label>
          {/* <TooltipIcon className="ml-auto" content={tooltip} align="end" /> */}
          {sideHint && <Hint className="w-full">{sideHint}</Hint>}
        </div>
      )}

      <div className={cx(fieldContentVariants())}>
        {children}
        {hint && <Hint>{hint}</Hint>}
      </div>
    </div>
  )
})
