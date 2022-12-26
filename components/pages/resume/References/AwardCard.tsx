import { RewardReference } from "../../../../collections/generated-types"
import Button from "../../../Button/Button"
import FlatCard from "../../../FlatCard/FlatCard"
import Icon from "../../../Icon/Icon"
import HStack from "../../../Stack/HStack"
import Text from "../../../Text/Text"

function formatDate(start: string) {
  const date = new Date(start)

  if (date === null || isNaN(date.getTime())) {
    return "Invalid Date"
  }

  return date.toLocaleDateString(undefined, {
    year: "numeric",
  })
}

/**
 * Card used to display a single `RewardReference`.
 */
export default function AwardCard(ref: RewardReference) {
  return (
    <FlatCard
      title={ref.institution}
      media={ref.media}
      footer={
        <Button variant="text" action={ref.link}>
          Learn More
        </Button>
      }
    >
      <HStack spacing={10}>
        <Icon name="checkmark" width={19} height={19} />
        <Text alignment="leading">{ref.title}</Text>
      </HStack>
      <HStack spacing={10}>
        <Icon name="date" width={19} height={19} />
        <Text alignment="leading">{formatDate(ref.date)}</Text>
      </HStack>
    </FlatCard>
  )
}
