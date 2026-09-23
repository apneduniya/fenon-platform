import { createCn } from "cn/config"

// Custom type tokens must be registered, or cn() treats `text-display` as a colour and drops `text-foreground`.
export const cn = createCn({
  extend: {
    // Custom container widths and the gutter spacing token from styles/theme.css.
    theme: { container: ["page", "content"], spacing: ["gutter"] },
    classGroups: {
      "font-size": [
        {
          text: [
            "display-hero",
            "display-cta",
            "display",
            "display-sm",
            "heading-lg",
            "heading",
            "heading-sm",
            "title",
            "tab",
            "lede-lg",
            "lede-md",
            "lede",
            "body",
            "body-sm",
            "caption",
            "body-xs",
            "mono-md",
            "mono-sm",
            "mono-code",
            "mono-code-lg",
            "mono-xs",
            "mono-link",
            "mono-micro",
            "mono-figure",
            "mono-caption",
            "mono-label",
            "mono-ruler",
            "mono-artwork",
            "mono-bar",
            "mono-switch",
            "mono-tagline",
            "display-wordmark",
          ],
        },
      ],
    },
  },
})
