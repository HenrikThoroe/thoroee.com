import type { Block } from "payload/types"

/**
 * The layout for a project displayed using a browser mock.
 */
const BrowserBlock: Block = {
  slug: "browser-layout",
  labels: {
    singular: "Browser Layout",
    plural: "Browser Layouts",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "tech",
      type: "text",
      required: true,
    },
    {
      name: "operator",
      type: "text",
      required: true,
    },
    {
      name: "result",
      type: "text",
      required: true,
    },
    {
      name: "source",
      type: "text",
      required: true,
    },
  ],
}

export default BrowserBlock
