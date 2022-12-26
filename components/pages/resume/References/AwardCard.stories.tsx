import { ComponentStory } from "@storybook/react"
import { resources } from "../../../../lib/utils/resources"
import createCollectionMock from "../../../../utils/createCollectionMock"
import AwardCard from "./AwardCard"

export default {
  title: "Website/Components/Pages/Resumé/AwardCard",
  component: AwardCard,
}

const Template: ComponentStory<typeof AwardCard> = (args) => (
  <AwardCard {...args} />
)

export const Complete = Template.bind({})
Complete.args = {
  ...createCollectionMock({
    link: "",
    institution: "Some",
    title: "Some Award",
    media: resources.images.shareYourWifiBackground.url,
    date: new Date().toString(),
  }),
}
