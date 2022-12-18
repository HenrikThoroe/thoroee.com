import Cluster from "../../../Cluster/Cluster"
import ClusterNode from "../../../Cluster/ClusterNode"
import Icon, { IconName } from "../../../Icon/Icon"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"

interface Props {
  title: string
  nodes: {
    content?: string
    icon?: IconName
    link?: string
    lowPriority?: boolean
  }[]
}

export default function ClusterPresentation(props: Props) {
  return (
    <VStack style={{ width: "80%" }} spacing={40}>
      <Text variant="hero-heading">{props.title}</Text>
      <Cluster>
        {props.nodes.map((node) => (
          <ClusterNode href={node.link} lowPriority={node.lowPriority}>
            {node.icon ? (
              <Icon name={node.icon} width={65} height={65} />
            ) : (
              <Text variant="cluster">{node.content}</Text>
            )}
          </ClusterNode>
        ))}
      </Cluster>
    </VStack>
  )
}
