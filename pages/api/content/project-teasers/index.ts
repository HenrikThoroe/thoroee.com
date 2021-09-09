import type { NextApiRequest, NextApiResponse } from "next"
import { createErrorResponse } from "../../../../lib/backend/ErrorResponse"
import withErrorResponse from "../../../../lib/backend/withErrorHandling"
import ProjectTeaser from "../../../../lib/shared/data/ProjectTeaser"

function handler(req: NextApiRequest, res: NextApiResponse<ProjectTeaser[]>) {
  const { method } = req

  if (method !== "GET") {
    throw createErrorResponse(400, "Invalid Method")
  }

  res.status(200).send([])
}

export default withErrorResponse(handler)
