"use client"

import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

export const IconChevronDown = forwardRef<SVGSVGElement, HTMLAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  },
)
