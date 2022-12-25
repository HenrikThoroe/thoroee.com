import { RewardReference } from "../../../collections/generated-types"
import request from "./request"

/**
 * Loads all `RewardReference`s and sorts them in descending order by the given date.
 */
export default async function getRewardReferences(): Promise<
  RewardReference[]
> {
  return await request("reward-reference", {
    sort: {
      order: "descending",
      key: "date",
    },
  })
}
