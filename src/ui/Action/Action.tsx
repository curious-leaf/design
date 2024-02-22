"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"

import { IconSpinner } from "../../icons/IconSpinner"
import { type VariantProps, cx, isChildrenEmpty, isReactElement } from "../../shared"
import { Affixable } from "../../utils/Affixable"
import { Slottable } from "../../utils/Slottable"

import { actionAffixVariants, actionVariants } from "./Action.variants"

export type ActionElement = HTMLButtonElement

export type ActionProps = Omit<ButtonHTMLAttributes<ActionElement>, "size" | "prefix"> &
  Omit<VariantProps<typeof actionVariants>, "isAffixOnly"> & {
    /**
     * If set to `true`, the action will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * If set to `true`, the action will be rendered in the pending state.
     */
    isPending?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode
  }

export const Action = forwardRef<ActionElement, ActionProps>((props, ref) => {
  const { children, className, disabled, asChild, isPending, prefix, suffix, ...rest } = props

  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  return (
    <Component
      ref={ref}
      disabled={disabled ?? isPending}
      className={cx(actionVariants({ isPending, className }))}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            <Affixable variants={actionAffixVariants}>{prefix}</Affixable>
            {!isChildrenEmpty(child) && <span className="truncate">{child}</span>}
            <Affixable variants={actionAffixVariants}>{suffix}</Affixable>

            {!!isPending && <IconSpinner className="absolute" />}
          </>
        )}
      </Slottable>
    </Component>
  )
})

Action.defaultProps = {
  type: "submit",
  asChild: false,
}

Action.displayName = "Action"
