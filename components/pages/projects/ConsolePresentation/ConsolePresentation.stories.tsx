import { ComponentStory } from "@storybook/react"
import VStack from "../../../Stack/VStack"
import ConsolePresentation from "./ConsolePresentation"

export default {
  title: "Website/Components/Pages/Projects/ConsolePresentation",
  component: ConsolePresentation,
}

const Template: ComponentStory<typeof ConsolePresentation> = () => (
  <VStack>
    <ConsolePresentation
      title="This Is A Mock Title"
      interactions={[
        {
          user: "mockuser@mockdomain.com",
          cmd: "mockcmd --something long",
          body: "This is a mock descriotion of some command output. Please do not take this bullshit seriously.",
        },
        {
          user: "mockuser@mockdomain.com",
          cmd: "mockcmd --something long",
          body: "This is a mock descriotion of some command output. Please do not take this bullshit seriously.",
        },
        {
          user: "mockuser@mockdomain.com",
          cmd: "mockcmd --something long",
          body: "This is a mock descriotion of some command output. Please do not take this bullshit seriously.",
        },
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
