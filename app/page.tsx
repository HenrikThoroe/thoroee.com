import Icon from "../components/Icon/Icon"
import OverviewCardSet from "../components/pages/home/OverviewCardSet/OverviewCardSet"
import HStack from "../components/Stack/HStack"
import VStack from "../components/Stack/VStack"
import Text from "../components/Text/Text"

export default function Page() {
  return (
    <VStack alignment="leading">
      <VStack padding={[150, 0]} spacing={12}>
        <HStack alignment="leading" spacing="s">
          <Icon name="logo" width="24" height="24" />
          <Text variant="banner">Henrik Thorøe</Text>
        </HStack>
        <Text variant="hero-title">
          Computer-Science student and tech enthusiast.
        </Text>
      </VStack>
      <OverviewCardSet />
    </VStack>
  )
}
