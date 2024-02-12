import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import type { cva } from "../../shared"
import { cx, isReactElement } from "../../shared"

export type AffixableElement = HTMLElement

export type AffixableProps = HTMLAttributes<AffixableElement> & {
  variants: ReturnType<typeof cva>
}

export const Affixable = forwardRef<AffixableElement, AffixableProps>((props, ref) => {
  const { variants, ...rest } = props
  const Component = isReactElement(props.children) ? Slot : "span"
  // const className = isReactElement(props.children) ? props.children?.props.className : undefined

  if (!props.children) {
    return null
  }

  return <Component ref={ref} className={cx(variants({}))} {...rest} />
})
