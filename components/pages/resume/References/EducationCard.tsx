import { EducationReference } from "../../../../collections/generated-types"
import Button from "../../../Button/Button"
import FlatCard from "../../../FlatCard/FlatCard"
import Icon from "../../../Icon/Icon"
import HStack from "../../../Stack/HStack"
import Text from "../../../Text/Text"

function formatDateRange(start: string, end?: string) {
  const startDate = new Date(start)
  const endDate = new Date(end ?? "")

  if (startDate === null || isNaN(startDate.getTime())) {
    return "Invalid Date"
  }

  const startFormatted = startDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  })

  if (endDate === null || isNaN(endDate.getTime())) {
    return `${startFormatted} - Present`
  }

  const endFormatted = endDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  })

  return `${startFormatted} - ${endFormatted}`
}

/**
 * Card used to display a single `EducationReference`.
 */
export default function EducationCard(ref: EducationReference) {
  return (
    <FlatCard
      title={ref.institution}
      media={ref.media}
      keepMediaAspectRatio
      footer={
        <Button variant="text" action={ref.link}>
          Learn More
        </Button>
      }
    >
      <HStack spacing={10}>
        <Icon name="school" width={19} height={19} />
        <Text alignment="leading">{ref.degree}</Text>
      </HStack>
      <HStack spacing={10}>
        <Icon name="date" width={19} height={19} />
        <Text alignment="leading">{formatDateRange(ref.start, ref.end)}</Text>
      </HStack>
    </FlatCard>
  )
}
