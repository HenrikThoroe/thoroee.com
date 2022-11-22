import { ComponentStory } from "@storybook/react"
import JourneyCard from "./JourneyCard"

export default {
  title: "Website/Components/Pages/Home/JourneyCard",
  component: JourneyCard,
}

const Template: ComponentStory<typeof JourneyCard> = () => <JourneyCard />

export const Desktop = Template.bind({})
Desktop.parameters = {
  viewport: {
    defaultViewport: undefined,
  },
}

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad10p",
  },
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
