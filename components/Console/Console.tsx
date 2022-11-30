import { ReactNode } from "react"
import HStack from "../Stack/HStack"
import VStack from "../Stack/VStack"
import Text from "../Text/Text"
import InputRow from "./InputRow"
import style from "./style.module.scss"

export interface ConsoleInput {
  /**
   * The user part of the command.
   * E.g. "root@localhost"
   */
  user: string

  /**
   * The command part.
   * E.g. "man malloc"
   */
  cmd: string
}

interface Props {
  /**
   * The content of the console. Each array entry
   * will become a seperate row on the console.
   */
  content: [ConsoleInput, ReactNode][]
}

function OutputRow({ content }: { content: ReactNode }) {
  return (
    <HStack className={style.row} alignment="leading">
      <Text variant="code" alignment="leading">
        {content}
      </Text>
    </HStack>
  )
}

/**
 * A `Console` is a styled component that displays data in a
 * console like format.
 */
export default function Console(props: Props) {
  return (
    <VStack
      className={style.console}
      horizontalAlignment="leading"
      padding={[40, 30]}
      spacing={15}
      grow="horizontal"
    >
      {props.content
        .map(([inp, out], idx) => [
          <InputRow content={inp} />,
          <OutputRow content={out} />,
        ])
        .flat()}
    </VStack>
  )
}
