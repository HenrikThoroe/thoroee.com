import { CollectionConfig } from "payload/types"
import readOnly from "../access/readOnly"
import BrowserBlock from "./layouts/Browser"
import CardBlock from "./layouts/Card"
import ClusterBlock from "./layouts/Cluster"
import ConsoleBlock from "./layouts/Console"

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
      name: "marketing",
      type: "text",
      required: false,
    },
    {
      name: "dedicated",
      label: "Dedicated Project Section",
      type: "checkbox",
      required: false,
    },
    {
      name: "priority",
      type: "number",
      required: false,
    },
    {
      name: "layout",
      type: "blocks",
      required: false,
      blocks: [ConsoleBlock, CardBlock, BrowserBlock, ClusterBlock],
    },
  ],
}

export default Projects
