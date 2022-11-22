import { ComponentStory } from "@storybook/react"
import ExperienceCard from "./ExperienceCard"

export default {
  title: "Website/Components/Pages/Home/ExperienceCard",
  component: ExperienceCard,
}

const Template: ComponentStory<typeof ExperienceCard> = () => <ExperienceCard />

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
