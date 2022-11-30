import { ComponentStory } from "@storybook/react"
import Console from "./Console"

export default {
  title: "Website/Components/Atoms/Console",
  component: Console,
}

const Template: ComponentStory<typeof Console> = (args) => <Console {...args} />

export const Primary = Template.bind({})
Primary.args = {
  content: [
    [
      {
        user: "you@localhost",
        cmd: "ls -a",
      },
      "This is some output",
    ],

    [
      {
        user: "you@localhost",
        cmd: "this is -a --very long --command",
      },
      `This is some output, which is a little bit longer. 
      So you can see, how the console behaves with long input strings.
      I might even make this string even longer. Already bored? Well I am.
      Wrinting long paragraphes of dummy text is a very stupid task.
      I am thinking I should have just used Lorem Ipsum, but 
      now I am already almost done, sooooo.`,
    ],

    [
      {
        user: "you@localhost",
        cmd: "ls -a",
      },
      "This is some output",
    ],
  ],
}
