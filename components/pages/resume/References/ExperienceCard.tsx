import { ExperienceReference } from "../../../../collections/generated-types"
import Button from "../../../Button/Button"
import FlatCard from "../../../FlatCard/FlatCard"
import Icon from "../../../Icon/Icon"
import HStack from "../../../Stack/HStack"
import Text from "../../../Text/Text"
import Image from "next/image"
import { CountryCode } from "../../../../lib/utils/countries"
import style from "./style.module.scss"
import { resources } from "../../../../lib/utils/resources"

function formatDateRange(start: string, end?: string) {
  const startDate = new Date(start)
  const endDate = new Date(end ?? "")

  if (startDate === null || isNaN(startDate.getTime())) {
    return "Invalid Date"
  }

  if (endDate === null || isNaN(endDate.getTime())) {
    return startDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    })
  }

  const startFormatted = startDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  })

  const endFormatted = endDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  })

  return `${startFormatted} - ${endFormatted}`
}

function FlagIcon({ code }: { code?: CountryCode }) {
  if (code === undefined) {
    return <div className={style.flag} />
  }

  return (
    <Image
      src={resources.flags[code].url}
      alt={code}
      width={19}
      height={19}
      className={style.flag}
    />
  )
}

/**
 * Card used to display a single `ExperienceReference`.
 */
export default function ExperienceCard(ref: ExperienceReference) {
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
        <Icon name="person" width={19} height={19} />
        <Text alignment="leading">{ref.role}</Text>
      </HStack>
      <HStack spacing={10}>
        <Icon name="date" width={19} height={19} />
        <Text alignment="leading">{formatDateRange(ref.start, ref.end)}</Text>
      </HStack>
      <HStack spacing={10}>
        <FlagIcon code={ref.country} />
        <Text>{ref.location}</Text>
      </HStack>
    </FlatCard>
  )
}
