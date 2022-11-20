import { ComponentStory } from "@storybook/react"
import Header from "./Header"
import HeaderDesktop from "./Header.desktop"
import HeaderMobile from "./Header.mobile"

export default {
  title: "Website/Components/Layout/Header",
  component: Header,
  subcomponents: { HeaderMobile, HeaderDesktop },
}

const Template: ComponentStory<typeof Header> = () => <Header />

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
