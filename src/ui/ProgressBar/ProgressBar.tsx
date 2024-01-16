import { Slot } from "@radix-ui/react-slot"
import { type HTMLAttributes, forwardRef, isValidElement } from "react"

import { useTheme } from "~/providers"
import { cx, type VariantProps } from "~/shared/cva"
import { cleanPercentage } from "~/shared/helpers"
import { Paragraph } from "~/typography/Paragraph"

import {
  progressBarProgressVariants,
  progressBarLineVariants,
  progressBarVariants,
  progressBarHintVariants,
  progressBarLabelVariants,
} from "./ProgressBar.variants"

export type ProgressBarElement = HTMLDivElement

export type ProgressBarProps = HTMLAttributes<ProgressBarElement> &
  VariantProps<typeof progressBarVariants>

export type ProgressBarBaseProps = ProgressBarProps &
  VariantProps<typeof progressBarProgressVariants> & {
    /**
     * The percentage of the progress bar.
     */
    percent: number

    /**
     * The label of the progress bar.
     */
    label?: string

    /**
     * The small label to show at the end of the progress bar.
     */
    hint?: string
  }

const ProgressBarRoot = forwardRef<ProgressBarElement, ProgressBarProps>((props, ref) => {
  const { className, ...rest } = props
  return <div ref={ref} className={progressBarVariants({ className })} {...rest} />
})

const ProgressBarBase = forwardRef<ProgressBarElement, ProgressBarBaseProps>((props, ref) => {
  const { children, percent, label, hint, theme: propTheme, ...rest } = props

  const globalTheme = useTheme()
  const theme = propTheme || globalTheme

  const percentage = cleanPercentage(percent)
  const Component = isValidElement(children) ? Slot : "div"

  return (
    <ProgressBarRoot ref={ref} {...rest}>
      {label && (
        <Paragraph size="sm" variant="medium" className={cx(progressBarLabelVariants())}>
          {label}
        </Paragraph>
      )}

      <div className={cx(progressBarLineVariants({ withLabel: !!label }))}>
        <div
          className={cx(progressBarProgressVariants({ theme }))}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {hint && (
        <Paragraph size="xs" className={cx(progressBarHintVariants({ withLabel: !!label }))}>
          {hint}
        </Paragraph>
      )}

      <Component className="order-last w-full">{children}</Component>
    </ProgressBarRoot>
  )
})

export const ProgressBar = Object.assign(ProgressBarBase, {
  Root: ProgressBarRoot,
})

ProgressBar.defaultProps = {
  percent: 0,
  label: "",
  hint: "",
}

ProgressBar.displayName = "ProgressBar"
