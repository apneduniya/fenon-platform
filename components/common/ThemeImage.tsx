import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

type ThemeImageProps = Omit<ImageProps, "src" | "preload" | "loading"> & {
  srcLight: ImageProps["src"]
  srcDark: ImageProps["src"]
}

// Next.js docs pattern: two lazy images, only the visible one loads. Use fetchPriority, never preload/eager.
export function ThemeImage({ srcLight, srcDark, className, alt, ...rest }: ThemeImageProps) {
  return (
    <>
      <Image {...rest} alt={alt} src={srcLight} className={cn("dark:hidden", className)} />
      <Image {...rest} alt={alt} src={srcDark} className={cn("hidden dark:block", className)} />
    </>
  )
}
