import { ComponentStory } from "@storybook/react"
import { resources } from "../../../../lib/utils/resources"
import createCollectionMock from "../../../../utils/createCollectionMock"
import EducationCard from "./EducationCard"

export default {
  title: "Website/Components/Pages/Resumé/EducationCard",
  component: EducationCard,
}

const Template: ComponentStory<typeof EducationCard> = (args) => (
  <EducationCard {...args} />
)

export const Complete = Template.bind({})
Complete.args = {
  ...createCollectionMock({
    link: "",
    institution: "Some",
    media: resources.images.shareYourWifiBackground.url,
    degree: "Some Degree",
    start: new Date().toString(),
    end: new Date().toString(),
  }),
}

export const NoEnd = Template.bind({})
NoEnd.args = {
  ...createCollectionMock({
    link: "",
    institution: "Some",
    media: resources.images.shareYourWifiBackground.url,
    degree: "Some Degree",
    start: new Date().toString(),
  }),
}
