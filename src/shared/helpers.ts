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
