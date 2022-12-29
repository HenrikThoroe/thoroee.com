export const languages = ["tsx", "cpp", "swift"] as const

export type Language = typeof languages[number]

/**
 * Returns a label that describes the given programming language.
 *
 * @param code The language identifier
 * @returns A label for the given programming language
 */
export function getLanguageLabel(lang: Language): string {
  switch (lang) {
    case "tsx":
      return "TypeScript (JSX)"
    case "swift":
      return "Swift"
    case "cpp":
      return "C++"
  }
}
