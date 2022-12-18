import { Project } from "../../collections/generated-types"
import CardPresentation from "../../components/pages/projects/CardPresentation/CardPresentation"
import ConsolePresentation from "../../components/pages/projects/ConsolePresentation/ConsolePresentation"
import BrowserPresentation from "../../components/pages/projects/BrowserPresentation/BrowserPresentation"
import VStack from "../../components/Stack/VStack"
import getProjects from "../../lib/api/load/getProjects"
import style from "./style.module.scss"
import ClusterPresentation from "../../components/pages/projects/ClusterPresentation/ClusterPresentation"
import { IconName } from "../../components/Icon/Icon"

export const revalidate = 3600

function DedicatedView({ project }: { project: Project }) {
  if (!project.dedicated) {
    return null
  }

  if (project.layout) {
    for (const layout of project.layout) {
      if (layout.blockType === "console-layout") {
        return <ConsolePresentation {...layout} />
      }

      if (layout.blockType === "card-layout") {
        return <CardPresentation {...layout} />
      }

      if (layout.blockType === "browser-layout") {
        return <BrowserPresentation {...layout} />
      }

      if (layout.blockType === "cluster-layout") {
        const nodes = layout.nodes.map((node) => ({
          ...node,
          lowPriority: node["low-priority"],
          icon: node.icon as IconName,
        }))

        return <ClusterPresentation {...{ ...layout, nodes }} />
      }
    }
  }

  return null
}

export default async function Page() {
  const projects = await getProjects()

  return (
    <VStack spacing={140} className={style.content}>
      {projects.map((project) => (
        <DedicatedView project={project} />
      ))}
    </VStack>
  )
}
