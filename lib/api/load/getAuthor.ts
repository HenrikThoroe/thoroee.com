import { User } from "../../../collections/generated-types"
import request from "./request"

/**
 * Loads a single `User` which has the `isAuthor` flag set.
 * If no author is found, an error is thrown.
 *
 * If an author is found a copy will be returned, which has privacy critical
 * information removed. A call to this method is only possible on the server side.
 */
export default async function getAuthor(): Promise<User> {
  const data: User[] = await request("users", {
    query: {
      isAuthor: {
        equals: true,
      },
    },
    headers: {
      Authorization: `User API-Key ${process.env.API_KEY}`,
    },
  })

  if (data.length === 0) {
    throw Error(`No author found.`)
  }

  const author = data[0]

  return {
    about: author.about,
    email: author.email,
    profilePicture: author.profilePicture,
    roles: [],
    id: author.id,
    createdAt: author.createdAt,
    updatedAt: author.updatedAt,
  }
}
