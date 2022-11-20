export type AccentColors = "blue"

/**
 * Returns the CSS variable related to the given
 * accent color.
 */
export function parseAccentColor(color: AccentColors) {
  return `var(--accent-${color})`
}
