import { ComponentStory } from "@storybook/react"
import VStack from "../../../Stack/VStack"
import BrowserPresentation from "./BrowserPresentation"

export default {
  title: "Website/Components/Pages/Projects/BrowserPresentation",
  component: BrowserPresentation,
}

const Template: ComponentStory<typeof BrowserPresentation> = () => (
  <VStack>
    <BrowserPresentation
      title="Some Mock Title"
      tech="Storybook + Next + TypeScript"
      operator="??="
      result="[] + {}"
      source=""
    />
  </VStack>
)

export const Desktop = Template.bind({})
export const Tablet = Template.bind({})
export const Mobile = Template.bind({})

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
