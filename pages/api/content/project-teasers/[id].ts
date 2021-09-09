import type { NextApiRequest, NextApiResponse } from "next"
import { createErrorResponse } from "../../../../lib/backend/ErrorResponse"
import withErrorResponse from "../../../../lib/backend/withErrorHandling"
import ProjectTeaser from "../../../../lib/shared/data/ProjectTeaser"

function handler(req: NextApiRequest, res: NextApiResponse<ProjectTeaser>) {
  const { id } = req.query
  const { method } = req

  if (typeof id !== "string") {
    throw createErrorResponse(400, "Bad ID")
  }

  switch (method) {
    case "GET":
      throw createErrorResponse(500, "Not Implemented")
    case "PUT":
      throw createErrorResponse(500, "Not Implemented")
    case "DELETE":
      throw createErrorResponse(500, "Not Implemented")
  }

  throw createErrorResponse(400, "Unsupported Method")
}

export default withErrorResponse(handler)
