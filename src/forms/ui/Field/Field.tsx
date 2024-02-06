import type { HTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

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
          <FormLabel data-required={required}>{label}</FormLabel>
          <TooltipIcon className="ml-auto" content={tooltip} align="end" />
          {sideHint && <FormDescription className="w-full" content={sideHint} />}
        </div>
      )}

      <div className={cx(fieldContentVariants())}>
        {children}

        <FormMessage />
        {hint && <FormDescription content={hint} />}
      </div>
    </div>
  )
})
