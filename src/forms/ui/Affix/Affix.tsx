import type { InputHTMLAttributes, ReactNode } from "react"
import { forwardRef, useEffect, useRef, useState } from "react"

import type { VariantProps } from "../../../shared"
import { createSimpleContext, cx, getElementWidth } from "../../../shared"
import { Affixable } from "../../../utils/Affixable"

import { affixGroupVariants, affixVariants } from "./Affix.variants"

export type AffixContext = {
  prefixWidth?: number
  suffixWidth?: number
}

const AffixContext = createSimpleContext<AffixContext>("Affix")

export type AffixElement = HTMLDivElement

export type AffixProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> &
  VariantProps<typeof affixGroupVariants> &
  VariantProps<typeof affixVariants> & {
    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
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
        <Affixable ref={prefixRef} variants={affixVariants}>
          {prefix}
        </Affixable>

        {children}

        <Affixable ref={suffixRef} variants={affixVariants}>
          {suffix}
        </Affixable>
      </div>
    </AffixContext.Provider>
  )
})

export const useAffix = AffixContext.useValue

Affix.displayName = "Affix"
