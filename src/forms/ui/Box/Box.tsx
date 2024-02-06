import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"

// import { formInputVariants } from "~/components/form/controls/input"

import type { VariantProps } from "../../../shared"

import { boxGroupVariants } from "./Box.variants"

export type BoxProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /**
   * The label for the box.
   */
  label?: ReactNode

  /**
   * The slot to be rendered after the label.
   */
  suffix?: ReactNode
}

export const Box = forwardRef<HTMLLabelElement, BoxProps>((props, ref) => {
  const { children, className, label, suffix, ...rest } = props

  return (
    <label
      ref={ref}
      // className={formInputVariants({ hoverable: true, fullWidth: false, className })}
      {...rest}
    >
      {children}

      {label && (
        <span className="truncate text-sm font-medium peer-data-[state=unchecked]:opacity-75">
          {label}
        </span>
      )}

      <Slot className="ml-auto">{suffix}</Slot>
    </label>
  )
})

export const BoxGroup = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement> & VariantProps<typeof boxGroupVariants>
>(({ className, boxed, ...props }, ref) => {
  return <div ref={ref} className={boxGroupVariants({ boxed, className })} {...props} />
})
