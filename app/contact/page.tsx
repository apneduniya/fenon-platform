import type { Metadata } from "next"
import { CloseLink } from "@/components/common/CloseButton"
import { Container } from "@/components/common/Container"
import { ContactPanel } from "@/components/panels/ContactPanel"
import { contact } from "@/content/contact"

export const metadata: Metadata = {
  title: "Talk to Fenon",
  description: contact.description,
}

export default function ContactPage() {
  return (
    <main>
      <Container className="max-w-[808px] py-12 lg:py-20">
        <ContactPanel close={<CloseLink />} />
      </Container>
    </main>
  )
}
