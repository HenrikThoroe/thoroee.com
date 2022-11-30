"use client"

import classNames from "classnames"
import useBreakpoint from "../../lib/hooks/useBreakpoint"
import HStack from "../Stack/HStack"
import VStack from "../Stack/VStack"
import Text from "../Text/Text"
import { ConsoleInput } from "./Console"
import style from "./style.module.scss"

export default function InputRow({ content }: { content: ConsoleInput }) {
  const breakpoint = useBreakpoint()

  if (breakpoint === "mobile") {
    return (
      <VStack
        className={classNames(style.row, style.input)}
        alignment="leading"
        horizontalAlignment="leading"
        spacing={5}
      >
        <Text variant="code">{content.user}</Text>
        <Text variant="code" alignment="leading" className={style.command}>
          {content.cmd}
        </Text>
      </VStack>
    )
  }

  return (
    <HStack
      className={classNames(style.row, style.input)}
      spacing={10}
      alignment="leading"
      verticalAlignment="leading"
    >
      <Text variant="code">{content.user}</Text>
      <Text className={style.divider} variant="code">
        ~ %
      </Text>
      <Text variant="code" alignment="leading">
        {content.cmd}
      </Text>
    </HStack>
  )
}
