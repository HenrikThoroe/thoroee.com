import type { Block } from "payload/types"

/**
 * The layout for a project displayed using a cluster.
 */
const ClusterBlock: Block = {
  slug: "cluster-layout",
  labels: {
    singular: "Cluster Layout",
    plural: "Cluster Layouts",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "nodes",
      label: "Nodes",
      type: "array",
      fields: [
        {
          name: "content",
          type: "text",
        },
        {
          name: "icon",
          type: "text",
        },
        {
          name: "link",
          type: "text",
        },
        {
          name: "low-priority",
          type: "checkbox",
        },
      ],
    },
  ],
}

export default ClusterBlock
