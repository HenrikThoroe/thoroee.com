import { Access } from "payload/config"
import { FieldAccess } from "payload/types"
import { User } from "../generated-types"

const adminId = "admin"

/**
 * Determines whether the logged in user of the request is an admin.
 */
export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes(adminId))
}

/**
 * Determines whether the logged in user of the request is an admin.
 */
export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return Boolean(user?.roles?.includes(adminId))
}
