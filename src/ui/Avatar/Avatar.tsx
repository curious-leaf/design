"use client"

import * as Primitive from "@radix-ui/react-avatar"
import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef, ReactNode, RefObject } from "react"

import { IconLoader } from "../../icons/IconLoader"
import { IconUser } from "../../icons/IconUser"
import { type VariantProps, cx, getInitials, isReactElement } from "../../shared"

import {
  avatarFallbackVariants,
  avatarImageVariants,
  avatarStatusVariants,
  avatarVariants,
} from "./Avatar.variants"

export type AvatarElement = ElementRef<typeof Primitive.Image> | HTMLDivElement

type AvatarVariantProps = VariantProps<typeof avatarVariants> &
  VariantProps<typeof avatarImageVariants> &
  VariantProps<typeof avatarFallbackVariants>

export type AvatarProps = Omit<ComponentPropsWithoutRef<typeof Primitive.Image>, "src"> &
  AvatarVariantProps & {
    /**
     * The URL of the image to be displayed.
     */
    src?: string | null

    /**
     * Represents the initials displayed on the Avatar.
     *
     * - Supports single characters, two characters, or full words.
     * - For full words, initials will be derived from the first letter of the
     *   first word and the first letter of the last word.
     *
     * Example: "John Doe" => "JD"
     */
    initials?: string

    /**
     * The slot to be rendered at the top of the Avatar.
     */
    topStatus?: ReactNode

    /**
     * The slot to be rendered at the bottom of the Avatar.
     */
    bottomStatus?: ReactNode
  }

const AvatarRoot = forwardRef<
  ElementRef<typeof Primitive.Root>,
  ComponentPropsWithoutRef<typeof Primitive.Root> & VariantProps<typeof avatarVariants>
>(({ className, variant, size, shape, ...props }, ref) => {
  return (
    <Primitive.Root
      ref={ref}
      className={cx(avatarVariants({ variant, size, shape, className }))}
      {...props}
    />
  )
})

const AvatarImage = forwardRef<
  ElementRef<typeof Primitive.Image>,
  ComponentPropsWithoutRef<typeof Primitive.Image> & VariantProps<typeof avatarImageVariants>
>(({ className, ...props }, ref) => (
  <Primitive.Image ref={ref} className={cx(avatarImageVariants({ className }))} {...props} />
))

const AvatarFallback = forwardRef<
  ElementRef<typeof Primitive.Fallback>,
  ComponentPropsWithoutRef<typeof Primitive.Fallback> & VariantProps<typeof avatarFallbackVariants>
>(({ className, ...props }, ref) => (
  <Primitive.Fallback ref={ref} className={cx(avatarFallbackVariants({ className }))} {...props} />
))

const AvatarStatus = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span"> & VariantProps<typeof avatarStatusVariants>
>(({ className, position, ...rest }, ref) => {
  const Comp = isReactElement(rest.children) ? Slot : "span"

  return <Comp ref={ref} className={cx(avatarStatusVariants({ position, className }))} {...rest} />
})

const AvatarBase = forwardRef<AvatarElement, AvatarProps>((props, ref) => {
  const { children, initials, topStatus, bottomStatus, variant, size, shape, src, alt, ...rest } =
    props

  return (
    <AvatarRoot variant={variant} size={size} shape={shape} {...rest}>
      {/* Show image if available */}
      {src && <AvatarImage ref={ref as RefObject<HTMLImageElement>} alt={alt} src={src} />}

      {/* Allow children to be used as fallback */}
      {children && (
        <AvatarFallback ref={ref} aria-label={alt} asChild={isReactElement(children)}>
          {children}
        </AvatarFallback>
      )}

      {/* Show Loading icon until image is loaded,
          only if children fallback is not set */}
      {!children && src && !initials && (
        <AvatarFallback aria-label={alt}>
          <IconLoader aria-hidden="true" />
        </AvatarFallback>
      )}

      {/* Initials */}
      {!children && initials && (
        <AvatarFallback ref={ref} aria-label={alt}>
          {getInitials(initials, size === "xs" ? 1 : 2)}
        </AvatarFallback>
      )}

      {/* Fallback */}
      {!children && !src && !initials && (
        <AvatarFallback ref={ref} aria-label={alt} role="img">
          <IconUser />
        </AvatarFallback>
      )}

      {/* Statuses */}
      {topStatus && <AvatarStatus position="top">{topStatus}</AvatarStatus>}
      {bottomStatus && <AvatarStatus position="bottom">{bottomStatus}</AvatarStatus>}
    </AvatarRoot>
  )
})

AvatarBase.displayName = "Avatar"
AvatarRoot.displayName = Primitive.Root.displayName
AvatarFallback.displayName = Primitive.Fallback.displayName
AvatarImage.displayName = Primitive.Image.displayName
AvatarStatus.displayName = "AvatarStatus"

export const Avatar = Object.assign(AvatarBase, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Status: AvatarStatus,
  Root: AvatarRoot,
})

Avatar.defaultProps = {
  variant: "soft",
  size: "md",
  shape: "circle",
  asChild: false,
}
