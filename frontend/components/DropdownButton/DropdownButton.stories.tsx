import { ComponentStory } from "@storybook/react"
import DropdownButton, { DropdownItem } from "./DropdownButton"

export default {
  title: "Website/Components/Dropdown",
  component: DropdownButton,
  subcomponents: { DropdownItem },
}

const Template: ComponentStory<typeof DropdownButton> = (args) => (
  <DropdownButton {...args} />
)

export const Action = Template.bind({})
Action.args = {
  title: "Primary",
  variant: "action",
  onChange: () => {},
  children: [
    <DropdownItem value={1} label="first" />,
    <DropdownItem value={2} label="second" />,
  ],
}
