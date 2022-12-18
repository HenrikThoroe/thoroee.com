import type { Block } from "payload/types"

/**
 * The layout for a project displayed using a card.
 */
const CardBlock: Block = {
  slug: "card-layout",
  labels: {
    singular: "Card Layout",
    plural: "Card Layouts",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "body",
      type: "textarea",
      required: true,
    },
    {
      name: "store",
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

export default CardBlock
