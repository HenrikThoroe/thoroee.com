import LogoIcon from "./icons/LogoIcon"
import ShareIcon from "./icons/ShareIcon"
import classNames from "classnames"
import style from "./style.module.css"
import GitHubIcon from "./icons/GitHubIcon"
import AppleIcon from "./icons/AppleIcon"
import SFAddIcon from "./icons/SFAddIcon"
import SFShareIcon from "./icons/SFShareIcon"
import SFChevronLeftIcon from "./icons/SFChevronLeftIcon"
import SFChevronRightIcon from "./icons/SFChevronRightIcon"
import SFLockIcon from "./icons/SFLockIcon"
import DateIcon from "./icons/DateIcon"
import PersonIcon from "./icons/PersonIcon"
import SchoolIcon from "./icons/SchoolIcon"
import CheckmarkIcon from "./icons/CheckmarkIcon"

export type IconName =
  | "share"
  | "logo"
  | "github"
  | "apple"
  | "sf-share"
  | "sf-add"
  | "sf-chevron-left"
  | "sf-chevron-right"
  | "sf-lock"
  | "date"
  | "person"
  | "school"
  | "checkmark"

export type IconVariant = "monotone" | "contrast"

interface Props extends React.SVGProps<SVGSVGElement> {
  /**
   * The style applied to the icon.
   * Will determine which color to use.
   * @default monotone
   */
  variant?: IconVariant

  /**
   * The unique name identifier of the icon.
   */
  name: IconName
}

const requiresFill: IconName[] = [
  "logo",
  "apple",
  "github",
  "sf-chevron-left",
  "sf-chevron-right",
  "sf-lock",
  "sf-add",
  "sf-share",
  "date",
  "person",
  "school",
  "checkmark",
]

/**
 * An `Icon` is a stylized SVG element. Icons
 * should be used to express actions or to highlight
 * important content. Icons normaly are eye catchers and
 * should transport the meaning of the component they are used in.
 * A user should be able to recognize the functionality
 * of a component solely on the used icon. Additional text can be
 * used to clarify details.
 */
export default function Icon(props: Props) {
  const { name, variant, className, ...other } = props

  const Used = (props: React.SVGProps<SVGSVGElement>) => {
    switch (name) {
      case "logo":
        return <LogoIcon {...props} />
      case "share":
        return <ShareIcon {...props} />
      case "github":
        return <GitHubIcon {...props} />
      case "apple":
        return <AppleIcon {...props} />
      case "sf-add":
        return <SFAddIcon {...props} />
      case "sf-share":
        return <SFShareIcon {...props} />
      case "sf-chevron-left":
        return <SFChevronLeftIcon {...props} />
      case "sf-chevron-right":
        return <SFChevronRightIcon {...props} />
      case "sf-lock":
        return <SFLockIcon {...props} />
      case "date":
        return <DateIcon {...props} />
      case "person":
        return <PersonIcon {...props} />
      case "school":
        return <SchoolIcon {...props} />
      case "checkmark":
        return <CheckmarkIcon {...props} />
    }
  }

  return (
    <Used
      className={classNames(className, style[variant ?? "monotone"], {
        [style.fill]: requiresFill.includes(name),
      })}
      {...other}
    />
  )
}
