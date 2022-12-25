import { ExperienceReference } from "../../../collections/generated-types"
import request from "./request"

/**
 * Loads all `ExperienceReference`s and sorts them in descending order by the given start date.
 */
export default async function getExperienceReferences(): Promise<
  ExperienceReference[]
> {
  return await request("experience-reference", {
    sort: {
      order: "descending",
      key: "start",
    },
  })
}
