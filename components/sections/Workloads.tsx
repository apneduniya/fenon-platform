import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { workloads } from "@/content/home"
import { WorkloadTabs } from "./WorkloadTabs"

export function Workloads() {
  const { heading, items, cardLabel, linkLabel } = workloads
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="scroll-mt-8 pt-[80px] lg:pt-[118.5px]">
      <Container>
        <SectionHeading heading={heading} className="border-b border-border pb-[29px] lg:pb-[39px]" />
        <WorkloadTabs items={items} cardLabel={cardLabel} linkLabel={linkLabel} />
      </Container>
    </section>
  )
}
