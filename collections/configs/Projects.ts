import { CollectionConfig } from "payload/types"
import readOnly from "../access/readOnly"

const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  admin: {
    useAsTitle: "name",
  },
  access: readOnly,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "name-long",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "github",
      type: "text",
      required: true,
    },
    {
      name: "dedicated",
      type: "checkbox",
      required: false,
    },
    {
      name: "priority",
      type: "number",
      required: false,
    },
  ],
}

export default Projects
