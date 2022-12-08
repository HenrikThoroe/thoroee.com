import { ReactNode } from "react"
import Icon from "../Icon/Icon"
import HStack from "../Stack/HStack"
import VStack from "../Stack/VStack"
import Text from "../Text/Text"
import style from "./style.module.scss"

interface Props {
  children: ReactNode
}

export default function BrowserMock(props: Props) {
  return (
    <VStack className={style.browser}>
      <HStack padding={[12, 24]} spacing={24} className={style["top-bar"]}>
        <HStack spacing={8} className={style["button-group"]}>
          <div className={style["window-button"]} />
          <div className={style["window-button"]} />
          <div className={style["window-button"]} />
        </HStack>
        <HStack spacing={12} className={style["left-control"]}>
          <Icon name="sf-chevron-left" width={16} height={16} />
          <Icon name="sf-chevron-right" width={16} height={16} />
        </HStack>
        <HStack className={style.address} spacing={4} padding={4}>
          <Icon name="sf-lock" width={16} height={16} />
          <Text variant="body" size={14}>
            thoroee.com
          </Text>
        </HStack>
        <HStack spacing={12} className={style["right-control"]}>
          <Icon name="sf-share" width={16} height={16} />
          <Icon name="sf-add" width={16} height={16} />
        </HStack>
      </HStack>
      <div className={style.content}>{props.children}</div>
    </VStack>
  )
}
