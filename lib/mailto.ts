import { CONTACT_EMAIL } from "@/content/site"
import type { ContactValues } from "@/lib/schemas/contact"

// The contact form never posts data; it only prepares a draft in the visitor's mail client.
export function buildContactMailto({ email, workload, message }: ContactValues) {
  const body = [`Work email: ${email}`, `Workload: ${workload}`, "", message || "(Tell us about your robot, models and deployment goals.)"].join("\n")
  const params = new URLSearchParams({ subject: `Fenon — ${workload}`, body })
  return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, "%20")}`
}
