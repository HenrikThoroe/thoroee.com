import Link from "next/link"
import Console from "../../../Console/Console"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"
import style from "./style.module.scss"

interface Props {
  title: string
  interactions: {
    user: string
    cmd: string
    body: string
    link?: string
  }[]
}

export default function ConsolePresentation(props: Props) {
  const { title, interactions } = props
  return (
    <VStack spacing={40} className={style.container}>
      <Text variant="hero-heading">{title}</Text>
      <Console
        content={interactions.map(({ user, cmd, body, link }) => {
          return [
            { user, cmd },
            link !== undefined ? <Link href={link}>{body}</Link> : body,
          ]
        })}
      />
    </VStack>
  )
}
