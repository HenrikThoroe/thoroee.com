import { CollectionConfig } from "payload/types"
import { resourceOptions } from "../../lib/utils/resources"
import { isAdmin } from "../access/admin"

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
    verify: false,
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: isAdmin,
    update: isAdmin,
    create: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["public"],
      required: true,
      options: ["admin", "public"],
    },
    {
      name: "about",
      type: "textarea",
      required: false,
    },
    {
      name: "profilePicture",
      type: "select",
      options: resourceOptions,
    },
    {
      name: "isAuthor",
      type: "checkbox",
    },
  ],
}
