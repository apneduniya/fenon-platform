import Link from "next/link"
import { Container } from "@/components/common/Container"
import { CtaLink } from "@/components/common/CtaLink"
import { Eyebrow } from "@/components/common/Eyebrow"
import { ArrowIcon } from "@/components/common/icons"
import { hero } from "@/content/home"
import { HeroIllustration, MotionToggle } from "./HeroIllustration"

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-[49px] lg:pt-[88px]">
      <Container>
        <Eyebrow dot>{hero.eyebrow}</Eyebrow>
        <div className="mt-[22px] grid gap-[21px] lg:mt-6 lg:grid-cols-[1fr_311px] lg:items-end lg:gap-10">
          <div>
            <h1 id="hero-title" className="text-display-hero">
              {hero.title}
              <br />
              <span className="text-primary">{hero.titleAccent}</span>
            </h1>
            <div className="mt-[33px] flex flex-col items-start gap-[10px] sm:flex-row sm:gap-[15px]">
              <CtaLink link={hero.primaryCta} />
              <CtaLink link={hero.secondaryCta} variant="ctaOutline" />
            </div>
          </div>
          <div className="lg:pb-1">
            <p className="text-lede-lg">{hero.leadIn}</p>
            <p className="mt-[11px] text-body text-muted-foreground lg:mt-[18px]">{hero.body}</p>
          </div>
        </div>
      </Container>

      <div className="mx-auto mt-[19px] max-w-page overflow-hidden lg:mt-[9px] lg:px-[calc(var(--spacing-gutter)-18px)]">
        <div className="-mx-[39.4%] sm:mx-0">
          <HeroIllustration alt={hero.illustrationAlt} />
        </div>
      </div>

      <Container>
        <div className="flex items-center justify-between gap-4 py-[3px]">
          <div className="font-mono text-mono-figure">
            <p className="uppercase">{hero.caption}</p>
            <p className="text-muted-foreground">{hero.captionNote}</p>
          </div>
          <MotionToggle label={hero.motionLabel} />
        </div>

        <div className="mt-[13px] grid grid-cols-2 gap-x-4 gap-y-1 border-t border-border pt-[21px] lg:mt-[18px] lg:pt-[18px] lg:grid-cols-[385fr_312fr_312fr_287fr] lg:gap-0">
          <p className="font-mono text-mono-sm text-muted-foreground uppercase">{hero.capabilitiesLabel}</p>
          <ul className="contents">
            {hero.capabilities.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="group/cap inline-flex items-center gap-[10px] text-body">
                  <ArrowIcon className="size-[9px] text-primary transition-transform duration-300 ease-fenon group-hover/cap:translate-x-0.5 group-hover/cap:-translate-y-0.5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
