import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { cx, isReactElement, type VariantProps } from "../../shared"

import { sectionVariants } from "./Section.variants"

export type SectionElement = HTMLElement

export type SectionProps = HTMLAttributes<SectionElement> &
  VariantProps<typeof sectionVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Section = forwardRef<SectionElement, SectionProps>((props, ref) => {
  const { className, asChild, ...rest } = props

  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "section"

  return <Component ref={ref} className={cx(sectionVariants({ className }))} {...rest} />
})

Section.defaultProps = {
  asChild: false,
}

Section.displayName = "Section"
