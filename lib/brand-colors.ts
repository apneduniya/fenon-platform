// Raw brand values for contexts that cannot read CSS variables (viewport theme-color, OG images).
// Must mirror app/styles/palette.css. This is the only TS file lint:tokens allows to hold colour literals.
export const brandColors = {
  paper: "#FFFFFF",
  black: "#000000",
  ink: "#090A09",
  orange: "#FF5402",
} as const
