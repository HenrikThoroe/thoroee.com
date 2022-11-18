import { ComponentStory } from "@storybook/react"
import Card from "./Card"
import AccentCard from "./AccentCard"

export default {
  title: "Website/Components/Card",
  component: Card,
  subcomponents: { AccentCard },
}

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Plain = Template.bind({})
Plain.args = {
  width: 300,
  height: 300,
  hoverEffect: true,
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  width: 210,
  height: 315,
  highlight: {
    x: 0.3,
    y: 0.45,
    color: "blue",
  },
}
