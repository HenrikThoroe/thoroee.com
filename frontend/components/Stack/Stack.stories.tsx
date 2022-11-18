import { ComponentMeta, ComponentStory } from "@storybook/react"
import HStack from "./HStack"
import Stack from "./Stack"
import VStack from "./VStack"

export default {
  title: "Website/Components/Atoms/Stack",
  component: Stack,
  subcomponents: { HStack, VStack },
}

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />

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
  horizontalAlignment: "center",
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
