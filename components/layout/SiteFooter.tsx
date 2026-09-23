import Link from "next/link"
import { Container } from "@/components/common/Container"
import { ArrowIcon, ArrowUpIcon } from "@/components/common/icons"
import { AppearanceSwitch } from "@/components/common/ThemeToggle"
import { FooterMark } from "@/components/illustrations/FooterMark"
import { Wordmark } from "@/components/illustrations/Logo"
import { footer } from "@/content/site"
import type { Link as LinkContent } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"

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
          <div className="flex items-center justify-between py-[15px] font-mono text-mono-sm text-muted-foreground uppercase">
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

            <div className="col-span-2 grid grid-cols-2 items-center md:col-span-1 md:flex md:flex-col md:justify-between md:gap-8 md:px-8 md:py-[30px]">
              <div className="flex flex-col items-center gap-1 px-5 py-8 md:p-0">
                <FooterMark className="w-[150px] md:w-[231px]" />
                <Wordmark className="w-[118px] text-foreground md:hidden" />
              </div>
              <p className="px-5 font-mono text-mono-link text-muted-foreground md:px-0 md:text-mono-code">{footer.tagline}</p>
            </div>

            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="border-t border-border px-6 pt-9 pb-8 even:border-l md:border-t-0 md:border-l md:px-[31px] md:pt-[44px] md:pb-10">
                <h2 className="font-mono text-mono-label uppercase">{column.title}</h2>
                <ul className="mt-[27px] space-y-[19px] font-mono text-mono-link md:space-y-[15px]">
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

            <div className="col-span-2 grid grid-cols-2 border-t border-border px-6 pt-9 pb-8 md:col-span-1 md:block md:border-t-0 md:border-l md:px-[31px] md:pt-[44px] md:pb-[57px]">
              <div>
                <h2 className="font-mono text-mono-label uppercase">{footer.connect.title}</h2>
                <ul className="mt-[27px] space-y-[19px] font-mono text-mono-link md:space-y-[15px]">
                  {footer.connect.links.map((link, i) => (
                    <li key={link.label}>
                      <FooterLink link={link} underline={i === 0} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-mono-sm text-muted-foreground uppercase md:mt-[52px]">{footer.appearanceLabel}</p>
                <div className="mt-[10px]">
                  <AppearanceSwitch label={footer.appearanceLabel} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-[23px] font-mono text-mono-sm text-muted-foreground uppercase">
            <p className="flex items-center gap-[10px]">
              <span aria-hidden="true" className="text-body text-primary">+</span>
              {footer.artworkStart}
            </p>
            <p className="hidden sm:block">{footer.artworkEnd}</p>
          </div>

          <p aria-hidden="true" className="pt-[72px] pb-[101.5px] text-display-wordmark text-wordmark select-none">
            {footer.wordmark}
          </p>
        </Container>
      </div>

      <div className="border-t border-border bg-background">
        <Container className="flex h-[65px] items-center justify-between font-mono text-mono-sm text-muted-foreground">
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
