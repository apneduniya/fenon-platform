import { z } from "zod"

export const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
})

export const sectionHeadingSchema = z.object({
  id: z.string().min(1),
  eyebrow: z.string().min(1),
  // Each entry renders on its own line (the design breaks headings deliberately).
  title: z.array(z.string().min(1)).min(1),
  lede: z.string().min(1),
})

const GRID_COLUMNS = 7
const GRID_ROWS = 5

export const workloadSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  title: z.array(z.string().min(1)).min(1),
  body: z.string().min(1),
  model: z.string().min(1),
  input: z.string().min(1),
  output: z.string().min(1),
  // Active cells as [row, column] in the 7×5 concept grid.
  activeCells: z
    .array(z.tuple([z.number().int().min(0).max(GRID_ROWS - 1), z.number().int().min(0).max(GRID_COLUMNS - 1)]))
    .min(1),
})

export const articleSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().min(1),
  sections: z.array(z.object({ heading: z.string().min(1), body: z.string().min(1) })).min(1),
  illustration: z.enum(["architecture", "loop", "evaluation"]),
})

export const traceStepSchema = z.object({
  label: z.string().min(1),
  status: z.string().min(1),
  // Share of the track filled, 0–1. Illustrative progression, not latency.
  progress: z.number().min(0).max(1),
  highlight: z.boolean().optional(),
})

export type Link = z.infer<typeof linkSchema>
export type SectionHeadingContent = z.infer<typeof sectionHeadingSchema>
export type Workload = z.infer<typeof workloadSchema>
export type Article = z.infer<typeof articleSchema>
export type TraceStep = z.infer<typeof traceStepSchema>

export const WORKLOAD_GRID = { columns: GRID_COLUMNS, rows: GRID_ROWS } as const
