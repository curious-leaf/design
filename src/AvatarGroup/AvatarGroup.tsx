import { ComponentPropsWithoutRef, HTMLAttributes, ReactNode, forwardRef } from "react"
import { VariantProps } from "cva"
import { avatarGroupItemVariants, avatarGroupVariants } from "./AvatarGroup.variants"
import { AvatarProps, AvatarElement, Avatar } from "~/Avatar/Avatar"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { avatarVariants } from "~/Avatar/Avatar.variants"

export type AvatarGroupElement = HTMLDivElement

type AvatarGroupAvatarProps = Omit<AvatarProps, "size" | "asChild">

type AvatarGroupVariantProps = VariantProps<typeof avatarGroupVariants> &
  VariantProps<typeof avatarVariants>

export type AvatarGroupProps = HTMLAttributes<AvatarGroupElement> &
  AvatarGroupVariantProps & {
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

type AvatarGroupLabelProps = ComponentPropsWithoutRef<typeof Avatar> & {
  /**
   * The label to display.
   */
  label?: ReactNode
}

export const AvatarGroupRoot = forwardRef<AvatarGroupElement, AvatarGroupProps>((props, ref) => {
  const { children, className, size, ...rest } = props

  return (
    <div ref={ref} className={cx(avatarGroupVariants({ size, className }))} {...rest}>
      {children}
    </div>
  )
})

const AvatarGroupLabel = forwardRef<AvatarElement, AvatarGroupLabelProps>(
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

const AvatarGroupItem = forwardRef<AvatarElement, ComponentPropsWithoutRef<typeof Avatar>>(
  ({ children, className, initials, ...rest }, ref) => {
    return (
      <Avatar
        ref={ref}
        className={cx(avatarGroupItemVariants({ className }))}
        initials={initials}
        {...rest}
      >
        {children}
      </Avatar>
    )
  },
)

const AvatarGroupBase = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { items, className, children, theme, size, shape, previousOnTop, label, ...rest } = props
  const avatarProps = { theme, size, shape }

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
