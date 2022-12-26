import { ComponentStory } from "@storybook/react"
import Button from "./Button"

export default {
  title: "Website/Components/Atoms/Button",
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  trailing: "share",
  action: () => {},
  children: "Button",
}

export const Contrast = Template.bind({})
Contrast.args = {
  variant: "contrast",
  trailing: "share",
  action: () => {},
  children: "Contrast",
}

export const Text = Template.bind({})
Text.args = {
  variant: "text",
  trailing: "share",
  action: () => {},
  children: "Text",
}
