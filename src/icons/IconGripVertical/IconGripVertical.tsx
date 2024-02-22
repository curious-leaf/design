"use client"

import { forwardRef } from "react"
import type { SVGAttributes } from "react"

export const IconGripVertical = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>IconGripVertical</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    )
  },
)

IconGripVertical.defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
