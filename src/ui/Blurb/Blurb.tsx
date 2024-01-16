import { Slot } from "@radix-ui/react-slot"
import { forwardRef, isValidElement } from "react"
import type { ComponentPropsWithoutRef } from "react"

import { type VariantProps, cx } from "~/shared/cva"
import type { ParagraphElement, ParagraphProps } from "~/typography/Paragraph"
import { Paragraph } from "~/typography/Paragraph"
import { Avatar, type AvatarElement, type AvatarProps } from "~/ui/Avatar"

import {
  blurbContentVariants,
  blurbVariants,
  blurbDescriptionVariants,
  blurbTitleVariants,
} from "./Blurb.variants"

export type BlurbElement = HTMLDivElement

type BlurbProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof blurbVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type BlurbBaseProps = BlurbProps & {
  /**
   * Represents the avatar displayed on the Blurb.
   */
  avatar?: AvatarProps

  /**
   * Represents the title displayed on the Blurb.
   */
  title?: string

  /**
   * Represents the description displayed on the Blurb.
   */
  description?: string

  /**
   * Represents the size of the avatar and content displayed on the Blurb.
   */
  size?: "sm" | "md" | "lg"
}

const BlurbRoot = forwardRef<BlurbElement, BlurbProps>(({ className, asChild, ...props }, ref) => {
  const useAsChild = asChild && isValidElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(blurbVariants({ className }))} {...props} />
})

const BlurbAvatar = forwardRef<AvatarElement, AvatarProps>(({ size = "lg", ...props }, ref) => {
  return <Avatar ref={ref} size={size} {...props} />
})

const BlurbContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof blurbContentVariants>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(blurbContentVariants({ className }))} {...props} />
})

const BlurbTitle = forwardRef<
  ParagraphElement,
  ParagraphProps & VariantProps<typeof blurbTitleVariants>
>((props, ref) => {
  const { className, size = "sm", ...rest } = props

  if (!rest.children) {
    return null
  }

  return (
    <Paragraph
      ref={ref}
      size={size}
      variant="medium"
      className={cx(blurbTitleVariants({ className }))}
      {...rest}
    />
  )
})

const BlurbDescription = forwardRef<
  ParagraphElement,
  ParagraphProps & VariantProps<typeof blurbDescriptionVariants>
>((props, ref) => {
  const { className, size = "xs", ...rest } = props

  if (!rest.children) {
    return null
  }

  return (
    <Paragraph
      ref={ref}
      size={size}
      className={cx(blurbDescriptionVariants({ className }))}
      {...rest}
    />
  )
})

const BlurbBase = forwardRef<BlurbElement, BlurbBaseProps>((props, ref) => {
  const { children, avatar, title, description, size, ...rest } = props

  return (
    <BlurbRoot ref={ref} {...rest}>
      {avatar && <BlurbAvatar size={size === "sm" ? "lg" : "xl"} {...avatar} />}

      {(title || description) && (
        <BlurbContent>
          <BlurbTitle size={size}>{title}</BlurbTitle>
          <BlurbDescription size={size === "sm" ? "xs" : "sm"}>{description}</BlurbDescription>
        </BlurbContent>
      )}

      {children}
    </BlurbRoot>
  )
})

BlurbBase.displayName = "Blurb"
BlurbRoot.displayName = "BlurbRoot"
BlurbAvatar.displayName = "BlurbAvatar"
BlurbContent.displayName = "BlurbContent"
BlurbTitle.displayName = "BlurbTitle"
BlurbDescription.displayName = "BlurbDescription"

export const Blurb = Object.assign(BlurbBase, {
  Root: BlurbRoot,
  Avatar: BlurbAvatar,
  Content: BlurbContent,
  Title: BlurbTitle,
  Description: BlurbDescription,
})

Blurb.defaultProps = {
  title: "",
  description: "",
  size: "sm",
  asChild: false,
}
