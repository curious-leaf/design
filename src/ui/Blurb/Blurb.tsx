import { Slot } from "@radix-ui/react-slot"
import { forwardRef, isValidElement } from "react"
import type { ComponentPropsWithoutRef } from "react"

import { type VariantProps, cx } from "~/shared/cva"
import { Avatar, type AvatarElement, type AvatarProps } from "~/ui/Avatar"

import {
  blurbContentVariants,
  blurbVariants,
  blurbDescriptionVariants,
  blurbTitleVariants,
} from "./Blurb.variants"

export type BlurbElement = HTMLDivElement

type BlurbRootProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof blurbVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type BlurbProps = BlurbRootProps & {
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
}

const BlurbRoot = forwardRef<BlurbElement, BlurbRootProps>(
  ({ className, asChild, ...props }, ref) => {
    const useAsChild = asChild && isValidElement(props.children)
    const Component = useAsChild ? Slot : "div"

    return <Component ref={ref} className={cx(blurbVariants({ className }))} {...props} />
  },
)

const BlurbAvatar = forwardRef<AvatarElement, AvatarProps>(({ ...props }, ref) => {
  return <Avatar ref={ref} {...props} />
})

const BlurbContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof blurbContentVariants>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(blurbContentVariants({ className }))} {...props} />
})

const BlurbTitle = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span"> & VariantProps<typeof blurbTitleVariants>
>(({ children, className, ...rest }, ref) => {
  if (!children) {
    return null
  }

  return (
    <span ref={ref} className={cx(blurbTitleVariants({ className }))} {...rest}>
      {children}
    </span>
  )
})

const BlurbDescription = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span"> & VariantProps<typeof blurbDescriptionVariants>
>(({ children, className, ...rest }, ref) => {
  if (!children) {
    return null
  }

  return (
    <span ref={ref} className={cx(blurbDescriptionVariants({ className }))} {...rest}>
      {children}
    </span>
  )
})

const BlurbBase = forwardRef<BlurbElement, BlurbProps>((props, ref) => {
  const { children, avatar, title, description, ...rest } = props

  return (
    <BlurbRoot ref={ref} {...rest}>
      {avatar && <BlurbAvatar {...avatar} />}

      {(title || description) && (
        <BlurbContent>
          <BlurbTitle>{title}</BlurbTitle>
          <BlurbDescription>{description}</BlurbDescription>
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
  avatar: Avatar.defaultProps,
  title: "",
  description: "",
  asChild: false,
}
