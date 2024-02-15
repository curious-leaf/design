"use client"

import { forwardRef } from "react"
import type { SVGAttributes } from "react"

export const IconBullet = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  )
})

IconBullet.defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
