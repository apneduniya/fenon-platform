import { z } from "zod"
import { CONTACT_EMAIL } from "./site"

export const contact = z
  .object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    fields: z.object({
      email: z.object({ label: z.string(), placeholder: z.string() }),
      workload: z.object({ label: z.string() }),
      message: z.object({ label: z.string(), placeholder: z.string() }),
    }),
    submit: z.string(),
    note: z.string(),
  })
  .parse({
    eyebrow: "Let’s build",
    title: "What does your robot need?",
    description:
      "Describe the model and deployment you have in mind. This form opens an email draft; it does not submit your details to a server.",
    fields: {
      email: { label: "Your work email", placeholder: "you@company.com" },
      workload: { label: "Workload" },
      message: { label: "What are you building?", placeholder: "Robot, models, deployment goals…" },
    },
    submit: "Open email draft",
    note: `Draft addressed to ${CONTACT_EMAIL}. Nothing is sent automatically.`,
  })
