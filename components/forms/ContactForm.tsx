"use client"

import { useForm } from "@tanstack/react-form"
import { ArrowIcon } from "@/components/common/icons"
import { buttonVariants } from "@/components/ui/button"
import { FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { contact as contactContent } from "@/content/contact"
import { buildContactMailto } from "@/lib/mailto"
import { CONTACT_WORKLOADS, contactSchema, type ContactValues } from "@/lib/schemas/contact"
import { cn } from "@/lib/utils"

const control =
  "rounded-sm border border-border bg-muted px-[13px] text-lede-md text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 md:text-lede-md dark:bg-muted"
const label = "block text-body-sm text-foreground"

type Copy = typeof contactContent

export function ContactForm({ copy }: { copy: Copy }) {
  const form = useForm({
    defaultValues: { email: "", workload: CONTACT_WORKLOADS[0], message: "" } as ContactValues,
    validators: { onSubmit: contactSchema },
    onSubmit: ({ value }) => {
      window.location.href = buildContactMailto(contactSchema.parse(value))
    },
  })

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
      className="mt-[18px]"
    >
      <form.Field name="email">
        {(field) => {
          const invalid = field.state.meta.isTouched && !field.state.meta.isValid
          return (
            <div>
              <label htmlFor={field.name} className={label}>
                {copy.fields.email.label}
              </label>
              <Input
                id={field.name}
                name={field.name}
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                placeholder={copy.fields.email.placeholder}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={invalid}
                aria-describedby={invalid ? `${field.name}-error` : undefined}
                className={cn(control, "mt-1 h-[42px]")}
              />
              {invalid && <FieldError id={`${field.name}-error`} errors={field.state.meta.errors} className="mt-2 text-body-xs" />}
            </div>
          )
        }}
      </form.Field>

      <form.Field name="workload">
        {(field) => (
          <div className="mt-[19px]">
            <label id={`${field.name}-label`} className={label}>
              {copy.fields.workload.label}
            </label>
            <Select value={field.state.value} onValueChange={(value) => value && field.handleChange(value as ContactValues["workload"])}>
              <SelectTrigger aria-labelledby={`${field.name}-label`} className={cn(control, "mt-1 h-[42px] w-full justify-between data-[size=default]:h-[42px] [&>svg:last-child]:opacity-0")}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CONTACT_WORKLOADS.map((option) => (
                  <SelectItem key={option} value={option} className="text-lede-md">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </form.Field>

      <form.Field name="message">
        {(field) => (
          <div className="mt-[21px]">
            <label htmlFor={field.name} className={label}>
              {copy.fields.message.label}
            </label>
            <Textarea
              id={field.name}
              name={field.name}
              placeholder={copy.fields.message.placeholder}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              className={cn(control, "mt-1 h-[89px] min-h-0 resize-none py-[11px]")}
            />
          </div>
        )}
      </form.Field>

      <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) => (
          <button type="submit" disabled={isSubmitting} className={cn(buttonVariants({ variant: "cta", size: "cta" }), "mt-[25px] group/cta")}>
            {copy.submit}
            <ArrowIcon className="transition-transform duration-300 ease-fenon group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </button>
        )}
      </form.Subscribe>

      <p className="mt-[18px] text-body-xs text-muted-foreground">{copy.note}</p>
    </form>
  )
}
