import { CollectionConfig } from "payload/types"
import { isAdminFieldLevel } from "../access/admin"
import readOnly from "../access/readOnly"

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
    verify: false,
  },
  admin: {
    useAsTitle: "email",
  },
  access: readOnly,
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["public"],
      required: true,
      access: {
        read: isAdminFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: ["admin", "public"],
    },
  ],
}
