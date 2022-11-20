import { ComponentStory } from "@storybook/react"
import AccentCard from "./AccentCard"

export default {
  title: "Website/Components/Atoms/Card/AccentCard",
  component: AccentCard,
}

const Template: ComponentStory<typeof AccentCard> = (args) => (
  <AccentCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  highlight: {
    color: "blue",
    x: 0.4,
    y: 0.4,
  },
  height: 300,
  width: 300,
  showWhenUnfocused: true,
}
