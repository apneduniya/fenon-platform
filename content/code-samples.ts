// Pre-tokenised samples: two short, static snippets don't justify a runtime highlighter.
export type CodeTokenKind = "plain" | "accent" | "comment"
export type CodeToken = { text: string; kind?: CodeTokenKind }
export type CodeLine = CodeToken[]

export interface CodeSample {
  filename: string
  lines: CodeLine[]
  // Plain text for the clipboard.
  source: string
}

function sample(filename: string, lines: CodeLine[]): CodeSample {
  return { filename, lines, source: lines.map((line) => line.map((t) => t.text).join("")).join("\n") }
}

// Values align in a column 12 characters from the key, as in the design.
const key = (name: string): CodeLine => [{ text: `${name}:`.padEnd(12), kind: "accent" }]

export const deploymentYaml = sample("deployment.yaml", [
  [{ text: "# Integration concept", kind: "comment" }],
  [...key("name"), { text: "manipulation-policy" }],
  [...key("model"), { text: "your-team/checkpoint" }],
  [...key("input"), { text: "observation" }],
  [...key("output"), { text: "action_proposal" }],
  [...key("runtime"), { text: "cloud" }],
])

export const robotLoopPy = sample("robot_loop.py", [
  [{ text: "# Pseudocode — your robot, your model", kind: "comment" }],
  [{ text: "observation = robot.observe()" }],
  [],
  [{ text: "response = inference.run(" }],
  [{ text: "    model=" }, { text: '"your-team/policy"', kind: "accent" }, { text: "," }],
  [{ text: "    input=observation," }],
  [{ text: ")" }],
  [],
  [{ text: "if", kind: "accent" }, { text: " controller.accepts(response):" }],
  [{ text: "    controller.execute(response)" }],
])
