import { Slot } from "@radix-ui/react-slot"
import { forwardRef, isValidElement } from "react"
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react"

import { Header } from "~/layout/Header"
import { type VariantProps, cx } from "~/shared/cva"

import { boxFooterVariants, boxVariants } from "./Box.variants"

export type BoxElement = HTMLDivElement

type BoxVariantProps = VariantProps<typeof boxVariants> & VariantProps<typeof boxFooterVariants>

export type BoxProps = HTMLAttributes<BoxElement> &
  BoxVariantProps & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const BoxRoot = forwardRef<BoxElement, BoxProps>((props, ref) => {
  const { className, asChild, padded, ...rest } = props

  const useAsChild = asChild && isValidElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(boxVariants({ padded, className }))} {...rest} />
})

const BoxHeader = forwardRef<ElementRef<typeof Header>, ComponentPropsWithoutRef<typeof Header>>(
  (props, ref) => {
    return <Header ref={ref} {...props} />
  },
)

const BoxFooter = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof boxFooterVariants>
>(({ className, padded, ...rest }, ref) => {
  return <div ref={ref} className={cx(boxFooterVariants({ padded, className }))} {...rest} />
})

const BoxBase = forwardRef<BoxElement, BoxProps>((props, ref) => {
  return <BoxRoot ref={ref} {...props} />
})

BoxBase.displayName = "Box"
BoxRoot.displayName = "BoxRoot"
BoxHeader.displayName = "BoxHeader"
BoxFooter.displayName = "BoxFooter"

export const Box = Object.assign(BoxBase, {
  Header: BoxHeader,
  Footer: BoxFooter,
  Root: BoxRoot,
})

Box.defaultProps = {
  padded: true,
  asChild: false,
}
