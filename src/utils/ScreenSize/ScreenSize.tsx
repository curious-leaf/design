"use client"

import { type HTMLAttributes, forwardRef, useEffect, useState } from "react"

import { type VariantProps, cx } from "../../shared"

import { screenSizeSeparatorVariants, screenSizeVariants } from "./ScreenSize.variants"

export type ScreenSizeElement = HTMLDivElement

export type ScreenSizeProps = Omit<HTMLAttributes<ScreenSizeElement>, "size"> &
  VariantProps<typeof screenSizeVariants>

export const ScreenSize = forwardRef<ScreenSizeElement, ScreenSizeProps>((props, ref) => {
  const { className, ...rest } = props
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const { width, height } = dimensions

  return (
    <div ref={ref} className={cx(screenSizeVariants({ className }))} {...rest}>
      <span>
        {width.toLocaleString()} x {height.toLocaleString()}
      </span>

      <div className={cx(screenSizeSeparatorVariants())} />
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:max-md:inline">SM</span>
      <span className="hidden md:max-lg:inline">MD</span>
      <span className="hidden lg:max-xl:inline">LG</span>
      <span className="hidden xl:max-2xl:inline">XL</span>
      <span className="max-2xl:hidden">2XL</span>
    </div>
  )
})

ScreenSize.displayName = "ScreenSize"
