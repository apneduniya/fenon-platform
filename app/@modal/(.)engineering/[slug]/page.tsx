import { notFound } from "next/navigation"
import { ModalClose, RouteModal } from "@/components/common/RouteModal"
import { ArticlePanel, articleTitleId } from "@/components/panels/ArticlePanel"
import { articles, getArticle } from "@/content/articles"

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }))
}

export default async function ArticleModal({ params }: PageProps<"/engineering/[slug]">) {
  const article = getArticle((await params).slug)
  if (!article) notFound()
  return (
    <RouteModal labelledBy={articleTitleId(article.slug)}>
      <ArticlePanel article={article} close={<ModalClose />} />
    </RouteModal>
  )
}
