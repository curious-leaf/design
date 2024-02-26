"use client"

import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"
import type { AvatarElement, AvatarProps } from "../Avatar/Avatar"
import { Avatar } from "../Avatar/Avatar"
import type { avatarVariants } from "../Avatar/Avatar.variants"

import { avatarGroupItemVariants, avatarGroupVariants } from "./AvatarGroup.variants"

export type AvatarGroupElement = HTMLDivElement

type AvatarGroupAvatarProps = Omit<AvatarProps, "size" | "asChild">

export type AvatarGroupRootProps = HTMLAttributes<AvatarGroupElement> &
  VariantProps<typeof avatarGroupVariants>

export type AvatarGroupProps = AvatarGroupRootProps &
  VariantProps<typeof avatarVariants> & {
    /**
     * The items to display in the group.
     */
    items?: AvatarGroupAvatarProps[]

    /**
     * The label to display at the end of the group.
     */
    label?: ReactNode

    /**
     * Whether the previous item should be on top of the stack.
     * If false, the next item will be at the top of the stack.
     */
    previousOnTop?: boolean
  }

export const AvatarGroupRoot = forwardRef<AvatarGroupElement, AvatarGroupRootProps>(
  (props, ref) => {
    const { children, className, size, ...rest } = props

    return (
      <div ref={ref} className={cx(avatarGroupVariants({ size, className }))} {...rest}>
        {children}
      </div>
    )
  },
)

type AvatarGroupLabelProps = ComponentPropsWithoutRef<typeof Avatar> & {
  /**
   * The label to display.
   */
  label?: ReactNode
}

export const AvatarGroupLabel = forwardRef<AvatarElement, AvatarGroupLabelProps>(
  ({ children, className, label, ...rest }, ref) => {
    return (
      <Avatar
        ref={ref}
        asChild={isReactElement(children)}
        className={cx(avatarGroupItemVariants({ className }))}
        {...rest}
      >
        {!children && label}
        {children}
      </Avatar>
    )
  },
)

export const AvatarGroupItem = forwardRef<AvatarElement, ComponentPropsWithoutRef<typeof Avatar>>(
  ({ className, initials, ...rest }, ref) => {
    return (
      <Avatar
        ref={ref}
        className={cx(avatarGroupItemVariants({ className }))}
        initials={initials}
        {...rest}
      />
    )
  },
)

const AvatarGroupBase = forwardRef<AvatarGroupElement, AvatarGroupProps>((props, ref) => {
  const { children, items, size, shape, previousOnTop, label, ...rest } = props
  const avatarProps = { size, shape }

  return (
    <AvatarGroupRoot ref={ref} size={size} {...rest}>
      <>
        {items?.map((item, i) => {
          const style = {
            zIndex: previousOnTop ? items.length - i : undefined,
            ...item.style,
          }

          return <AvatarGroupItem key={`avatar-${i}`} style={style} {...item} {...avatarProps} />
        })}

        {children}

        {label && <AvatarGroupLabel label={label} {...avatarProps} />}
      </>
    </AvatarGroupRoot>
  )
})

export const AvatarGroup = Object.assign(AvatarGroupBase, {
  Root: AvatarGroupRoot,
  Item: AvatarGroupItem,
  Label: AvatarGroupLabel,
})

AvatarGroup.defaultProps = {
  size: "md",
}

AvatarGroup.displayName = "AvatarGroup"
