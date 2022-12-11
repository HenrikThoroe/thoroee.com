import { CvEntry } from "../../../collections/generated-types"
import request, { Environment } from "./request"

/**
 * Loads all `CvEntry`s
 */
export default async function getCVEntries(): Promise<CvEntry[]> {
  const data: CvEntry[] = await request("cv-entry", {
    sort: {
      key: "date",
      order: "descending",
    },
  })

  return data
}
