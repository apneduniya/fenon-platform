import { z } from "zod"
import { linkSchema } from "@/lib/schemas/content"

export const CONTACT_EMAIL = "founders@fenon.ai"

export const announcement = linkSchema.extend({ message: z.string() }).parse({
  message: "From model to machine. Meet Fenon.",
  label: "Explore the platform",
  href: "/#platform",
})

export const primaryNav = z.array(linkSchema).parse([
  { label: "Platform", href: "/#platform" },
  { label: "Workloads", href: "/#workloads" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Engineering", href: "/#engineering" },
])

export const contactCta = linkSchema.parse({ label: "Talk to us", href: "/contact" })

const footerColumnSchema = z.object({ title: z.string(), links: z.array(linkSchema) })

export const footer = z
  .object({
    rulerStart: z.string(),
    rulerEnd: z.string(),
    tagline: z.string(),
    columns: z.array(footerColumnSchema),
    connect: footerColumnSchema,
    appearanceLabel: z.string(),
    artworkStart: z.string(),
    artworkEnd: z.string(),
    wordmark: z.string(),
    copyright: z.string(),
    backToTop: z.string(),
  })
  .parse({
    rulerStart: "Fenon / Inference for robotics",
    rulerEnd: "Built for the physical world",
    tagline: "Inference for robotics.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Overview", href: "/#platform" },
          { label: "Model workloads", href: "/#workloads" },
          { label: "Architecture", href: "/engineering/architecture" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Engineering notes", href: "/#engineering" },
          { label: "Integration example", href: "/#how-it-works" },
          { label: "Inference lifecycle", href: "/#lifecycle" },
        ],
      },
    ],
    connect: {
      title: "Connect",
      links: [
        { label: "Talk to Fenon", href: "/contact" },
        { label: "Email the team", href: `mailto:${CONTACT_EMAIL}`, external: true },
      ],
    },
    appearanceLabel: "Appearance",
    artworkStart: "From model to machine.",
    artworkEnd: "Intelligence, in motion.",
    wordmark: "fenon",
    copyright: "© 2026 Fenon",
    backToTop: "Back to top",
  })
