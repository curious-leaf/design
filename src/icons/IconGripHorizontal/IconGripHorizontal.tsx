"use client"

import { forwardRef } from "react"
import type { SVGAttributes } from "react"

export const IconGripHorizontal = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>IconGripHorizontal</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    )
  },
)

IconGripHorizontal.defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
