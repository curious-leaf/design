import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"
import type { HeadingElement, HeadingProps } from "../../typography/Heading"
import { Heading } from "../../typography/Heading"
import type { MarkdownElement, MarkdownProps } from "../../typography/Markdown"
import { Markdown } from "../../typography/Markdown"
import { Series } from "../../ui/Series"

import { headerVariants, headerDescriptionVariants, headerTitleVariants } from "./Header.variants"

export type HeaderElement = HTMLDivElement

type HeaderRootProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof headerVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type HeaderProps = Omit<HeaderRootProps & HeadingProps, "title"> & {
  /**
   * Represents the title displayed on the Header.
   */
  title?: ReactNode

  /**
   * Represents the description displayed on the Header.
   */
  description?: string
}

const HeaderRoot = forwardRef<HeaderElement, HeaderRootProps>((props, ref) => {
  const { className, alignment, gap, separated, sticky, asChild, ...rest } = props

  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      ref={ref}
      className={cx(headerVariants({ alignment, gap, separated, sticky, className }))}
      {...rest}
    />
  )
})

const HeaderTitle = forwardRef<
  HeadingElement,
  HeadingProps & VariantProps<typeof headerTitleVariants>
>((props, ref) => {
  const { className, size = "h4", ...rest } = props

  return (
    <Heading ref={ref} size={size} className={cx(headerTitleVariants({ className }))} {...rest} />
  )
})

const HeaderDescription = forwardRef<
  MarkdownElement,
  MarkdownProps & VariantProps<typeof headerDescriptionVariants>
>((props, ref) => {
  const { className, size = "sm", ...rest } = props

  return (
    <div className="w-full">
      <Markdown
        ref={ref}
        size={size}
        className={cx(headerDescriptionVariants({ className }))}
        {...rest}
      />
    </div>
  )
})

const HeaderBase = forwardRef<HeaderElement, HeaderProps>((props, ref) => {
  const { children, title, description, size, ...rest } = props

  return (
    <HeaderRoot ref={ref} {...rest}>
      {title && <HeaderTitle size={size}>{title}</HeaderTitle>}
      {children && <Series className="-my-0.5">{children}</Series>}
      {description && <HeaderDescription content={description} />}
    </HeaderRoot>
  )
})

HeaderBase.displayName = "Header"
HeaderRoot.displayName = "HeaderRoot"
HeaderTitle.displayName = "HeaderTitle"
HeaderDescription.displayName = "HeaderDescription"

export const Header = Object.assign(HeaderBase, {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Description: HeaderDescription,
})

Header.defaultProps = {
  size: "h4",
  alignment: "left",
  gap: "lg",
  separated: false,
  sticky: false,
  asChild: false,
}
