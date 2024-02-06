import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { HTMLAttributes, ReactNode } from "react"

import type { VariantProps } from "../../shared"
import { cx, isChildrenEmpty, isReactElement } from "../../shared"
import { Affixable } from "../../utils/Affixable"
import { Slottable } from "../../utils/Slottable"

import { statusAffixVariants, statusVariants } from "./Status.variants"

export type StatusElement = HTMLSpanElement

export type StatusProps = Omit<HTMLAttributes<StatusElement>, "size" | "prefix"> &
  VariantProps<typeof statusVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode
  }

export const Status = forwardRef<StatusElement, StatusProps>((props, ref) => {
  const { children, className, asChild, prefix, suffix, theme, variant, size, ...rest } = props

  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "span"

  return (
    <Component
      className={cx(statusVariants({ theme, size, variant, className }))}
      ref={ref}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            <Affixable variants={statusAffixVariants}>{prefix}</Affixable>
            {!isChildrenEmpty(child) && <span className="truncate">{child}</span>}
            <Affixable variants={statusAffixVariants}>{suffix}</Affixable>
          </>
        )}
      </Slottable>
    </Component>
  )
})

Status.defaultProps = {
  theme: "blue",
  variant: "outline",
  size: "sm",
  asChild: false,
}

Status.displayName = "Status"
