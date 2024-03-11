"use client"

import { Slot } from "@radix-ui/react-slot"
import { type HTMLAttributes, ReactNode, forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { formatIntervalAmount } from "@curiousleaf/utils"
import { IconCheck } from "../../icons/IconCheck"
import { IconClose } from "../../icons/IconClose"
import { H3 } from "../../typography/Heading"
import { Paragraph } from "../../typography/Paragraph"
import { Card } from "../Card"
import { Series } from "../Series"
import { planFeatureCheckVariants, planFeatureVariants, planVariants } from "./Plan.variants"

export type PlanElement = HTMLDivElement

export type PlanProps = Omit<HTMLAttributes<PlanElement>, "size"> &
  VariantProps<typeof planVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * The price of the plan.
     */
    price: {
      /**
       * The unit amount of the price.
       */
      amount: number

      /**
       * The interval of the price.
       */
      interval: "month" | "year"
    }

    /**
     * The name of the plan.
     */
    name: string

    /**
     * The description of the plan.
     */
    description?: string

    /**
     * The features of the plan.
     */
    features?: {
      /**
       * The text of the feature.
       */
      text: string

      /**
       * The footnote of the feature.
       */
      footnote?: ReactNode | string

      /**
       * The type of the feature.
       */
      type?: "positive" | "negative"
    }[]
  }

export const Plan = forwardRef<PlanElement, PlanProps>((props, ref) => {
  const { children, className, asChild, price, name, description, features, isFeatured, ...rest } =
    props

  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Card asChild>
      <Component ref={ref} className={cx(planVariants({ isFeatured, className }))} {...rest}>
        <div className="space-y-3">
          <H3>{name}</H3>

          {description && (
            <Paragraph size="sm" wrap="pretty" className="text-gray-600">
              {description}
            </Paragraph>
          )}
        </div>

        <div className="relative flex flex-wrap items-end gap-1 font-medium">
          <span className="text-xl/none text-gray-400">$</span>

          <span className="text-black text-4xl font-bold !leading-[0.85em]">
            {formatIntervalAmount(price.amount, price.interval)}
          </span>

          <div className="text-xs text-gray-500">
            /mo
            {price.interval === "year" && <div>billed annually</div>}
          </div>
        </div>

        {!!features?.length && (
          <Series direction="column" className="mb-auto">
            {features.map(({ type, text }) => (
              <div key={text} className={cx(planFeatureVariants())}>
                <Slot className={cx(planFeatureCheckVariants({ type }))}>
                  {type === "negative" ? <IconClose /> : <IconCheck />}
                </Slot>

                <span className={cx(type === "negative" && "text-gray-500")}>{text}</span>
              </div>
            ))}
          </Series>
        )}

        {children}
      </Component>
    </Card>
  )
})

Plan.defaultProps = {
  asChild: false,
  isFeatured: false,
}

Plan.displayName = "Plan"
