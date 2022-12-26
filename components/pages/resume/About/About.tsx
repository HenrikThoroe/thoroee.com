import Image from "next/image"
import { User } from "../../../../collections/generated-types"
import Text from "../../../Text/Text"
import style from "./style.module.scss"

interface Props {
  user: User
}

export default function About(props: Props) {
  return (
    <section className={style.container}>
      <Image
        src={props.user.profilePicture ?? ""}
        alt="Profile Image"
        width={120}
        height={120}
        className={style.image}
      />
      <Text alignment="leading">{props.user.about}</Text>
    </section>
  )
}
