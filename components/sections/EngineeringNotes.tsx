import Link from "next/link"
import { Container } from "@/components/common/Container"
import { ArrowIcon } from "@/components/common/icons"
import { SectionHeading } from "@/components/common/SectionHeading"
import { ArticleArt } from "@/components/illustrations/ArticleArt"
import { articles } from "@/content/articles"
import { engineeringNotes } from "@/content/home"

export function EngineeringNotes() {
  const { heading, linkLabel } = engineeringNotes
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="scroll-mt-8 pt-[78px] lg:pt-[119px]">
      <Container>
        <SectionHeading heading={heading} />
        <ul className="mt-[30px] grid gap-[35px] md:mt-[41px] md:grid-cols-3 md:gap-5">
          {articles.map((article) => (
            <li key={article.slug} className="border-b border-border px-[6px] pb-[22.7px] md:pb-[22px]">
              <Link href={`/engineering/${article.slug}`} className="group/article block">
                <div className="aspect-[337/191] overflow-hidden md:aspect-[406/202] rounded-lg border border-border bg-muted transition-transform duration-500 ease-fenon group-hover/article:scale-[1.01]">
                  <ArticleArt kind={article.illustration} />
                </div>
                <p className="mt-[26px] font-mono text-mono-caption md:mt-[29px] text-muted-foreground uppercase">{article.category}</p>
                <h3 className="mt-[14px] max-w-[330px] text-title">{article.title}</h3>
                <span className="mt-4 inline-flex items-center gap-[16px] text-body-xs md:mt-[21px]">
                  <span className="group-hover/article:underline group-hover/article:underline-offset-4">{linkLabel}</span>
                  <ArrowIcon className="size-[11px] text-primary transition-transform duration-300 ease-fenon group-hover/article:translate-x-0.5 group-hover/article:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
