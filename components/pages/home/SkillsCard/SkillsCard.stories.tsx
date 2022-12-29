import { ComponentStory } from "@storybook/react"
import SkillsCard from "./SkillsCard"

export default {
  title: "Website/Components/Pages/Home/SkillsCard",
  component: SkillsCard,
}

const Template: ComponentStory<typeof SkillsCard> = () => <SkillsCard />

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
