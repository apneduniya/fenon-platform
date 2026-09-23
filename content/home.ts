import { z } from "zod"
import { linkSchema, sectionHeadingSchema, traceStepSchema, workloadSchema } from "@/lib/schemas/content"

export const hero = z
  .object({
    eyebrow: z.string(),
    title: z.string(),
    titleAccent: z.string(),
    primaryCta: linkSchema,
    secondaryCta: linkSchema,
    leadIn: z.string(),
    body: z.string(),
    illustrationAlt: z.string(),
    caption: z.string(),
    captionNote: z.string(),
    motionLabel: z.string(),
    capabilitiesLabel: z.string(),
    capabilities: z.array(linkSchema),
  })
  .parse({
    eyebrow: "The inference layer for robotics",
    title: "Your models.",
    titleAccent: "In the real world.",
    primaryCta: { label: "Build with Fenon", href: "/contact" },
    secondaryCta: { label: "Explore the architecture", href: "/#platform" },
    leadIn: "Run the models that move the physical world.",
    body: "Fenon is inference infrastructure for robotics. Connect cloud intelligence to physical machines—without making infrastructure your core work.",
    illustrationAlt:
      "Isometric diagram of compute tiles: observations from a physical machine flow into model execution on two highlighted orange tiles, and the response returns to the robot's control loop.",
    caption: "Observation in → model execution → response out",
    captionNote: "Conceptual architecture · not live telemetry",
    motionLabel: "Play motion",
    capabilitiesLabel: "Built around the machine",
    capabilities: [
      { label: "Reasoning & planning", href: "/#workloads" },
      { label: "World-model inference", href: "/#workloads" },
      { label: "Policies & actions", href: "/#workloads" },
    ],
  })

export const platform = z
  .object({
    heading: sectionHeadingSchema,
    modelFirst: z.object({ eyebrow: z.string(), title: z.array(z.string()), body: z.string(), note: z.string() }),
    connected: z.object({
      eyebrow: z.string(),
      title: z.array(z.string()),
      body: z.string(),
      steps: z.array(z.object({ role: z.string(), action: z.string(), icon: z.enum(["camera", "chip", "arm"]) })),
    }),
    scale: z.object({
      eyebrow: z.string(),
      title: z.array(z.string()),
      body: z.string(),
      facets: z.array(z.string()),
      chartLabel: z.string(),
      chartAxis: z.string(),
      legend: z.object({ requests: z.string(), compute: z.string() }),
      note: z.string(),
    }),
  })
  .parse({
    heading: {
      id: "platform",
      eyebrow: "The platform",
      title: ["The cloud layer behind", "physical intelligence."],
      lede: "Your model is one part of the system. Fenon focuses on the inference layer that connects it to the machine.",
    },
    modelFirst: {
      eyebrow: "Model-first development",
      title: ["Bring the intelligence.", "Not the infrastructure work."],
      body: "Define the model, its inputs and its runtime. Keep the integration visible and the deployment details out of the way.",
      note: "Illustrative configuration, not a released SDK",
    },
    connected: {
      eyebrow: "A connected system",
      title: ["An execution layer.", "Not another model catalogue."],
      body: "Observations go in. Model responses come back. Design the intelligence around your robot’s own control loop.",
      steps: [
        { role: "Robot", action: "Observe", icon: "camera" },
        { role: "Fenon", action: "Infer", icon: "chip" },
        { role: "Control", action: "Respond", icon: "arm" },
      ],
    },
    scale: {
      eyebrow: "From experiment to deployment",
      title: ["A single robot is the start.", "The inference layer shouldn’t be the limit."],
      body: "Build around changing workloads: the models you run, the observations they receive, and the machines that depend on them.",
      facets: ["Model version", "Request context", "Runtime needs"],
      chartLabel: "Workload shape",
      chartAxis: "Observation window →",
      legend: { requests: "Requests", compute: "Compute response" },
      note: "Illustrative workload shape · not capacity or benchmark data",
    },
  })

export const workloads = z
  .object({ heading: sectionHeadingSchema, cardLabel: z.string(), linkLabel: z.string(), items: z.array(workloadSchema) })
  .parse({
    heading: {
      id: "workloads",
      eyebrow: "Workloads",
      title: ["Different models.", "One inference layer."],
      lede: "Robotics intelligence spans more than perception. Organize the models around the work your machine needs to do.",
    },
    cardLabel: "Model workload / concept",
    linkLabel: "See the inference loop",
    items: [
      {
        id: "reasoning",
        label: "Reasoning",
        title: ["Give observations", "some understanding."],
        body: "Connect multimodal reasoning to the robot’s context. Interpret what is happening, reason about the task, and propose what should happen next.",
        model: "reasoning-model",
        input: "observation + task",
        output: "plan",
        activeCells: [[0, 1], [0, 3], [0, 5], [1, 1], [1, 5], [2, 0], [2, 3], [2, 6], [3, 2], [3, 4], [4, 3]],
      },
      {
        id: "world-models",
        label: "World models",
        title: ["Reason about what", "could happen next."],
        body: "Use world-model inference to explore possible transitions. Bring state, history and candidate actions into a common representation.",
        model: "world-model",
        input: "state + action",
        output: "next state",
        activeCells: [[0, 0], [0, 6], [1, 1], [1, 5], [2, 2], [2, 4], [3, 3], [3, 4], [3, 5], [3, 6], [4, 6]],
      },
      {
        id: "policies",
        label: "Policies",
        title: ["Turn context into", "an action proposal."],
        body: "Connect observations to policy inference. Return action proposals to your robot’s controller for its own validation and execution.",
        model: "policy-model",
        input: "observation",
        output: "action proposal",
        activeCells: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [3, 6], [4, 6]],
      },
    ],
  })

export const modelToMachine = z
  .object({
    heading: sectionHeadingSchema,
    title: z.array(z.string()),
    steps: z.array(z.object({ title: z.string(), body: z.string() })),
    code: z.object({ filename: z.string(), footer: z.string(), note: z.array(z.string()) }),
  })
  .parse({
    heading: {
      id: "how-it-works",
      eyebrow: "Model to machine",
      title: ["Keep the integration", "as clear as the intent."],
      lede: "A deliberate boundary between cloud inference and the robot. The response informs the machine; local control remains local.",
    },
    title: ["The intelligence runs in the cloud.", "The robot owns the action."],
    steps: [
      { title: "Package the observation.", body: "Send the task and the context your model needs." },
      { title: "Run the model.", body: "Request an inference from the selected checkpoint." },
      { title: "Validate the response.", body: "Apply your local checks before an action is executed." },
    ],
    code: {
      filename: "robot_loop.py",
      footer: "Cloud inference → local validation → execution",
      note: ["Conceptual integration, not executable SDK documentation.", "Control requirements depend on your robot and deployment."],
    },
  })

export const lifecycle = z
  .object({ heading: sectionHeadingSchema, cardLabel: z.string(), replayLabel: z.string(), steps: z.array(traceStepSchema), note: z.string() })
  .parse({
    heading: {
      id: "lifecycle",
      eyebrow: "Follow the work",
      title: ["See the loop.", "Not just the request."],
      lede: "Make room for the details that matter: the observation, model version, response, and the boundary with your controller.",
    },
    cardLabel: "Inference lifecycle / example trace",
    replayLabel: "Replay",
    steps: [
      { label: "Observation", status: "Context prepared", progress: 0.22 },
      { label: "Model execution", status: "Response returned", progress: 0.67 },
      { label: "Local validation", status: "Controller checks", progress: 0.86 },
      { label: "Next action", status: "Machine responds", progress: 1, highlight: true },
    ],
    note: "Illustrative sequence. Bar lengths show process progression, not measured latency. No requests are being sent.",
  })

export const engineeringNotes = z
  .object({ heading: sectionHeadingSchema, linkLabel: z.string() })
  .parse({
    heading: {
      id: "engineering",
      eyebrow: "Engineering notes",
      title: ["Inside the inference layer."],
      lede: "Space for the architectures, experiments and decisions behind robotics inference.",
    },
    linkLabel: "Read the template",
  })

export const finalCta = z
  .object({ eyebrow: z.string(), title: z.array(z.string()), body: z.string(), cta: linkSchema })
  .parse({
    eyebrow: "From the model to the real world",
    title: ["Build what", "moves next."],
    body: "Tell us what you’re building, which models you run, and what your robot needs from its inference layer.",
    cta: { label: "Talk to Fenon", href: "/contact" },
  })
