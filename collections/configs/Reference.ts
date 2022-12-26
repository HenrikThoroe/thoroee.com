import { CollectionConfig } from "payload/types"
import { codes, getCountryLabel } from "../../lib/utils/countries"
import { resourceOptions } from "../../lib/utils/resources"
import readOnly from "../access/readOnly"

export const RewardReference: CollectionConfig = {
  slug: "reward-reference",
  labels: {
    singular: "Reward",
    plural: "Rewards",
  },
  access: readOnly,
  admin: {
    useAsTitle: "institution",
    group: "References",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "institution",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "media",
      type: "select",
      required: true,
      options: resourceOptions,
    },
  ],
}

export const EducationReference: CollectionConfig = {
  slug: "education-reference",
  labels: {
    singular: "Education",
    plural: "Educations",
  },
  access: readOnly,
  admin: {
    useAsTitle: "institution",
    group: "References",
  },
  fields: [
    {
      name: "institution",
      type: "text",
      required: true,
    },
    {
      name: "degree",
      type: "text",
      required: true,
    },
    {
      name: "start",
      type: "date",
      required: true,
    },
    {
      name: "end",
      type: "date",
      required: false,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "media",
      type: "select",
      required: true,
      options: resourceOptions,
    },
  ],
}

export const ExperienceReference: CollectionConfig = {
  slug: "experience-reference",
  labels: {
    singular: "Experience",
    plural: "Experiences",
  },
  access: readOnly,
  admin: {
    useAsTitle: "institution",
    group: "References",
  },
  fields: [
    {
      name: "institution",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "start",
      type: "date",
      required: true,
    },
    {
      name: "end",
      type: "date",
      required: false,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "media",
      type: "select",
      required: true,
      options: resourceOptions,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "country",
      type: "select",
      options: codes.map((code) => ({
        label: getCountryLabel(code),
        value: code,
      })),
    },
  ],
}
