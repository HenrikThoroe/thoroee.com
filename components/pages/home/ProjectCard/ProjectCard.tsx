import Link from "next/link"
import Card from "../../../Card/Card"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import cardStyle from "../card-style.module.scss"

/**
 * A card that links to a collection of
 * completed or at least view-worthy
 * projects.
 */
export default function ProjectCard() {
  return (
    <Link href="/projects">
      <Card className={cardStyle["project-card"]} hoverEffect>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "url(/blueprint.svg) no-repeat center/90%",
          }}
        >
          <VStack grow spacing={20} padding={18}>
            <Text variant="card-title">My Projects</Text>
            <Text variant="body">
              I did some cool stuff on my way. Maybe want to check it out?
            </Text>
          </VStack>
        </div>
      </Card>
    </Link>
  )
}
