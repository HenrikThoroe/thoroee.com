import { loadEnvConfig } from "@next/env"

/**
 * Attaches the contents of the custom .env files to `process.env`.
 * Depending on the `NODE_ENV` either `.env.development` and `.env.development.local`
 * or `.env.production` and `.env.production.local` will
 * be loaded.
 *
 * @param options Custom options for the loader
 * @returns Output of the loader
 */
export default function loadenv() {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir, process.env.NODE_ENV === "development")
}
