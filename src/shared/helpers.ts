import type { ReactNode } from "react"
import { Children, isValidElement } from "react"

/**
 * Checks if the given ReactNode is empty.
 *
 * @param children - The ReactNode to check.
 * @returns True if the ReactNode is empty, false otherwise.
 */
export const isChildrenEmpty = (children: ReactNode) => {
  return Children.count(children) === 0
}

/**
 * Checks if the given element is a React element.
 *
 * @param element - The element to check.
 * @returns Whether the element is a React element.
 */
export const isReactElement = (element: React.ReactNode): element is React.ReactElement => {
  return isValidElement(element)
}

/**
 * Cleans the given percentage value by ensuring it is within the range of 0 to 100.
 * If the percentage is less than 0, it is set to 0.
 * If the percentage is greater than 100, it is set to 100.
 *
 * @param percentage - The percentage value to be cleaned.
 * @returns The cleaned percentage value.
 */
export const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0
  const tooHigh = percentage > 100
  return tooLow ? 0 : tooHigh ? 100 : +percentage
}

export const getElementWidth = (element: HTMLElement | null, includeMargins = false) => {
  if (!element) return undefined

  let width = element.getBoundingClientRect().width

  if (includeMargins) {
    const style = window.getComputedStyle(element)
    width += parseInt(style.marginLeft) + parseInt(style.marginRight)
  }

  return width
}

/**
 * Check if a value is truthy
 * @param value - The value to check
 * @returns A boolean indicating if the value is truthy
 */
export function isTruthy<T>(value?: T | undefined | null | false): value is T {
  return !!value
}

/**
 * Get the initials from a string
 * @param value A string to get the initials from
 * @param limit The maximum number of initials to return
 * @returns The initials from the string
 */
export const getInitials = (value?: string | null, limit = 0) => {
  const val = (value || "").trim()

  // If the value is empty, a single character, or two characters (already initials)
  if (val.length === 0 || val.length === 1 || val.length === 2) {
    return val.toUpperCase()
  }

  const values = val.split(" ").filter(isTruthy)
  const initials = values.map((name) => name.charAt(0).toUpperCase()).join("")

  if (limit > 0) {
    return initials.slice(0, limit)
  }

  return initials
}
