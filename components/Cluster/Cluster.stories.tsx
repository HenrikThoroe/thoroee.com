import { ComponentStory } from "@storybook/react"
import Cluster from "./Cluster"
import ClusterNode from "./ClusterNode"
import Text from "../Text/Text"

export default {
  title: "Website/Components/Atoms/Cluster",
  component: Cluster,
  subcomponents: { ClusterNode },
}

const children = [
  <ClusterNode>
    <Text variant="cluster">Hello, World! 1</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 2</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 3</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 4</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 5</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 6</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 7</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 8</Text>
  </ClusterNode>,
  <ClusterNode>
    <Text variant="cluster">Hello, World! 9</Text>
  </ClusterNode>,
]

const Template: ComponentStory<typeof Cluster> = (args) => <Cluster {...args} />

export const Desktop = Template.bind({})
Desktop.args = {
  children: children,
}

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad10p",
  },
}
Tablet.args = {
  children: children,
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
Mobile.args = {
  children: children,
}
