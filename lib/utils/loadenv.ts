import { config as dotenv, DotenvConfigOptions } from "dotenv"
import path from "path"

/**
 * Attaches the contents of the custom .env files to `process.env`.
 * Depending on the `NODE_ENV` either `.dev.env` or `.prod.env` will
 * be loaded.
 *
 * @param options Custom options for the loader
 * @returns Output of the loader
 */
export default function loadenv(options?: DotenvConfigOptions) {
  if (process.env.NODE_ENV === "production") {
    return dotenv({
      ...options,
      path: path.resolve(process.cwd(), ".prod.env"),
    })
  }

  return dotenv({
    ...options,
    path: path.resolve(process.cwd(), ".dev.env"),
  })
}
