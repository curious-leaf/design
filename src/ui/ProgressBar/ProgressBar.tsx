"use client"

import { Slot } from "@radix-ui/react-slot"
import { type HTMLAttributes, forwardRef } from "react"

import { type VariantProps, cleanPercentage, cx, isReactElement } from "../../shared"
import type { ParagraphElement, ParagraphProps } from "../../typography/Paragraph"
import { Paragraph } from "../../typography/Paragraph"

import {
  progressBarHintVariants,
  progressBarLabelVariants,
  progressBarLineVariants,
  progressBarProgressVariants,
  progressBarVariants,
} from "./ProgressBar.variants"

export type ProgressBarElement = HTMLDivElement

export type ProgressBarRootProps = HTMLAttributes<ProgressBarElement> &
  VariantProps<typeof progressBarVariants>

export type ProgressBarProps = ProgressBarRootProps &
  ProgressBarBarProps & {
    /**
     * The label of the progress bar.
     */
    label?: string

    /**
     * The small label to show at the end of the progress bar.
     */
    hint?: string
  }

export type ProgressBarBarProps = HTMLAttributes<ProgressBarElement> &
  VariantProps<typeof progressBarLineVariants> &
  VariantProps<typeof progressBarProgressVariants> & {
    /**
     * The percentage of the progress bar.
     */
    percent: number
  }

export const ProgressBarRoot = forwardRef<ProgressBarElement, ProgressBarRootProps>(
  (props, ref) => {
    const { className, ...rest } = props
    return <div ref={ref} className={progressBarVariants({ className })} {...rest} />
  },
)

export const ProgressBarBar = forwardRef<ProgressBarElement, ProgressBarBarProps>((props, ref) => {
  const { className, percent, theme, ...rest } = props

  const percentage = cleanPercentage(percent)

  return (
    <div ref={ref} className={progressBarLineVariants({ className })} {...rest}>
      <div
        className={cx(progressBarProgressVariants({ theme }))}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
})

export const ProgressBarLabel = forwardRef<ParagraphElement, ParagraphProps>((props, ref) => {
  const { className, size = "sm", variant = "medium", ...rest } = props

  return (
    <Paragraph
      ref={ref}
      size={size}
      variant={variant}
      className={cx(progressBarLabelVariants({ className }))}
      {...rest}
    />
  )
})

export const ProgressBarHint = forwardRef<ParagraphElement, ParagraphProps>((props, ref) => {
  const { className, size = "xs", ...rest } = props

  return (
    <Paragraph
      ref={ref}
      size={size}
      className={cx(progressBarHintVariants({ className }))}
      {...rest}
    />
  )
})

export const ProgressBarBase = forwardRef<ProgressBarElement, ProgressBarProps>((props, ref) => {
  const { children, percent, label, hint, theme, ...rest } = props
  const Component = isReactElement(children) ? Slot : "div"

  return (
    <ProgressBarRoot ref={ref} {...rest}>
      {label && <ProgressBarLabel>{label}</ProgressBarLabel>}
      <ProgressBarBar percent={percent} theme={theme} />
      {hint && <ProgressBarHint>{hint}</ProgressBarHint>}

      {children && <Component className="order-last w-full">{children}</Component>}
    </ProgressBarRoot>
  )
})

export const ProgressBar = Object.assign(ProgressBarBase, {
  Root: ProgressBarRoot,
  Bar: ProgressBarBar,
  Label: ProgressBarLabel,
  Hint: ProgressBarHint,
})

ProgressBar.defaultProps = {
  theme: "blue",
  percent: 0,
  label: "",
  hint: "",
}

ProgressBar.displayName = "ProgressBar"
