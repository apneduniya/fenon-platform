import { Container } from "@/components/common/Container"
import { TextLink } from "@/components/common/TextLink"
import { announcement } from "@/content/site"

export function AnnouncementBar() {
  return (
    <div className="bg-announcement text-announcement-foreground">
      <Container className="flex h-[30px] items-center gap-[15px] text-caption lg:h-[33px] lg:gap-6">
        <p>{announcement.message}</p>
        <TextLink
          link={announcement}
          className="gap-[10px] text-caption whitespace-nowrap text-announcement-foreground"
          iconClassName="size-[11px]"
        />
      </Container>
    </div>
  )
}
