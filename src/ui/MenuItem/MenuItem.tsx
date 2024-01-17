import { Slot } from "@radix-ui/react-slot"
import { ChevronRightIcon } from "lucide-react"
import { forwardRef, isValidElement } from "react"
import type { ReactElement, ButtonHTMLAttributes } from "react"

import { useTheme } from "~/providers"
import { cx, type VariantProps } from "~/shared/cva"
import { isChildrenEmpty } from "~/shared/helpers"
import { Loader } from "~/ui/Loader"
import { menuItemAffixVariants, menuItemVariants } from "~/ui/MenuItem/MenuItem.variants"
import { Slottable } from "~/utils/Slottable"

export type MenuItemElement = HTMLButtonElement

export type MenuItemProps = Omit<ButtonHTMLAttributes<MenuItemElement>, "prefix"> &
  VariantProps<typeof menuItemVariants> & {
    /**
     * If set to `true`, the element will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactElement<HTMLElement>

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactElement<HTMLElement>

    /**
     * If set to `true`, the element will be rendered in the loading state.
     */
    loading?: boolean
  }

export const MenuItem = forwardRef<MenuItemElement, MenuItemProps>((props, ref) => {
  const {
    children,
    className,
    asChild,
    prefix,
    suffix: propSuffix,
    loading,
    theme: propTheme,
    active,
    ...rest
  } = props

  const globalTheme = useTheme()
  const theme = propTheme || globalTheme

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "button"

  const suffix = loading ? (
    <Loader className="text-xs" />
  ) : active ? (
    <ChevronRightIcon className="text-xs" />
  ) : (
    propSuffix
  )

  // Render an affix with destructive properties applied.
  type AffixProps = Pick<MenuItemProps, "theme" | "active"> & {
    affix: ReactElement<HTMLElement>
  }

  const renderAffix = ({ affix, theme, active }: AffixProps) => {
    const AffixComponent = isValidElement(affix) ? Slot : "span"
    const classNames = cx(
      menuItemAffixVariants({ theme, active, className: affix?.props.className }),
    )

    return <AffixComponent className={classNames}>{affix}</AffixComponent>
  }

  return (
    <Component ref={ref} className={cx(menuItemVariants({ theme, active, className }))} {...rest}>
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            {prefix && renderAffix({ affix: prefix, theme, active })}
            {!isChildrenEmpty(child) && <span className="flex-1 truncate">{child}</span>}
            {suffix && renderAffix({ affix: suffix })}
          </>
        )}
      </Slottable>
    </Component>
  )
})

MenuItem.defaultProps = {
  disabled: false,
  active: false,
  loading: false,
}

MenuItem.displayName = "MenuItem"
