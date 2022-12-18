import type { Block } from "payload/types"

/**
 * The layout for a project displayed using a console mock.
 */
const ConsoleBlock: Block = {
  slug: "console-layout",
  labels: {
    singular: "Console Layout",
    plural: "Console Layouts",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "interactions",
      label: "Interactions",
      type: "array",
      fields: [
        {
          name: "user",
          type: "text",
          required: true,
        },
        {
          name: "cmd",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "textarea",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: false,
        },
      ],
    },
  ],
}

export default ConsoleBlock
