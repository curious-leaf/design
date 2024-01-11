import * as Primitive from "@radix-ui/react-avatar"
import { Slot } from "@radix-ui/react-slot"
import { IconUser } from "@tabler/icons-react"
import { forwardRef, isValidElement } from "react"
import type { ComponentPropsWithoutRef, ElementRef, ReactElement, RefObject } from "react"

import { Loader } from "../Loader"
import { type VariantProps, cx } from "../shared/cva"
import { getInitials, isReactElement } from "../shared/helpers"

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

export type AvatarProps = ComponentPropsWithoutRef<typeof Primitive.Image> &
  AvatarVariantProps & {
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
    topStatus?: ReactElement<HTMLElement>

    /**
     * The slot to be rendered at the bottom of the Avatar.
     */
    bottomStatus?: ReactElement<HTMLElement>
  }

const AvatarRoot = forwardRef<
  ElementRef<typeof Primitive.Root>,
  ComponentPropsWithoutRef<typeof Primitive.Root> & VariantProps<typeof avatarVariants>
>(({ className, theme, size, shape, ...props }, ref) => (
  <Primitive.Root
    ref={ref}
    className={cx(avatarVariants({ theme, size, shape, className }))}
    {...props}
  />
))

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
>(({ children, className, position, ...rest }, ref) => {
  const Comp = isValidElement(children) ? Slot : "span"

  return (
    <Comp ref={ref} className={cx(avatarStatusVariants({ position, className }))} {...rest}>
      {children}
    </Comp>
  )
})

const AvatarBase = forwardRef<AvatarElement, AvatarProps>((props, ref) => {
  const { alt, children, initials, topStatus, bottomStatus, theme, size, shape, src, ...rest } =
    props

  return (
    <AvatarRoot theme={theme} size={size} shape={shape} {...rest}>
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
          <Loader aria-hidden="true" />
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
  theme: "gray",
  size: "md",
  shape: "circle",
}
