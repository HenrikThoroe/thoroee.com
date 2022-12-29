import { ComponentStory } from "@storybook/react"
import loremIpsum from "../../../../utils/loremIpsum"
import Skillset from "./Skillset"

export default {
  title: "Website/Components/Pages/Skills/Skillset",
  component: Skillset,
}

const swift = `
struct MyView: View {

    @Binding var label: String

    @State private var counter = 0

    var body: some View {
        VStack(spacing: 20) {
            Text(label)
            CounterButton($counter, label: "+1")
        }
    }

}
`

const tsx = `
interface Props {
    label: string
}

export default function MyComponent({ label }: Props) {
    const [counter, setCounter] = useState<number>(0)
    const increase = () => setCounter(counter + 1)

    return (
        <VStack>
            <Text>{ label }</Text>
            <CounterButton onClick={increase} label="+1" />
        </VStack>
    )
}
`

const cpp = `
#include <iostream>

void MyClass::count() {
    this->counter += 1;
}

void MyClass::showLabel(std::string *label) {
    std::cout << (*label) << std::endl;
}
`

const Template: ComponentStory<typeof Skillset> = (args) => (
  <Skillset {...args} />
)

export const Swift = Template.bind({})
export const TSX = Template.bind({})
export const Cpp = Template.bind({})

Swift.args = {
  label: "Some Mock Label",
  language: "swift",
  code: swift,
  caption: loremIpsum(40),
}

TSX.args = {
  label: "Some Mock Label",
  language: "tsx",
  code: tsx,
  caption: loremIpsum(20),
}

Cpp.args = {
  label: "Some Mock Label",
  language: "cpp",
  code: cpp,
  caption: loremIpsum(30),
}
