import { Slot } from "@radix-ui/react-slot"
import type { ButtonHTMLAttributes, ReactElement } from "react"
import { forwardRef, isValidElement } from "react"

import { type VariantProps, cx } from "~/shared/cva"
import { isChildrenEmpty } from "~/shared/helpers"
import { Loader } from "~/ui/Loader"
import { Slottable } from "~/utils/Slottable"

import { buttonAffixVariants, buttonVariants } from "./Button.variants"

export type ButtonElement = HTMLButtonElement

export type ButtonProps = Omit<ButtonHTMLAttributes<ButtonElement>, "size" | "prefix"> &
  VariantProps<typeof buttonVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * If set to `true`, the button will be rendered in the loading state.
     */
    isLoading?: boolean

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
    isLoading,
    prefix,
    suffix,
    theme,
    variant,
    size,
    shape,
    ...rest
  } = props

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "button"

  // Render an affix with destructive properties applied.
  const renderAffix = (affix?: ReactElement<HTMLElement>) => {
    const AffixComponent = isValidElement(affix) ? Slot : "span"
    const classNames = cx(buttonAffixVariants({ className: affix?.props.className }))

    return <AffixComponent className={classNames}>{affix}</AffixComponent>
  }

  return (
    <Component
      disabled={disabled ?? isLoading}
      className={cx(buttonVariants({ theme, variant, size, shape, className }))}
      ref={ref}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            <div className={cx("contents", isLoading && "text-transparent")}>
              {prefix && renderAffix(prefix)}

              {!isChildrenEmpty(child) && <span className="truncate">{child}</span>}

              {suffix && renderAffix(suffix)}
            </div>

            {!!isLoading && <Loader className="absolute" />}
          </>
        )}
      </Slottable>
    </Component>
  )
})

Button.defaultProps = {
  theme: "blue",
  variant: "solid",
  size: "lg",
  shape: "rounded",
  asChild: false,
}

Button.displayName = "Button"