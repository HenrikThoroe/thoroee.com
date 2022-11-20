import { ComponentStory } from "@storybook/react"
import MenuButton from "./MenuButton"

export default {
  title: "Website/Components/Atoms/MenuButton",
  component: MenuButton,
}

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  onClick: () => {},
}
