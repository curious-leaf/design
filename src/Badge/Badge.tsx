import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "cva"
import { isValidElement, type HTMLAttributes, forwardRef, ReactElement } from "react"
import { badgeAffixVariants, badgeVariants } from "./Badge.variants"
import { cx } from "~/shared/cva"
import { Slottable } from "~/Slottable"

export type BadgeElement = HTMLSpanElement

export type BadgeProps = Omit<HTMLAttributes<BadgeElement>, "size" | "prefix"> &
  VariantProps<typeof badgeVariants> & {
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

export const Badge = forwardRef<BadgeElement, BadgeProps>((props, ref) => {
  const { children, className, asChild, prefix, suffix, theme, variant, size, shape, ...rest } =
    props

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "span"

  // Render an affix with destructive properties applied.
  const renderAffix = (affix?: ReactElement<HTMLElement>) => {
    const AffixComponent = isValidElement(affix) ? Slot : "span"
    const classNames = cx(badgeAffixVariants({ className: affix?.props.className }))

    return <AffixComponent className={classNames}>{affix}</AffixComponent>
  }

  return (
    <Component
      className={cx(badgeVariants({ theme, size, variant, shape, className }))}
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

Badge.defaultProps = {
  theme: "blue",
  variant: "solid",
  size: "sm",
  shape: "pill",
  asChild: false,
}
