/**
 * Creates a new `ErrorResponse` object.
 * @param status The HTTP status of the error
 * @param message An optional human readable message
 */
export function createErrorResponse(status: number, message?: string): ErrorResponse {
  return {
    status,
    message: message ?? "",
    timestamp: new Date().toUTCString(),
  }
}

/**
 * Check if any object is an `ErrorResponse`
 * @param object The object to check
 */
export function asErrorResponse(object: any): object is ErrorResponse {
  if ("status" in object && "message" in object && "timestamp" in object) {
    return true
  }

  return false
}

/**
 * The standard API reponse when an error occured.
 */
export default interface ErrorResponse {
  readonly status: number
  readonly message: string
  readonly timestamp: string
}
