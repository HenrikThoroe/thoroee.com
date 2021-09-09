import ProjectState from "./ProjectState"

/**
 * The model of a project teaser card which can be found on the starting page.
 */
export default interface ProjectTeaser {
  /** A short descriptional title */
  readonly title: string

  /** A longer subtitle which gives more detail */
  readonly subtitle: string

  /** A medium-sized descriptional text of the project */
  readonly body: string

  /** The description of the current state. 1 - 3 words */
  readonly stateDesciption: string

  /** The state of the project */
  readonly state: ProjectState

  /** A collection of related links */
  readonly links: {
    /** The GitHub URL */
    readonly github?: string

    /** A link to download the product */
    readonly download?: string

    /** A link to buy the product */
    readonly buy?: string

    /** A link to a dedicated page giving more details */
    readonly info?: string
  }
}
