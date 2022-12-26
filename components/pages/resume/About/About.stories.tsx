import { ComponentStory } from "@storybook/react"
import { User } from "../../../../collections/generated-types"
import { resources } from "../../../../lib/utils/resources"
import createCollectionMock from "../../../../utils/createCollectionMock"
import loremIpsum from "../../../../utils/loremIpsum"
import About from "./About"

export default {
  title: "Website/Components/Pages/Resumé/About",
  component: About,
}

const Template: ComponentStory<typeof About> = (args) => (
  <About user={userMock} />
)

const userMock: User = createCollectionMock({
  about: loremIpsum(80),
  profilePicture: resources.images.shareYourWifiBackground.url,
  roles: [],
})

export const Desktop = Template.bind({})
export const Tablet = Template.bind({})
export const Mobile = Template.bind({})

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad10p",
  },
}

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
