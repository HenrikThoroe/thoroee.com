import pixelize from "./pixelize"

export type Spacing = "xs" | "s" | "m" | "l" | "xl" | "xxl" | number | string

/**
 * Creates a CSS string of the given spacing.
 * When given a variable as "s" or "m", the
 * acording CSS variable will be returned. Otherwise
 * the pixelized version of the input.
 */
export function parseSpacing(spacing: Spacing): string {
  switch (spacing) {
    case "xs":
      return "var(--spacing-xs)"
    case "s":
      return "var(--spacing-s)"
    case "m":
      return "var(--spacing-m)"
    case "l":
      return "var(--spacing-l)"
    case "xl":
      return "var(--spacing-xl)"
    case "xxl":
      return "var(--spacing-xxl)"
    default:
      return pixelize(spacing)
  }
}
