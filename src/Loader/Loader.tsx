import { IconLoader } from "@tabler/icons-react"
import { forwardRef, type SVGProps } from "react"
import { cx } from "~/shared/cva"

export type LoaderProps = SVGProps<SVGSVGElement>

export const Loader = forwardRef<SVGSVGElement, LoaderProps>((props, ref) => {
  const { className, ...rest } = props

  return <IconLoader ref={ref} className={cx("animate-spin", className)} {...rest} />
})
