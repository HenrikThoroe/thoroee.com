import { ReactNode } from "react"
import {
  EducationReference,
  ExperienceReference,
  RewardReference,
} from "../../../../collections/generated-types"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import AwardCard from "./AwardCard"
import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import style from "./style.module.scss"

interface Props {
  education: EducationReference[]
  experiences: ExperienceReference[]
  rewards: RewardReference[]
}

function CardSet(props: { children: ReactNode; label: string }) {
  return (
    <section className={style["card-set"]}>
      <section className={style["label-box"]}>
        <Text variant="heading" alignment="trailing">
          {props.label}
        </Text>
      </section>
      <section className={style["card-box"]}>{props.children}</section>
    </section>
  )
}

/**
 * A view that displays a collection of cards for the authors
 * education, experiences and rewards.
 */
export default function References(props: Props) {
  return (
    <VStack
      horizontalAlignment="leading"
      className={style.references}
      spacing={100}
    >
      <CardSet label="Education">
        {props.education.map((e) => (
          <EducationCard {...e} />
        ))}
      </CardSet>

      <CardSet label="Experiences">
        {props.experiences.map((e) => (
          <ExperienceCard {...e} />
        ))}
      </CardSet>

      <CardSet label="Awards & Certificates">
        {props.rewards.map((e) => (
          <AwardCard {...e} />
        ))}
      </CardSet>
    </VStack>
  )
}
