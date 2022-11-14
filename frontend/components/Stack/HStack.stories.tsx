import { ComponentStory } from "@storybook/react"
import HStack from "./HStack"

export default {
  title: "Website/Components/Stack/HStack",
  component: HStack,
}

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />
const style: React.CSSProperties = {
  border: "4px solid #8B9DF8",
  borderRadius: 15,
  width: 300,
  minHeight: 300,
  fontFamily: "Helvetica Neue",
  fontSize: "1.5rem",
}

export const Primary = Template.bind({})
Primary.args = {
  alignment: "center",
  verticalAlignment: "center",
  container: "div",
  spacing: 16,
  padding: "xs",
  grow: false,
  style,
  children: (
    <>
      <span>Hej</span>
      <span>Hej</span>
    </>
  ),
}
