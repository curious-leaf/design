import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { proseVariants } from "./Prose.variants"

export type ProseElement = HTMLDivElement

export type ProseProps = Omit<HTMLAttributes<ProseElement>, "size"> &
  VariantProps<typeof proseVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Prose = forwardRef<ProseElement, ProseProps>((props, ref) => {
  const { className, asChild, size, ...rest } = props

  const useAsChild = asChild && isReactElement(rest.children)
  const Comp = useAsChild ? Slot : "div"

  return <Comp ref={ref} className={cx(proseVariants({ size, className }))} {...rest} />
})

Prose.defaultProps = {
  size: "md",
  asChild: false,
}

Prose.displayName = "Prose"
