import { z } from "zod"
import { articleSchema } from "@/lib/schemas/content"

export const ARTICLE_EYEBROW = "Fenon engineering / draft template"

export const articles = z.array(articleSchema).parse([
  {
    slug: "architecture",
    category: "Architecture / article template",
    title: "Where should robot intelligence run?",
    intro:
      "This is a reusable article template, not a published technical claim. Replace the draft with your own architecture, measurements and deployment constraints.",
    sections: [
      {
        heading: "Start with the control boundary.",
        body: "Describe which decisions belong on the machine, which model calls can run remotely, and what happens when a response is late or unavailable.",
      },
      {
        heading: "Show the architecture.",
        body: "Use a simple observation → inference → response figure. Label the transport, model version and local validation boundary. Keep the figure independent of the surrounding paragraph so it can be reused.",
      },
      {
        heading: "State the evidence.",
        body: "Add your measured results and test conditions. Distinguish targets from observations, and avoid converting conceptual diagrams into performance claims.",
      },
    ],
    illustration: "architecture",
  },
  {
    slug: "observation-to-response",
    category: "Engineering / article template",
    title: "Designing the observation-to-response loop.",
    intro: "Article template for an engineering deep dive. The structure is ready for real code and verified results.",
    sections: [
      {
        heading: "Define the input.",
        body: "Document the observations, context and task that the model receives. Include a compact, representative request rather than a screenshot of a terminal.",
      },
      {
        heading: "Make the boundary explicit.",
        body: "Explain how the response reaches the local controller and what validation is performed. Call out failures and fallbacks in a separate technical aside.",
      },
      {
        heading: "Make it reproducible.",
        body: "Include the model revision, evaluation setup and a link to an appropriate reproducible example. Replace this placeholder prose before publication.",
      },
    ],
    illustration: "loop",
  },
  {
    slug: "evaluation",
    category: "Research / article template",
    title: "Measure the work. Not the demo.",
    intro: "Use this template for a benchmark or evaluation article. No measured performance is asserted here.",
    sections: [
      {
        heading: "Define the question.",
        body: "Write the hypothesis and describe a representative workload. Name the hardware, model revision, input sizes and deployment conditions.",
      },
      {
        heading: "Plot the distribution.",
        body: "Use labelled axes, real units and a clear legend. Show the appropriate distribution instead of a single unexplained number. Always cite the data source.",
      },
      {
        heading: "Explain the trade-off.",
        body: "Describe what improved, what did not, and where the result may not generalize. Keep limitations next to the conclusion.",
      },
    ],
    illustration: "evaluation",
  },
])

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
