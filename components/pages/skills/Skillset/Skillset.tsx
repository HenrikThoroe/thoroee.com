"use client"

import SyntaxHighlighter from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Language } from "../../../../lib/utils/languages"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import style from "./style.module.scss"

interface Props {
  /**
   * A caption that should explain the details of the skill.
   *
   * E.g. since when technology has been used or how many projects have been done.
   */
  caption: string

  /**
   * A code block that shows the skillset and related technologies.
   */
  code: string

  /**
   * The language in which the code block should be formatted.
   */
  language: Language

  /**
   * The heading above the code block. It should describe what kind of skill is shown.
   */
  label: string
}

/**
 * A `Skillset` view displays a prominent formatted code block.
 * The code block in enclosed between a hero heading and a caption.
 */
export default function Skillset(props: Props) {
  const { code, language, caption, label } = props

  return (
    <VStack container="section" spacing="1.5rem" grow>
      <Text variant="hero-heading">{label}</Text>
      <VStack spacing="0.5rem" grow>
        <SyntaxHighlighter
          language={language}
          style={nord}
          className={style.code}
        >
          {code.trim()}
        </SyntaxHighlighter>
        <Text className={style.caption} variant="code">
          {caption}
        </Text>
      </VStack>
    </VStack>
  )
}
