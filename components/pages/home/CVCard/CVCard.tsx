import Link from "next/link"
import Card from "../../../Card/Card"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import cardStyle from "../card-style.module.scss"
import style from "./style.module.css"

/**
 * The `CVCard` acts as a link to the CV section
 * of the website.
 */
export default function CVCard() {
  return (
    <Link href="/cv">
      <Card className={cardStyle["cv-card"]} hoverEffect>
        <VStack grow>
          <VStack spacing={33}>
            <div className={style.bar}>
              {[...Array(4)].map(() => (
                <div className={style["bar-item"]} />
              ))}
            </div>
            <VStack spacing={20} padding={[0, 28]}>
              <Text variant="card-title">Curriculum Vitae</Text>
              <Text variant="body">
                See how I did until now. It's not all boring, I promise!
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Card>
    </Link>
  )
}
