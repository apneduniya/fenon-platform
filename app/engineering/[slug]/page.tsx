import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CloseLink } from "@/components/common/CloseButton"
import { Container } from "@/components/common/Container"
import { ArticlePanel } from "@/components/panels/ArticlePanel"
import { articles, getArticle } from "@/content/articles"

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<"/engineering/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug)
  return article ? { title: article.title, description: article.intro } : {}
}

export default async function ArticlePage({ params }: PageProps<"/engineering/[slug]">) {
  const article = getArticle((await params).slug)
  if (!article) notFound()
  return (
    <main>
      <Container className="max-w-[808px] py-12 lg:py-20">
        <ArticlePanel article={article} close={<CloseLink href="/#engineering" />} />
      </Container>
    </main>
  )
}
