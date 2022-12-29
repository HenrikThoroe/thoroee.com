import type { Block } from "payload/types"

export const SwiftCodeBlock: Block = {
  slug: "swift-code-layout",
  labels: {
    singular: "Swift Code",
    plural: "Swift Code",
  },
  fields: [
    {
      name: "code",
      type: "code",
      required: true,
      admin: {
        language: "swift",
      },
    },
  ],
}

export const TSXCodeBlock: Block = {
  slug: "tsx-code-layout",
  labels: {
    singular: "TypeScript (JSX) Code",
    plural: "TypeScript (JSX) Code",
  },
  fields: [
    {
      name: "code",
      type: "code",
      required: true,
      admin: {
        language: "tsx",
      },
    },
  ],
}

export const CppCodeBlock: Block = {
  slug: "cpp-code-layout",
  labels: {
    singular: "C++ Code",
    plural: "C++ Code",
  },
  fields: [
    {
      name: "code",
      type: "code",
      required: true,
      admin: {
        language: "cpp",
      },
    },
  ],
}
