import qs from "qs"
import ResponseException from "../exceptions/ResponseException"

export type Endpoint =
  | "cv-entry"
  | "projects"
  | "users"
  | "experience-reference"
  | "reward-reference"
  | "education-reference"

export interface Options<T> {
  sort?: {
    key: keyof T
    order?: "ascending" | "descending"
  }
  query?: any
  headers?: HeadersInit
}

/**
 * Performs a `fetch` request against the passed endpoint of the
 * API.
 *
 * @param endpoint The API that should be called
 * @param options Options which define the structure of the retuned data
 */
export default async function request<T>(
  endpoint: Endpoint,
  options?: Options<T>,
): Promise<T[]> {
  let query: any

  if (options?.sort) {
    const order = options.sort.order === "descending" ? "-" : ""

    query = {
      ...query,
      sort: `${order}${String(options.sort.key)}`,
    }
  }

  if (options?.query) {
    query = {
      ...query,
      where: options.query,
    }
  }

  const queryString = qs.stringify(query, { addQueryPrefix: true })
  const serverSideURL = process.env.API_URL
  const clientSideURL = process.env.NEXT_PUBLIC_API_URL
  const url = serverSideURL ?? clientSideURL
  const response = await fetch(`${url}/api/${endpoint}${queryString}`, {
    headers: options?.headers,
  })

  if (!response.ok) {
    throw new ResponseException(response.status)
  }

  return (await response.json()).docs as T[]
}
