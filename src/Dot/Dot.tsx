import { type HTMLAttributes, forwardRef, isValidElement } from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "cva"
import { dotVariants } from "./Dot.variants"

export type DotElement = HTMLSpanElement

export type DotProps = Omit<HTMLAttributes<DotElement>, "size"> &
  VariantProps<typeof dotVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Dot = forwardRef<DotElement, DotProps>((props, ref) => {
  const { className, asChild, theme, variant, size, ...rest } = props

  const useAsChild = asChild && isValidElement(rest.children)
  const Component = useAsChild ? Slot : "span"

  return (
    <Component className={dotVariants({ theme, variant, size, className })} ref={ref} {...rest} />
  )
})

Dot.defaultProps = {
  theme: "blue",
  variant: "solid",
  size: "md",
  asChild: false,
}

Dot.displayName = "Dot"
