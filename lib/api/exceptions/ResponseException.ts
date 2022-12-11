export default class ResponseException extends Error {
  constructor(statusCode: number) {
    super(`Failed to load resource with network response code '${statusCode}'`)
  }
}
