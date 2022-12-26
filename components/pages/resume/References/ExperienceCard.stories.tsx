import { ComponentStory } from "@storybook/react"
import { resources } from "../../../../lib/utils/resources"
import createCollectionMock from "../../../../utils/createCollectionMock"
import ExperienceCard from "./ExperienceCard"

export default {
  title: "Website/Components/Pages/Resumé/ExperienceCard",
  component: ExperienceCard,
}

const Template: ComponentStory<typeof ExperienceCard> = (args) => (
  <ExperienceCard {...args} />
)

export const Complete = Template.bind({})
Complete.args = {
  ...createCollectionMock({
    link: "",
    institution: "Some",
    media: resources.images.shareYourWifiBackground.url,
    role: "Some Role",
    start: new Date().toString(),
    end: new Date().toString(),
    location: "Some Place",
    country: "no",
  }),
}

export const NoEnd = Template.bind({})
NoEnd.args = {
  ...createCollectionMock({
    link: "",
    institution: "Some",
    media: resources.images.shareYourWifiBackground.url,
    role: "Some Role",
    start: new Date().toString(),
    location: "Some Place",
    country: "no",
  }),
}
