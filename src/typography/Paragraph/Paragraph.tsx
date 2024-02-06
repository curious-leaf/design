import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { paragraphVariants } from "./Paragraph.variants"

export type ParagraphElement = HTMLParagraphElement

export type ParagraphProps = Omit<HTMLAttributes<ParagraphElement>, "size"> &
  VariantProps<typeof paragraphVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Paragraph = forwardRef<ParagraphElement, ParagraphProps>((props, ref) => {
  const { className, asChild, size, variant, ...rest } = props

  const useAsChild = asChild && isReactElement(rest.children)
  const Comp = useAsChild ? Slot : "p"

  return (
    <Comp ref={ref} className={cx(paragraphVariants({ size, variant, className }))} {...rest} />
  )
})

Paragraph.defaultProps = {
  size: "md",
  variant: "regular",
  asChild: false,
}

Paragraph.displayName = "Paragraph"
