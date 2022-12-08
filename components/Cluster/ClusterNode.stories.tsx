import { ComponentStory } from "@storybook/react"
import Text from "../Text/Text"
import ClusterNode from "./ClusterNode"

export default {
  title: "Website/Components/Atoms/Cluster/ClusterNode",
  component: ClusterNode,
}

const Template: ComponentStory<typeof ClusterNode> = (args) => (
  <ClusterNode {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: <Text variant="cluster">Hello, World!</Text>,
}

export const Link = Template.bind({})
Link.args = {
  href: "__blank",
  children: <Text variant="cluster">Hello, World!</Text>,
}
