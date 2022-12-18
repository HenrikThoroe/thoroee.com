import { ComponentStory } from "@storybook/react"
import createCollectionMock from "../../../../utils/createCollectionMock"
import VStack from "../../../Stack/VStack"
import CardPresentation from "./CardPresentation"

export default {
  title: "Website/Components/Pages/Projects/CardPresentation",
  component: CardPresentation,
}

const Template: ComponentStory<typeof CardPresentation> = () => (
  <VStack>
    <CardPresentation
      title="Some Mock Title"
      body="This is a mock body for the card presentation component."
      source=""
      store=""
    />
  </VStack>
)

export const Desktop = Template.bind({})
export const Tablet = Template.bind({})
export const Mobile = Template.bind({})

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad10p",
  },
}

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
