import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react"
import { forwardRef, isValidElement, useEffect, useRef, useState } from "react"

import type { VariantProps } from "../../../shared"
import { createSimpleContext, cx, getElementWidth } from "../../../shared"

import { affixGroupVariants, affixVariants } from "./Affix.variants"

export type AffixContext = {
  prefixWidth?: number
  suffixWidth?: number
}

const AffixContext = createSimpleContext<AffixContext>("Affix")

export type AffixElement = HTMLDivElement

type AffixSlotProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof affixVariants> & {
    children?: ReactNode
  }

const AffixSlot = forwardRef<HTMLElement, AffixSlotProps>(({ side, ...props }, ref) => {
  const Component = isValidElement(props.children) ? Slot : "span"

  return <Component ref={ref} className={cx(affixVariants({ side }))} {...props} />
})

export type AffixProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> &
  VariantProps<typeof affixGroupVariants> &
  VariantProps<typeof affixVariants> & {
    prefix?: ReactNode
    suffix?: ReactNode
  }

export const Affix = forwardRef<AffixElement, AffixProps>((props, ref) => {
  const { children, className, prefix, suffix, ...rest } = props
  const [prefixWidth, setPrefixWidth] = useState<number>()
  const [suffixWidth, setSuffixWidth] = useState<number>()
  const prefixRef = useRef<HTMLElement>(null)
  const suffixRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setPrefixWidth(getElementWidth(prefixRef.current, true))
    setSuffixWidth(getElementWidth(suffixRef.current, true))
  }, [])

  if (!prefix && !suffix) {
    return <>{children}</>
  }

  return (
    <AffixContext.Provider value={{ prefixWidth, suffixWidth }}>
      <div ref={ref} className={cx(affixGroupVariants({ className }))} {...rest}>
        {prefix && (
          <AffixSlot ref={prefixRef} side="left">
            {prefix}
          </AffixSlot>
        )}

        {children}

        {suffix && (
          <AffixSlot ref={suffixRef} side="right">
            {suffix}
          </AffixSlot>
        )}
      </div>
    </AffixContext.Provider>
  )
})

export const useAffix = AffixContext.useValue

Affix.displayName = "Affix"
