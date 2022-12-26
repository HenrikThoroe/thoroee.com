import { ComponentStory } from "@storybook/react"
import { resources } from "../../lib/utils/resources"
import Button from "../Button/Button"
import Text from "../Text/Text"
import FlatCard from "./FlatCard"

export default {
  title: "Website/Components/Atoms/FlatCard",
  component: FlatCard,
}

const Template: ComponentStory<typeof FlatCard> = (args) => (
  <FlatCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  media: resources.images.shareYourWifiBackground.url,
  title: "Some Mock Title",
  keepMediaAspectRatio: false,
  children: <Text>Hello, World!</Text>,
  footer: (
    <Button action="" variant="text">
      Action
    </Button>
  ),
}
