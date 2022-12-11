import { isAdmin } from "./admin"

/**
 * Access modifier that only allows modifications
 * if the user has the admin role.
 * Read access is allowed for all users and for
 * requests from not logged in users.
 */
const readOnly = {
  read: () => true,
  update: isAdmin,
  create: isAdmin,
  delete: isAdmin,
}

export default readOnly
