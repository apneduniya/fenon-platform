import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { lifecycle } from "@/content/home"
import { TraceBars } from "./TraceBars"

export function InferenceLifecycle() {
  const { heading, cardLabel, replayLabel, steps, note } = lifecycle
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="scroll-mt-8 pt-[80px] lg:pt-[119px]">
      <Container>
        <SectionHeading heading={heading} />
        <div className="mt-[29px] rounded-xl border border-border bg-muted px-5 pt-[23px] pb-[22px] lg:mt-10 lg:px-9 lg:pt-8 lg:pb-6">
          <TraceBars steps={steps} cardLabel={cardLabel} replayLabel={replayLabel} />
          <p className="mt-[22px] text-body-xs text-muted-foreground">{note}</p>
        </div>
      </Container>
    </section>
  )
}
