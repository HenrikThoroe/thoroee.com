import payload from "payload"
import config from "../../payload.config"

/**
 * The name of the slug used for the user collection
 */
export const userSlug = config.admin.user

/**
 * Returns a copy of `data` with overriden / added password field.
 *
 * The value of `process.env.DEV_PASSWORD` is used for the password.
 * When not defined, the process will be terminated.
 */
export function injectPassword(data: any): any {
  const password = process.env.DEV_PASSWORD

  if (password === undefined) {
    payload.logger.error(
      `'DEV_PASSWORD' is not defined in the current environment.`,
    )
    process.exit(1)
  }

  return {
    ...data,
    password,
  }
}

/**
 * Returns a copy of `data` with overriden email field.
 *
 * The value of the email field will be replaced with `{EMAIL}` as placeholder.
 */
export function hideEmail(data: any): any {
  if (data.email !== undefined) {
    return {
      ...data,
      email: "{EMAIL}",
    }
  }

  return data
}

/**
 * Returns a copy of `data` with overriden / added email field.
 *
 * The value of `process.env.DEV_EMAIL` is used for the password.
 * When not defined, the process will be terminated.
 */
export function injectEmail(data: any): any {
  const email = process.env.DEV_EMAIL

  if (email === undefined) {
    payload.logger.error(
      `'DEV_EMAIL' is not defined in the current environment.`,
    )
    process.exit(1)
  }

  return {
    ...data,
    email,
  }
}
