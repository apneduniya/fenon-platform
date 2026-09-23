import { WORKLOAD_GRID, type Workload } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"

// 7×5 concept grid. Active cells cross-fade (opacity only) when the workload changes.
export function WorkloadGrid({ activeCells }: { activeCells: Workload["activeCells"] }) {
  const active = new Set(activeCells.map(([row, col]) => row * WORKLOAD_GRID.columns + col))
  return (
    <div aria-hidden="true" className="grid grid-cols-7 gap-x-[7px] gap-y-2">
      {Array.from({ length: WORKLOAD_GRID.columns * WORKLOAD_GRID.rows }, (_, i) => (
        <span key={i} className="relative h-[13px] rounded-[2px] bg-grid-cell">
          <span
            className={cn(
              "absolute inset-0 rounded-[2px] bg-grid-cell-active transition-opacity duration-500 ease-fenon",
              active.has(i) ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: `${(i % WORKLOAD_GRID.columns) * 30}ms` }}
          />
        </span>
      ))}
    </div>
  )
}
