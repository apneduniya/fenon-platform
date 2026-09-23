import { Container } from "@/components/common/Container"
import { CtaLink } from "@/components/common/CtaLink"
import { Eyebrow } from "@/components/common/Eyebrow"
import { Lines } from "@/components/common/Lines"
import { finalCta } from "@/content/home"

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pt-[72px] pb-[50px] lg:pt-[113px] lg:pb-[81px]">
      <Container>
        <div className="grid gap-[18px] border-y border-border pt-[67px] pb-[60px] lg:grid-cols-[1fr_310px] lg:items-end lg:gap-10 lg:pt-[86px] lg:pb-[73px]">
          <div>
            <Eyebrow className="text-eyebrow">{finalCta.eyebrow}</Eyebrow>
            <h2 id="cta-title" className="mt-[13px] text-display-cta">
              <Lines lines={finalCta.title} />
            </h2>
          </div>
          <div className="lg:pb-[9px]">
            <p className="text-lede-md text-muted-foreground">{finalCta.body}</p>
            <CtaLink link={finalCta.cta} className="mt-[21px]" />
          </div>
        </div>
      </Container>
    </section>
  )
}
