import type { NextApiRequest, NextApiResponse } from "next"
import ErrorResponse, { asErrorResponse, createErrorResponse } from "./ErrorResponse"

type Handler<T> = (req: NextApiRequest, res: NextApiResponse<T>) => Promise<void> | void

/**
 * HOC for NextJS API endpoints which takes care of possible exceptions.
 * If the API handler throws an `ErrorResponse` it's send as the response body.
 * If the error is any other object a general message is send instead with the error code 500.
 * @param handler The API endpoint handler
 * @returns A new handler which should be returned for each endpoint
 */
export default function withErrorResponse<T>(handler: Handler<T>): Handler<T | ErrorResponse> {
  return async (req, res) => {
    try {
      const result = handler(req, res)

      if (result instanceof Promise) {
        await result
      }
    } catch (error) {
      if (asErrorResponse(error)) {
        res.status(error.status).json(error)
      } else {
        res.status(500).json(createErrorResponse(500, "An internal server error occcured"))
      }
    }
  }
}
