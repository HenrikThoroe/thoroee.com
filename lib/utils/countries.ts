export const codes = ["de", "no"] as const

export type CountryCode = typeof codes[number]

/**
 * Returns a label that describes the country given by the code.
 *
 * @param code The country code of which the label should be created
 * @returns A label for the given country code
 */
export function getCountryLabel(code: CountryCode): string {
  switch (code) {
    case "de":
      return "Germany"
    case "no":
      return "Norway"
  }
}
