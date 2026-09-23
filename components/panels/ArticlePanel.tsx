import type { ReactNode } from "react"
import { DocumentCard } from "@/components/common/DocumentCard"
import { ARTICLE_EYEBROW } from "@/content/articles"
import type { Article } from "@/lib/schemas/content"

export const articleTitleId = (slug: string) => `article-${slug}-title`

export function ArticlePanel({ article, close }: { article: Article; close: ReactNode }) {
  return (
    <DocumentCard eyebrow={ARTICLE_EYEBROW} title={article.title} titleId={articleTitleId(article.slug)} close={close}>
      <p className="mt-[39px] text-lede-md text-muted-foreground">{article.intro}</p>
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="mt-[29px] text-heading-sm">{section.heading}</h2>
          <p className="mt-[25px] text-lede-md text-muted-foreground">{section.body}</p>
        </section>
      ))}
    </DocumentCard>
  )
}
