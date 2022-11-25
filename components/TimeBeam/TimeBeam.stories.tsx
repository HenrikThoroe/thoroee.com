import { ComponentStory } from "@storybook/react"
import createCollectionMock from "../../utils/createCollectionMock"
import TimeBeam from "./TimeBeam"

export default {
  title: "Website/Components/Atoms/TimeBeam",
  component: TimeBeam,
}

const Template: ComponentStory<typeof TimeBeam> = (args) => (
  <TimeBeam {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  entries: [
    createCollectionMock({
      date: new Date().toString(),
      title: "Mock Title - Short",
      description: "eu facilisis sed odio morbi quis commodo odio aenean sed",
      location: "The Moon",
    }),
    createCollectionMock({
      date: new Date().toString(),
      title: "Mock Title - Long",
      description: `
        id donec ultrices tincidunt arcu non sodales 
        neque sodales ut etiam sit amet nisl purus in 
        mollis nunc sed id semper risus in hendrerit gravida 
        rutrum quisque non tellus orci ac auctor augue mauris 
        augue neque gravida in fermentum et sollicitudin 
        ac orci phasellus egestas tellus rutrum tellus 
        pellentesque eu tincidunt tortor aliquam nulla 
        facilisi cras fermentum odio eu feugiat pretium 
        nibh ipsum consequat nisl vel pretium lectus quam 
        id leo in vitae turpis massa sed elementum tempus 
        egestas sed sed risus pretium quam vulputate dignissim 
        suspendisse in est ante in nibh mauris cursus mattis 
        molestie a iaculis at erat`,
      location: "The Moon",
    }),
    createCollectionMock({
      date: new Date().toString(),
      title: "Mock Title - Medium",
      description: `
        id donec ultrices tincidunt arcu non sodales 
        neque sodales ut etiam sit amet nisl purus in 
        mollis nunc sed id semper risus in hendrerit gravida 
        rutrum quisque non tellus orci ac auctor augue mauris 
        augue neque gravida in fermentum et sollicitudin`,
      location: "The Moon",
    }),
  ],
}
