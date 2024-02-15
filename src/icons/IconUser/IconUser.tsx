"use client"

import { forwardRef } from "react"
import type { SVGAttributes } from "react"

export const IconUser = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
})

IconUser.defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
