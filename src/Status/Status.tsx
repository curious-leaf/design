import { type HTMLAttributes, ReactElement, forwardRef, isValidElement } from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "cva"
import { Slottable } from "../Slottable"
import { cx } from "../shared/cva"
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
    prefix?: ReactElement<HTMLElement>

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactElement<HTMLElement>
  }

export const Status = forwardRef<StatusElement, StatusProps>((props, ref) => {
  const { children, className, asChild, prefix, suffix, theme, variant, size, ...rest } = props

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "span"

  // Render an affix with destructive properties applied.
  const renderAffix = (affix?: ReactElement<HTMLElement>) => {
    const AffixComponent = isValidElement(affix) ? Slot : "span"
    const classNames = cx(statusAffixVariants({ theme, className: affix?.props.className }))

    return <AffixComponent className={classNames}>{affix}</AffixComponent>
  }

  return (
    <Component
      className={cx(statusVariants({ theme, size, variant, className }))}
      ref={ref}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            {prefix && renderAffix(prefix)}
            {child}
            {suffix && renderAffix(suffix)}
          </>
        )}
      </Slottable>
    </Component>
  )
})

Status.defaultProps = {
  theme: "gray",
  variant: "outline",
  size: "sm",
  asChild: false,
}

Status.displayName = "Status"
