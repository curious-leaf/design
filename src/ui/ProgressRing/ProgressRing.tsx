"use client"

import { type HTMLAttributes, forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cleanPercentage, cx } from "../../shared"

import { progressRingCircleVariants, progressRingVariants } from "./ProgressRing.variants"

export type ProgressRingElement = SVGSVGElement

export type ProgressRingProps = Omit<HTMLAttributes<ProgressRingElement>, "size"> &
  VariantProps<typeof progressRingVariants> &
  VariantProps<typeof progressRingCircleVariants> & {
    /**
     * Represents a progress ring component.
     */
    percent: number
  }

export const ProgressRing = forwardRef<ProgressRingElement, ProgressRingProps>((props, ref) => {
  const { className, percent, theme, size, ...rest } = props

  let svgSize = 0

  switch (size) {
    case "xs":
      svgSize = 48
      break
    case "sm":
      svgSize = 56
      break
    case "lg":
      svgSize = 72
      break
    case "xl":
      svgSize = 80
      break
    default:
      svgSize = 64
      break
  }

  const strokeWidth = 5
  const r = svgSize / 2 - strokeWidth / 2
  const circ = 2 * Math.PI * r
  const percentage = cleanPercentage(percent)
  const strokePct = ((100 - percentage) * circ) / 100

  return (
    <svg
      ref={ref}
      width={svgSize}
      height={svgSize}
      className={cx(progressRingVariants({ size, className }))}
      {...rest}
    >
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={r}
        cx={svgSize / 2}
        cy={svgSize / 2}
      />

      <circle
        className={cx(progressRingCircleVariants({ theme }))}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
        strokeLinecap="round"
        paintOrder="stroke"
        stroke={strokePct !== circ ? "currentColor" : ""}
        fill="transparent"
        transform={`rotate(-90 ${svgSize / 2} ${svgSize / 2})`}
        r={r}
        cx={svgSize / 2}
        cy={svgSize / 2}
      />

      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="font-medium">
        {percentage.toFixed(0)}%
      </text>
    </svg>
  )
})

ProgressRing.defaultProps = {
  theme: "blue",
  size: "md",
}

ProgressRing.displayName = "ProgressRing"
