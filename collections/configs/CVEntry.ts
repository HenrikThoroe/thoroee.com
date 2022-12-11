import { CollectionConfig } from "payload/types"
import readOnly from "../access/readOnly"

const CVEntry: CollectionConfig = {
  slug: "cv-entry",
  labels: {
    singular: "CV Entry",
    plural: "CV Entries",
  },
  access: readOnly,
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
  ],
}

export default CVEntry
