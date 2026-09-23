import { ModalClose, RouteModal } from "@/components/common/RouteModal"
import { CONTACT_TITLE_ID, ContactPanel } from "@/components/panels/ContactPanel"

export default function ContactModal() {
  return (
    <RouteModal labelledBy={CONTACT_TITLE_ID}>
      <ContactPanel close={<ModalClose />} />
    </RouteModal>
  )
}
