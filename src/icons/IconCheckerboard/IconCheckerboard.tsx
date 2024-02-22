"use client"

import { forwardRef } from "react"
import type { SVGAttributes } from "react"

export const IconCheckerboard = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>IconCheckerboard</title>
        <path d="M0 0h9v9H0z" />
        <path d="M9 9h9v9H9z" />
      </svg>
    )
  },
)

IconCheckerboard.defaultProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "currentColor",
}
