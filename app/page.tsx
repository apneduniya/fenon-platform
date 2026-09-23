import { EngineeringNotes } from "@/components/sections/EngineeringNotes"
import { FinalCta } from "@/components/sections/FinalCta"
import { Hero } from "@/components/sections/Hero"
import { InferenceLifecycle } from "@/components/sections/InferenceLifecycle"
import { ModelToMachine } from "@/components/sections/ModelToMachine"
import { Platform } from "@/components/sections/Platform"
import { Workloads } from "@/components/sections/Workloads"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Platform />
      <Workloads />
      <ModelToMachine />
      <InferenceLifecycle />
      <EngineeringNotes />
      <FinalCta />
    </main>
  )
}
