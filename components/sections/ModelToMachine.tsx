import { CodeWindow } from "@/components/common/CodeWindow"
import { Container } from "@/components/common/Container"
import { CopyButton } from "@/components/common/CopyButton"
import { Lines } from "@/components/common/Lines"
import { SectionHeading } from "@/components/common/SectionHeading"
import { robotLoopPy } from "@/content/code-samples"
import { modelToMachine } from "@/content/home"

export function ModelToMachine() {
  const { heading, title, steps, code } = modelToMachine
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="scroll-mt-8 pt-[79.5px] lg:pt-[137px]">
      <Container>
        <SectionHeading heading={heading} className="border-b border-border pb-[29px] lg:pb-[39px]" />

        <div className="grid gap-12 border-b border-border pt-[31px] pb-6 lg:grid-cols-[1fr_610px] lg:gap-10 lg:pt-[39px] lg:pb-[40px]">
          <div className="lg:pt-[18px]">
            <h3 className="max-w-[340px] text-heading-lg">
              <Lines lines={title} />
            </h3>
            <ol className="mt-9 space-y-[14px] lg:mt-[38px] lg:space-y-[22px]">
              {steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[32px_1fr]">
                  <span className="pt-[3px] font-mono text-mono-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-body font-medium">{step.title}</p>
                    <p className="text-body text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <CodeWindow
              sample={robotLoopPy}
              footer={code.footer}
              action={<CopyButton text={robotLoopPy.source} />}
              className="rounded-lg"
              headerClassName="h-12 lg:h-[50px]"
              bodyClassName="px-4 pt-[22px] pb-[22px] text-mono-code-lg lg:px-[29px] lg:pt-[27px] lg:pb-[25px]"
              footerClassName="py-[9px] lg:py-[10px]"
            />
            <p className="mt-[18px] font-mono text-mono-xs text-muted-foreground">
              <Lines lines={code.note} />
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
