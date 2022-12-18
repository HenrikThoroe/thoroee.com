import { ComponentStory } from "@storybook/react"
import VStack from "../../../Stack/VStack"
import ClusterPresentation from "./ClusterPresentation"

export default {
  title: "Website/Components/Pages/Projects/ClusterPresentation",
  component: ClusterPresentation,
}

const Template: ComponentStory<typeof ClusterPresentation> = () => (
  <VStack>
    <ClusterPresentation
      title="Some Mock Title"
      nodes={[
        { content: "Some Node" },
        { icon: "sf-add" },
        { content: "Some Node" },
        { content: "Some Node" },
        { icon: "github" },
        { content: "Some Node", lowPriority: true },
        { content: "Some Node", lowPriority: true },
        { content: "Some Node", lowPriority: true },
        { content: "Some Node", lowPriority: true },
      ]}
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
