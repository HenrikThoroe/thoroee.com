import { Project } from "../../../collections/generated-types"
import request from "./request"

/**
 * Loads all `Project`s
 */
export default async function getProjects(): Promise<Project[]> {
  return await request("projects", {
    sort: { key: "priority", order: "descending" },
  })
}
