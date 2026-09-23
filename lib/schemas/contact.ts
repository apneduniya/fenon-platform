import { z } from "zod"

// Single option, exactly as designed (decision #37).
export const CONTACT_WORKLOADS = ["Robotics inference"] as const

export const contactSchema = z.object({
  email: z.email("Enter a valid work email."),
  workload: z.enum(CONTACT_WORKLOADS),
  message: z.string().trim().max(2000, "Keep it under 2,000 characters."),
})

export type ContactValues = z.infer<typeof contactSchema>
