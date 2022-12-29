import { CollectionConfig } from "payload/types"
import { languages, getLanguageLabel } from "../../lib/utils/languages"
import readOnly from "../access/readOnly"
import { CppCodeBlock, SwiftCodeBlock, TSXCodeBlock } from "./layouts/Code"

export const Skill: CollectionConfig = {
  slug: "skills",
  labels: {
    singular: "Skill",
    plural: "Skills",
  },
  access: readOnly,
  admin: {
    useAsTitle: "category",
  },
  fields: [
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "textarea",
      required: true,
    },
    {
      name: "priority",
      type: "number",
      required: false,
    },
    {
      name: "language",
      type: "select",
      options: languages.map((lang) => ({
        value: lang,
        label: getLanguageLabel(lang),
      })),
      required: true,
    },
    {
      name: "code",
      type: "blocks",
      minRows: 1,
      maxRows: 1,
      blocks: [SwiftCodeBlock, CppCodeBlock, TSXCodeBlock],
    },
  ],
}
