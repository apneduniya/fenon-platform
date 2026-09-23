import { Fragment } from "react"

// Renders deliberate line breaks from content arrays (headings are broken by design, not by width).
export function Lines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ))
}
