import { ComponentStory } from "@storybook/react"
import OverviewCardSet from "./OverviewCardSet"

export default {
  title: "Website/Components/Pages/Home/OverviewCardSet",
  component: OverviewCardSet,
}

const Template: ComponentStory<typeof OverviewCardSet> = () => (
  <OverviewCardSet />
)

export const Desktop = Template.bind({})

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
