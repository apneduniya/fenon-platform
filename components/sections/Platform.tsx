import { Card, CardEyebrow } from "@/components/common/Card"
import { CodeWindow } from "@/components/common/CodeWindow"
import { Container } from "@/components/common/Container"
import { Lines } from "@/components/common/Lines"
import { SectionHeading } from "@/components/common/SectionHeading"
import { ArmIcon, CameraIcon, ChipIcon } from "@/components/illustrations/FlowIcons"
import { WorkloadChart } from "@/components/illustrations/WorkloadChart"
import { deploymentYaml } from "@/content/code-samples"
import { platform } from "@/content/home"
import { cn } from "@/lib/utils"

const flowIcons = { camera: CameraIcon, chip: ChipIcon, arm: ArmIcon }

function CardIntro({
  eyebrow,
  title,
  body,
  titleClassName,
}: {
  eyebrow: string
  title: readonly string[]
  body: string
  titleClassName?: string
}) {
  return (
    <>
      <CardEyebrow>{eyebrow}</CardEyebrow>
      <h3 className={cn("mt-3 text-heading", titleClassName)}>
        <Lines lines={title} />
      </h3>
      <p className="mt-[13px] max-w-[440px] text-body text-muted-foreground">{body}</p>
    </>
  )
}

export function Platform() {
  const { heading, modelFirst, connected, scale } = platform
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="scroll-mt-8 pt-[78px] lg:pt-[114px]">
      <Container>
        <SectionHeading heading={heading} />

        <div className="mt-[34px] grid gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-[19px]">
          <Card className="px-[22px] pt-[23px] pb-[22px] lg:px-[34px] lg:pt-[33px] lg:pb-[28px]">
            <CardIntro {...modelFirst} />
            <CodeWindow sample={deploymentYaml} footer={modelFirst.note} dots className="mt-[22px] lg:mt-[31px]" footerClassName="py-[23px] lg:py-[19px]" />
          </Card>

          <Card className="flex flex-col px-[22px] pt-[26px] pb-[100px] lg:px-[34px] lg:pt-[33px] lg:pb-[90px]">
            <CardIntro {...connected} />
            <ol className="mt-auto grid grid-cols-3 items-center gap-[22px] pt-[77px] lg:gap-[41px] lg:pt-12">
              {connected.steps.map((step, i) => {
                const Icon = flowIcons[step.icon]
                const active = i === 1
                return (
                  <li
                    key={step.action}
                    className={cn(
                      "relative flex h-[110px] flex-col justify-between rounded-md border bg-muted p-3 pt-4 lg:h-[135px] lg:p-[17px] lg:pt-[26px] lg:pl-[22px]",
                      active ? "border-primary" : "border-border",
                    )}
                  >
                    {i > 0 && (
                      <span aria-hidden="true" className="absolute top-1/2 right-full flex w-[22px] items-center lg:w-[41px]">
                        <span className="h-px flex-1 bg-border" />
                        <span className="size-[5px] bg-primary" />
                        <span className="h-px w-[5px] bg-border" />
                      </span>
                    )}
                    <Icon className={cn("h-6 w-7", active ? "text-primary" : "text-foreground")} />
                    <span>
                      <span className="block font-mono text-mono-sm text-muted-foreground uppercase">{step.role}</span>
                      <span className="mt-1 block text-body">{step.action}</span>
                    </span>
                  </li>
                )
              })}
            </ol>
          </Card>
        </div>

        <Card className="mt-4 grid gap-[14px] px-[22px] pt-[26px] pb-[26px] lg:mt-[19px] lg:grid-cols-[555px_1fr] lg:gap-[60px] lg:px-[34px] lg:pt-[37px] lg:pb-[29px]">
          <div>
            <CardIntro {...scale} titleClassName="max-w-[410px]" />
            <ul className="mt-5 grid grid-cols-3 gap-[13px] lg:mt-[26px] lg:gap-[26px]">
              {scale.facets.map((facet) => (
                <li key={facet} className="border-t border-border pt-[11px] text-body-xs">
                  {facet}
                </li>
              ))}
            </ul>
          </div>

          <figure>
            <div className="flex gap-6 font-mono text-mono-xs text-muted-foreground lg:-mt-2">
              <span className="flex items-center gap-[10px]">
                <span aria-hidden="true" className="h-[2px] w-4 bg-chart-2" />
                {scale.legend.requests}
              </span>
              <span className="flex items-center gap-[10px]">
                <span aria-hidden="true" className="h-[2px] w-4 bg-chart-1" />
                {scale.legend.compute}
              </span>
            </div>
            <div className="mt-[13px] pl-[13px] lg:pl-[50px]">
              <p className="font-mono text-mono-micro text-muted-foreground uppercase">{scale.chartLabel}</p>
              <WorkloadChart className="mt-[10px] aspect-[515/136] w-full max-w-[515px]" />
              <p className="mt-[16px] font-mono text-mono-micro text-muted-foreground uppercase">{scale.chartAxis}</p>
            </div>
            <figcaption className="mt-[14px] font-mono text-mono-xs text-muted-foreground lg:mt-[24px]">{scale.note}</figcaption>
          </figure>
        </Card>
      </Container>
    </section>
  )
}
