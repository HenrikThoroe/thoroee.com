import { EducationReference } from "../../../collections/generated-types"
import request from "./request"

/**
 * Loads all `EducationReference`s and sorts them in descending order by the given start date.
 */
export default async function getEducationReferences(): Promise<
  EducationReference[]
> {
  return await request("education-reference", {
    sort: {
      order: "descending",
      key: "start",
    },
  })
}
