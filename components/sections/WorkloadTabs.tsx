"use client"

import { Lines } from "@/components/common/Lines"
import { TextLink } from "@/components/common/TextLink"
import { ArrowIcon } from "@/components/common/icons"
import { WorkloadGrid } from "@/components/illustrations/WorkloadGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Workload } from "@/lib/schemas/content"

interface WorkloadTabsProps {
  items: readonly Workload[]
  cardLabel: string
  linkLabel: string
}

export function WorkloadTabs({ items, cardLabel, linkLabel }: WorkloadTabsProps) {
  return (
    <Tabs defaultValue={items[0].id} orientation="vertical" className="mt-[9px] grid gap-0 lg:mt-[25px] lg:grid-cols-[320px_1fr] lg:gap-[60px]">
      <TabsList activateOnFocus variant="line" className="grid h-auto w-full grid-cols-3 items-stretch gap-[13px] rounded-none p-0 lg:flex lg:flex-col lg:gap-0">
        {items.map((item, i) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className="group/tab h-[52px] flex-none justify-between gap-0 rounded-none border-0 border-b border-border px-0 text-tab font-normal text-muted-foreground after:hidden group-data-vertical/tabs:justify-between data-active:text-foreground lg:h-[75px] lg:group-data-vertical/tabs:justify-start"
          >
            <span className="font-mono text-mono-xs text-muted-foreground group-data-active/tab:text-primary lg:w-7">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
            <ArrowIcon className="ml-auto hidden size-[11px] text-foreground lg:block" />
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent key={item.id} value={item.id} keepMounted className="grid gap-[23px] text-base lg:grid-cols-[1fr_440px] lg:gap-[47px]">
          <div className="pt-[32.5px] lg:pt-[53px]">
            <h3 className="text-heading-lg">
              <Lines lines={item.title} />
            </h3>
            <p className="mt-6 max-w-[420px] text-lede-md text-muted-foreground lg:mt-[27px]">{item.body}</p>
            <TextLink link={{ label: linkLabel, href: "/#lifecycle" }} className="mt-3 lg:mt-[30px]" />
          </div>

          <div className="rounded-lg border border-border bg-muted px-6 pt-[26px] pb-[23px] lg:mt-[18px] lg:pb-[14px]">
            <p className="font-mono text-mono-caption text-muted-foreground uppercase">{cardLabel}</p>
            <p className="mt-[13px] text-lede-lg">{item.model}</p>
            <div className="mt-[18px] lg:mt-[26px]">
              <WorkloadGrid activeCells={item.activeCells} />
            </div>
            <div className="mt-[10px] flex justify-between border-t border-border pt-[17px] lg:mt-[29px] font-mono text-mono-xs text-muted-foreground">
              <span>IN / {item.input}</span>
              <span>OUT / {item.output}</span>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
