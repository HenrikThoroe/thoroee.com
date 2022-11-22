import { ComponentStory } from "@storybook/react"
import CVCard from "./CVCard"

export default {
  title: "Website/Components/Pages/Home/CVCard",
  component: CVCard,
}

const Template: ComponentStory<typeof CVCard> = () => <CVCard />

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
