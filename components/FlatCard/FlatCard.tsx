import classNames from "classnames"
import Image from "next/image"
import { ReactNode } from "react"
import HStack from "../Stack/HStack"
import VStack from "../Stack/VStack"
import Text from "../Text/Text"
import style from "./style.module.scss"

interface Props {
  /**
   * URL of the icon dispayed in the header.
   */
  media: string

  /**
   * Title of the card.
   */
  title: string

  children: ReactNode

  /**
   * Content of the footer section
   */
  footer: ReactNode

  /**
   * If `true` the aspect ratio of the provided `media` will be preserved.
   *
   * @default false
   */
  keepMediaAspectRatio?: boolean
}

/**
 * A `FlatCard` is a styled card like component, that is displayed on
 * highlighted background without drop shadow.
 *
 * It should be used to display primary data in bullet point format.
 *
 * A `FlatCard` features a body and footer segment as well as a title and icon as header.
 */
export default function FlatCard(props: Props) {
  return (
    <VStack
      className={style.card}
      alignment="space-between"
      horizontalAlignment="leading"
      spacing={20}
    >
      <VStack spacing={30} horizontalAlignment="leading">
        <HStack spacing={25}>
          <Image
            src={props.media}
            alt=""
            width={40}
            height={40}
            className={classNames(style.image, {
              [style.contain]: props.keepMediaAspectRatio,
            })}
          />
          <Text variant="card-title">{props.title}</Text>
        </HStack>
        <VStack horizontalAlignment="leading" spacing={20}>
          {props.children}
        </VStack>
      </VStack>
      <HStack
        className={style.footer}
        padding={[10, 0, 0, 0]}
        alignment="trailing"
        spacing={20}
      >
        {props.footer}
      </HStack>
    </VStack>
  )
}
