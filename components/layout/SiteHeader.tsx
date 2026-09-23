import Link from "next/link"
import { Container } from "@/components/common/Container"
import { ArrowIcon } from "@/components/common/icons"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { Logo } from "@/components/illustrations/Logo"
import { contactCta, primaryNav } from "@/content/site"
import { MobileMenu } from "./MobileMenu"

export function SiteHeader() {
  return (
    <header>
      <Container className="relative pt-6">
        <nav
          aria-label="Primary"
          className="flex h-[55px] items-center rounded-full bg-nav pr-[26px] pl-5 text-nav-foreground lg:h-16 lg:pr-7 lg:pl-[23px]"
        >
          <Link href="/" aria-label="Fenon home" className="shrink-0">
            <Logo className="w-[110px] lg:w-[131px]" />
          </Link>

          <ul className="ml-14 hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-body transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-[22px] lg:gap-8">
            <ThemeToggle />
            <Link href={contactCta.href} className="group/cta hidden items-center gap-[14px] text-body lg:inline-flex">
              {contactCta.label}
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ease-fenon group-hover/cta:scale-105">
                <ArrowIcon className="size-[11px]" />
              </span>
            </Link>
            <MobileMenu items={primaryNav} />
          </div>
        </nav>
      </Container>
    </header>
  )
}
