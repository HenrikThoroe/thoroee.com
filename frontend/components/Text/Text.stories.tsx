import { ComponentStory } from "@storybook/react"
import Text from "./Text"

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas 
dui id. Odio euismod lacinia at quis risus. Ipsum suspendisse ultrices gravida dictum fusce ut. 
Auctor urna nunc id cursus. Netus et malesuada fames ac turpis egestas. Scelerisque viverra mauris 
in aliquam sem fringilla ut morbi tincidunt. Vestibulum lectus mauris ultrices eros in cursus. Nisl 
vel pretium lectus quam. Congue quisque egestas diam in arcu cursus euismod quis. Id interdum velit 
laoreet id. Nisl tincidunt eget nullam non nisi est sit amet.`

export default {
  title: "Website/Components/Atoms/Text",
  component: Text,
}

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Body = Template.bind({})
Body.args = {
  variant: "body",
  alignment: "center",
  component: "span",
  children: lorem,
}

export const NavLink = Template.bind({})
NavLink.args = {
  variant: "nav-link",
  alignment: "center",
  component: "span",
  children: "Awesome",
}

export const HeroTitle = Template.bind({})
HeroTitle.args = {
  variant: "hero-title",
  alignment: "center",
  component: "h2",
  children: "Hero Title",
}

export const HeroSubtitle = Template.bind({})
HeroSubtitle.args = {
  variant: "hero-subtitle",
  alignment: "center",
  component: "h1",
  children: "Hero Subtitle",
}

export const CardHeroTitle = Template.bind({})
CardHeroTitle.args = {
  variant: "card-hero-title",
  alignment: "center",
  component: "h2",
  children: "This is a card hero title",
}

export const CardHeroBody = Template.bind({})
CardHeroBody.args = {
  variant: "card-hero-body",
  alignment: "center",
  component: "span",
  children: "This is the hero body for a card",
}

export const CardTitle = Template.bind({})
CardTitle.args = {
  variant: "card-title",
  alignment: "center",
  component: "span",
  children: "This is a card title",
}

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  variant: "button-primary",
  alignment: "center",
  component: "span",
  children: "This is the text for primary buttons",
}

export const ButtonContrast = Template.bind({})
ButtonContrast.args = {
  variant: "button-contrast",
  alignment: "center",
  component: "span",
  children: "This is the text for contrast buttons",
}

export const Banner = Template.bind({})
Banner.args = {
  variant: "nav-link",
  alignment: "center",
  component: "span",
  children: "This is a banner",
}
