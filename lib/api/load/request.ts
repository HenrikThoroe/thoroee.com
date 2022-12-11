import ResponseException from "../exceptions/ResponseException"

export type Environment = "client" | "server"

export type Endpoint = "cv-entry" | "projects"

export interface Options<T> {
  sort?: {
    key: keyof T
    order?: "ascending" | "descending"
  }
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
  let query: string[] = []

  if (options?.sort) {
    const order = options.sort.order === "descending" ? "-" : ""
    query.push(`sort=${order}${String(options.sort.key)}`)
  }

  let queryString = query.join("&")

  if (queryString.length > 0) {
    queryString = `?${queryString}`
  }

  const serverSideURL = process.env.API_URL
  const clientSideURL = process.env.NEXT_PUBLIC_API_URL
  const url = serverSideURL ?? clientSideURL
  const response = await fetch(`${url}/api/${endpoint}${queryString}`)

  if (!response.ok) {
    throw new ResponseException(response.status)
  }

  return (await response.json()).docs as T[]
}
