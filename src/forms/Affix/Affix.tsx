import { Slot } from "@radix-ui/react-slot"
import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes, InputHTMLAttributes, ReactElement } from "react"
import { forwardRef, isValidElement, useRef } from "react"

import { createSimpleContext, cx } from "../../shared"

import { affixGroupVariants, affixVariants } from "./Affix.variants"

export type AffixContext = {
  prefixWidth?: number
  suffixWidth?: number
}

const AffixContext = createSimpleContext<AffixContext>("Affix")

export type AffixElement = HTMLDivElement

type AffixSlotProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof affixVariants> & {
    children?: ReactElement<HTMLElement>
  }

const AffixSlot = forwardRef<HTMLElement, AffixSlotProps>((props, ref) => {
  const { children, side, events, ...rest } = props

  const AffixComponent = isValidElement(children) ? Slot : "span"
  const classNames = cx(affixVariants({ side, events, className: children?.props.className }))

  return (
    <AffixComponent ref={ref} className={classNames} {...rest}>
      {children}
    </AffixComponent>
  )
})

export type AffixProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> &
  VariantProps<typeof affixGroupVariants> &
  VariantProps<typeof affixVariants> & {
    prefix?: ReactElement<HTMLElement>
    suffix?: ReactElement<HTMLElement>
  }

export const Affix = forwardRef<AffixElement, AffixProps>((props, ref) => {
  const { children, className, prefix, suffix, events, ...rest } = props
  const prefixRef = useRef<HTMLElement>(null)
  const suffixRef = useRef<HTMLElement>(null)

  if (!prefix && !suffix) {
    return <>{children}</>
  }

  return (
    <AffixContext.Provider
      value={{
        prefixWidth: prefixRef.current?.offsetWidth,
        suffixWidth: suffixRef.current?.offsetWidth,
      }}
    >
      <div ref={ref} className={cx(affixGroupVariants({ className }))} {...rest}>
        {prefix && (
          <AffixSlot ref={prefixRef} side="left" events={events}>
            {prefix}
          </AffixSlot>
        )}

        {children}

        {suffix && (
          <AffixSlot ref={suffixRef} side="right" events={events}>
            {suffix}
          </AffixSlot>
        )}
      </div>
    </AffixContext.Provider>
  )
})

export const useAffix = AffixContext.useValue

Affix.defaultProps = {
  events: false,
}

Affix.displayName = "Affix"
