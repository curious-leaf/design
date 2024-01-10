import {
  forwardRef,
  ComponentPropsWithoutRef,
  ElementRef,
  RefObject,
  ReactElement,
  isValidElement,
} from "react"
import { VariantProps, cx } from "cva"
import { getInitials } from "@curiousleaf/utils"
import * as Primitive from "@radix-ui/react-avatar"
import { IconUser } from "@tabler/icons-react"
import {
  avatarFallbackVariants,
  avatarImageVariants,
  avatarStatusVariants,
  avatarVariants,
} from "./Avatar.variants"
import { Loader } from "~/Loader"
import { isChildrenEmpty } from "~/shared/helpers"
import { Slot } from "@radix-ui/react-slot"

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
  const {
    alt,
    children,
    className,
    initials,
    topStatus,
    bottomStatus,
    theme,
    size,
    shape,
    src,
    style,
    ...rest
  } = props

  return (
    <AvatarRoot theme={theme} size={size} shape={shape}>
      {/* Show image if available */}
      {src && (
        <AvatarImage
          ref={ref as RefObject<HTMLImageElement>}
          alt={alt}
          className={className}
          src={src}
          style={style}
          {...rest}
        />
      )}

      {/* Allow children to be used as fallback */}
      {children && (
        <AvatarFallback
          ref={ref}
          aria-label={alt}
          asChild={!isChildrenEmpty(children)}
          className={className}
          style={style}
        >
          {children}
        </AvatarFallback>
      )}

      {/* Show Loading icon until image is loaded,
          only if children fallback is not set */}
      {!children && src && !initials && (
        <AvatarFallback aria-label={alt} style={style}>
          <Loader aria-hidden="true" />
        </AvatarFallback>
      )}

      {/* Initials */}
      {!children && initials && (
        <AvatarFallback ref={ref} aria-label={alt} style={style} {...rest}>
          {getInitials(initials, size === "xs" ? 1 : 2)}
        </AvatarFallback>
      )}

      {/* Fallback */}
      {!children && !src && !initials && (
        <AvatarFallback ref={ref} aria-label={alt} role="img" style={style} {...rest}>
          <IconUser />
        </AvatarFallback>
      )}

      {/* Statuses */}
      {topStatus && <AvatarStatus position="top">{topStatus}</AvatarStatus>}
      {bottomStatus && <AvatarStatus position="bottom">{bottomStatus}</AvatarStatus>}
    </AvatarRoot>
  )
})

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

Avatar.displayName = "Avatar"
