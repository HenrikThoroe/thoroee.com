import { CvEntry } from "../../collections/generated-types"
import HStack from "../Stack/HStack"
import VStack from "../Stack/VStack"
import Text from "../Text/Text"
import style from "./style.module.scss"

const Entry = ({ entry }: { entry: CvEntry }) => (
  <HStack spacing={40} verticalAlignment="leading">
    <div className={style["entry-indicator"]} />
    <VStack
      horizontalAlignment="leading"
      spacing={40}
      className={style["event-container"]}
    >
      <VStack spacing={5}>
        <Text>
          {new Date(entry.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <Text variant="body-secondary">{entry.location}</Text>
      </VStack>
      <VStack spacing={20} horizontalAlignment="leading">
        <Text variant="heading" alignment="leading">
          {entry.title}
        </Text>
        <Text alignment="leading">{entry.description}</Text>
      </VStack>
    </VStack>
  </HStack>
)

/**
 * A `TimeBeam` can be used to display sequential events.
 * It takes a collection of `CvEvent`s as parameters.
 */
export default function TimeBeam({ entries }: { entries: CvEntry[] }) {
  return (
    <HStack className={style.container}>
      <div className={style.beam} />
      <VStack
        className={style["event-col"]}
        spacing={80}
        horizontalAlignment="leading"
      >
        {entries.map((entry) => (
          <Entry entry={entry} />
        ))}
      </VStack>
    </HStack>
  )
}
