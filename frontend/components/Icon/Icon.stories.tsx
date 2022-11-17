import { ComponentStory } from "@storybook/react"
import Icon from "./Icon"

export default {
  title: "Website/Components/Icon",
  component: Icon,
}

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "monotone",
  name: "logo",
  width: 64,
  height: 64,
}
