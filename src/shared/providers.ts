"use client"

/**
 * Utility functions for creating React contexts.
 */
import { createContext, useContext } from "react"

/**
 * Creates a simple context object with a given name.
 * @template ContextType - The type of the context value.
 * @param name - The name of the context.
 * @returns A Context object.
 */
export const createSimpleContext = <ContextType>(name: string) => {
  const Context = createContext<ContextType>({} as ContextType)
  Context.displayName = name

  /**
   * A hook that returns the context value.
   * @template T - The type of the context value.
   * @returns The context value.
   * @throws An error if the hook is used outside of the context provider.
   */
  const useValue = <T = ContextType>() => {
    const value = useContext(Context)

    if (!value) {
      throw new Error(
        `No value in ${name}Provider context. If the value is optional in this situation, try useOptional${name} instead of use${name}`,
      )
    }

    return value as unknown as T
  }

  /**
   * A hook that returns the context value if it exists, or null if it doesn't.
   * @returns The context value, or null if it doesn't exist.
   */
  const useOptionalValue = () => {
    return useContext(Context)
  }

  return { Provider: Context.Provider, useValue, useOptionalValue }
}
