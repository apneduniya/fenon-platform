import type { ReactNode } from "react"
import { DocumentCard } from "@/components/common/DocumentCard"
import { ContactForm } from "@/components/forms/ContactForm"
import { contact } from "@/content/contact"

export const CONTACT_TITLE_ID = "contact-title"

export function ContactPanel({ close }: { close: ReactNode }) {
  return (
    <DocumentCard eyebrow={contact.eyebrow} title={contact.title} titleId={CONTACT_TITLE_ID} close={close}>
      <p className="mt-[39px] text-lede-md text-muted-foreground">{contact.description}</p>
      <ContactForm copy={contact} />
    </DocumentCard>
  )
}
