import Button from "../../../Button/Button"
import AccentCard from "../../../Card/AccentCard"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import Icon from "../../../Icon/Icon"
import cardStyle from "../card-style.module.scss"

/**
 * An interactive card that lins to
 * a gamified web comic.
 */
export default function JourneyCard() {
  return (
    <AccentCard
      className={cardStyle["journey-card"]}
      highlight={{ color: "blue", x: 0.4, y: 0.4 }}
      showWhenUnfocused
    >
      <VStack
        spacing={77}
        horizontalAlignment="center"
        alignment="center"
        padding="xxl"
        grow
      >
        <Icon name="logo" width="63" height="63" />
        <VStack spacing={40}>
          <VStack spacing={20}>
            <Text variant="card-hero-title">My Journey</Text>
            <Text variant="card-hero-body">
              Take a look what I have been upto so far.
            </Text>
          </VStack>
          <Button action="/journey" variant="contrast" trailing="share">
            Take Journey
          </Button>
        </VStack>
      </VStack>
    </AccentCard>
  )
}
