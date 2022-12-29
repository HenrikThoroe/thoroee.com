import Link from "next/link"
import Card from "../../../Card/Card"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import cardStyle from "../card-style.module.scss"
import CodeBackground from "./CodeBackground"
import style from "./style.module.css"

/**
 * An `ExperienceCard` is a wider card
 * that links to a site listing the
 * available experiences in languages,
 * tools, etc.
 */
export default function SkillsCard() {
  return (
    <Link href="/skills">
      <Card className={cardStyle["experience-card"]} hoverEffect>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className={style.stack}>
            <div className={style.background}>
              <CodeBackground />
            </div>
            <VStack grow spacing={20} padding={18}>
              <Text variant="card-hero-title">Skills</Text>
              <Text variant="card-hero-body">
                From Swift to Dart and C++ to JS.
              </Text>
            </VStack>
          </div>
        </div>
      </Card>
    </Link>
  )
}
