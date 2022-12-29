import { Skill } from "../../../collections/generated-types"
import request from "./request"

/**
 * Loads all `Skill`s and sorts them in ascending order by their priority key.
 */
export default async function getSkills(): Promise<Skill[]> {
  return await request("skills", {
    sort: {
      key: "priority",
      order: "ascending",
    },
  })
}
