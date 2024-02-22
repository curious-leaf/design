"use client"

import { forwardRef } from "react"
import type { SVGAttributes } from "react"

export const IconChevronUp = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>IconChevronUp</title>
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  },
)

IconChevronUp.defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
