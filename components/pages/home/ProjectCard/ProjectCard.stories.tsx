import { ComponentStory } from "@storybook/react"
import ProjectCard from "./ProjectCard"

export default {
  title: "Website/Components/Pages/Home/ProjectCard",
  component: ProjectCard,
}

const Template: ComponentStory<typeof ProjectCard> = () => <ProjectCard />

export const Desktop = Template.bind({})
Desktop.parameters = {
  viewport: {
    defaultViewport: undefined,
  },
}

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad10p",
  },
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
