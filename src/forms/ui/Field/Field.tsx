import type { WithOptionalProp } from "index"
import type { ComponentPropsWithoutRef } from "react"
import type { ControllerProps, FieldValues } from "react-hook-form"

import { FormAffix } from "~/components/form/affix"
import { FormDescription } from "~/components/form/description"
import { FormMessage } from "~/components/form/message"
import type { FormVariablesProps } from "~/components/form/variables"
import { FormVariables } from "~/components/form/variables"
import { Field } from "~/components/interface/field"
import { FieldProvider } from "~/providers/field-provider"

import type { VariantProps } from "../../../shared"
import { cva } from "../../../shared"

const formFieldVariants = cva({
  base: "flex flex-col flex-wrap items-start min-w-0 w-full justify-start gap-x-4 gap-y-2 @lg:flex-row @lg:flex-nowrap",
})

type FormFieldProps<T extends FieldValues> = ComponentPropsWithoutRef<typeof Field> &
  Omit<ControllerProps<T>, "render"> &
  WithOptionalProp<FormVariablesProps, "variables"> &
  VariantProps<typeof formFieldVariants> & {
    hint?: string
    sideHint?: string
    hideError?: boolean
    required?: boolean
  }

export const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { children, control: _, name, hint, required, hideError, variables, ...rest } = props

  return (
    <FieldProvider name={name} required={required}>
      <Field {...rest}>
        {variables?.length ? (
          <FormAffix suffix={<FormVariables variables={variables} />} events>
            {children}
          </FormAffix>
        ) : (
          children
        )}

        {!hideError && <FormMessage />}
        {hint && <FormDescription content={hint} />}
      </Field>
    </FieldProvider>
  )
}
