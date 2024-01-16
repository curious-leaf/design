import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef, isValidElement } from "react"

import { type VariantProps, cx } from "~/shared/cva"

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

  const useAsChild = asChild && isValidElement(rest.children)
  const Comp = useAsChild ? Slot : "p"

  return (
    <Comp className={cx(paragraphVariants({ size, variant, className }))} ref={ref} {...rest} />
  )
})

Paragraph.defaultProps = {
  size: "md",
  variant: "regular",
  asChild: false,
}

Paragraph.displayName = "Paragraph"
