import { z } from "zod"

export const CONTACT_WORKLOADS = [
  "Robotics inference",
  "Reasoning & planning",
  "World-model inference",
  "Policies & actions",
] as const

export const contactSchema = z.object({
  email: z.email("Enter a valid work email."),
  workload: z.enum(CONTACT_WORKLOADS),
  message: z.string().trim().max(2000, "Keep it under 2,000 characters."),
})

export type ContactValues = z.infer<typeof contactSchema>
