import { Slot } from "@radix-ui/react-slot"
import type { ButtonHTMLAttributes, ReactElement } from "react"
import { forwardRef, isValidElement } from "react"

import { type VariantProps, cx, isChildrenEmpty } from "../../shared"
import { Slottable } from "../../utils/Slottable"
import { Loader } from "../Loader"

import { buttonAffixVariants, buttonVariants } from "./Button.variants"

export type ButtonElement = HTMLButtonElement

export type ButtonProps = Omit<ButtonHTMLAttributes<ButtonElement>, "size" | "prefix"> &
  Omit<VariantProps<typeof buttonVariants>, "iconOnly"> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * If set to `true`, the button will be rendered in the loading state.
     */
    loading?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactElement<HTMLElement>

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactElement<HTMLElement>
  }

export const Button = forwardRef<ButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    disabled,
    asChild,
    loading,
    prefix,
    suffix,
    theme,
    variant,
    size,
    ...rest
  } = props
  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "button"

  // Determine if the button is icon-only.
  const iconOnly = isChildrenEmpty(children) && (!prefix || !suffix)

  // Render an affix with destructive properties applied.
  const renderAffix = (affix?: ReactElement<HTMLElement>) => {
    const AffixComponent = isValidElement(affix) ? Slot : "span"
    const classNames = cx(buttonAffixVariants({ className: affix?.props.className }))

    return <AffixComponent className={classNames}>{affix}</AffixComponent>
  }

  return (
    <Component
      disabled={disabled ?? loading}
      className={cx(buttonVariants({ theme, variant, size, iconOnly, loading, className }))}
      ref={ref}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            {prefix && renderAffix(prefix)}
            {!isChildrenEmpty(child) && <span className="truncate">{child}</span>}
            {suffix && renderAffix(suffix)}

            {!!loading && <Loader className="absolute" />}
          </>
        )}
      </Slottable>
    </Component>
  )
})

Button.defaultProps = {
  type: "button",
  theme: "primary",
  variant: "solid",
  size: "md",
  asChild: false,
}

Button.displayName = "Button"
