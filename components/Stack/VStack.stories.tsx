import { ComponentStory } from "@storybook/react"
import VStack from "./VStack"

export default {
  title: "Website/Components/Atoms/Stack/VStack",
  component: VStack,
}

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />
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
  horizontalAlignment: "center",
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
