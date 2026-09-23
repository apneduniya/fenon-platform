import { Container } from "@/components/common/Container"
import { CtaLink } from "@/components/common/CtaLink"
import { Eyebrow } from "@/components/common/Eyebrow"
import { Lines } from "@/components/common/Lines"
import { finalCta } from "@/content/home"

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pt-[72px] pb-12 lg:pt-[111px] lg:pb-[81px]">
      <Container>
        <div className="grid gap-[25px] border-y border-border pt-[67px] pb-[54px] lg:grid-cols-[1fr_310px] lg:items-end lg:gap-10 lg:pt-[86px] lg:pb-[71px]">
          <div>
            <Eyebrow className="text-eyebrow">{finalCta.eyebrow}</Eyebrow>
            <h2 id="cta-title" className="mt-4 text-display-cta lg:mt-[13px]">
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
