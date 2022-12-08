import { ComponentStory } from "@storybook/react"
import BrowserMock from "./BrowserMock"

export default {
  title: "Website/Components/Atoms/BrowserMock",
  component: BrowserMock,
}

const children = (
  <h1 style={{ padding: "10rem 0px", width: "100%", textAlign: "center" }}>
    Hello, Browser Mock!
  </h1>
)

const Template: ComponentStory<typeof BrowserMock> = (args) => (
  <BrowserMock {...args} />
)

export const Desktop = Template.bind({})
Desktop.args = {
  children: children,
}

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
Tablet.args = {
  children: children,
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
Mobile.args = {
  children: children,
}
