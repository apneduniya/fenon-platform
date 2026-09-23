import Link from "next/link"
import { Container } from "@/components/common/Container"
import { ArrowIcon, ArrowUpIcon } from "@/components/common/icons"
import { ThemeImage } from "@/components/common/ThemeImage"
import { AppearanceSwitch } from "@/components/common/ThemeToggle"
import { FooterMark } from "@/components/illustrations/FooterMark"
import { Wordmark } from "@/components/illustrations/Logo"
import { footer } from "@/content/site"
import type { Link as LinkContent } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"
import artworkDark from "@/public/images/footer-artwork-dark.png"
import artworkLight from "@/public/images/footer-artwork-light.png"

function RegistrationCross({ className }: { className: string }) {
  return (
    <span aria-hidden="true" className={cn("absolute size-[9px] text-muted-foreground/60", className)}>
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
    </span>
  )
}

function FooterLink({ link, underline }: { link: LinkContent; underline?: boolean }) {
  const Component = link.external ? "a" : Link
  return (
    <Component
      href={link.href}
      className="group/link inline-flex items-center gap-[13px] text-foreground"
    >
      <span className={cn("underline-offset-[5px] group-hover/link:underline", underline && "underline")}>{link.label}</span>
      <ArrowIcon className="size-2 transition-transform duration-300 ease-fenon group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </Component>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="bg-dot-grid-pattern">
        <Container>
          <div className="flex items-center justify-between pt-4 pb-[15px] font-mono text-mono-ruler text-muted-foreground uppercase md:py-[15px]">
            <p className="flex items-center gap-[10px]">
              <span aria-hidden="true" className="size-[5px] bg-primary" />
              {footer.rulerStart}
            </p>
            <p className="hidden sm:block">{footer.rulerEnd}</p>
          </div>

          <div className="relative grid grid-cols-2 border border-border md:grid-cols-[3fr_2fr_2fr_2fr]">
            <RegistrationCross className="-top-[5px] -left-[5px]" />
            <RegistrationCross className="-top-[5px] -right-[5px]" />
            <RegistrationCross className="-bottom-[5px] -left-[5px]" />
            <RegistrationCross className="-right-[5px] -bottom-[5px]" />

            {/* Mobile positions are measured from the 390 frame; desktop stacks mark and tagline. */}
            <div className="relative col-span-2 h-[169.5px] md:col-span-1 md:flex md:h-auto md:flex-col md:items-center md:justify-between md:gap-8 md:px-8 md:py-[30px]">
              <FooterMark className="absolute top-[2.9px] left-[33.1px] w-[127.2px] md:static md:w-[231px]" />
              <Wordmark className="absolute top-[109.8px] left-[41.4px] w-[115.2px] text-foreground md:hidden" />
              <p className="absolute top-[100.7px] left-[214.2px] max-w-[110px] font-mono text-mono-tagline text-muted-foreground md:static md:max-w-none">
                {footer.tagline}
              </p>
            </div>

            {footer.columns.map((column, i) => (
              <nav
                key={column.title}
                aria-label={column.title}
                className={cn(
                  "border-t border-border pt-[28.4px] pr-4 pb-[37.1px] pl-[25px] md:border-t-0 md:border-l md:px-[31px] md:pt-[44px] md:pb-10",
                  i === 1 && "border-l pl-[24.3px]",
                )}
              >
                <h2 className="font-mono text-mono-label uppercase">{column.title}</h2>
                <ul className="mt-[22.8px] space-y-[19px] font-mono text-mono-link md:mt-[27px] md:space-y-[15px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="col-span-2 grid grid-cols-[173px_1fr] border-t border-border pt-[23.6px] pr-4 pb-[33.3px] pl-[24.6px] md:col-span-1 md:block md:border-t-0 md:border-l md:px-[31px] md:pt-[44px] md:pb-[57px]">
              <div>
                <h2 className="font-mono text-mono-label uppercase">{footer.connect.title}</h2>
                <ul className="mt-[17.5px] space-y-[19px] font-mono text-mono-link md:mt-[27px] md:space-y-[15px]">
                  {footer.connect.links.map((link, i) => (
                    <li key={link.label}>
                      <FooterLink link={link} underline={i === 0} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-mono-ruler text-muted-foreground uppercase md:mt-[50.8px]">{footer.appearanceLabel}</p>
                <div className="mt-[10px]">
                  <AppearanceSwitch label={footer.appearanceLabel} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-[20.4px] font-mono text-mono-artwork text-muted-foreground uppercase md:py-[23px]">
            <p className="flex items-center gap-[10px]">
              <span aria-hidden="true" className="text-body leading-[13px] text-primary md:leading-[22px]">+</span>
              {footer.artworkStart}
            </p>
            <p className="hidden sm:block">{footer.artworkEnd}</p>
          </div>

          <p aria-hidden="true" className="hidden pt-[72px] pb-[101.5px] text-display-wordmark text-wordmark select-none md:block">
            {footer.wordmark}
          </p>
        </Container>
        {/* Mobile artwork: unedited Figma exports (0:26248 light, 0:19812 dark), kept pixel-exact (decision #39). */}
        <div className="relative mt-[20.4px] aspect-[390/250] w-full md:hidden">
          <ThemeImage
            srcLight={artworkLight}
            srcDark={artworkDark}
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover [image-rendering:pixelated]"
          />
        </div>
      </div>

      <div className="border-t border-border bg-background">
        <Container className="flex h-[65px] items-center justify-between font-mono text-mono-bar text-muted-foreground">
          <p className="flex gap-6">
            <span className="uppercase">{footer.copyright}</span>
            <span className="hidden sm:inline">{footer.tagline}</span>
          </p>
          <a href="#top" className="inline-flex items-center gap-[14px] uppercase transition-colors hover:text-foreground">
            {footer.backToTop}
            <ArrowUpIcon className="h-[10px] w-[8.5px]" />
          </a>
        </Container>
      </div>
    </footer>
  )
}
