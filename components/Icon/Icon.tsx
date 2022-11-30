import LogoIcon from "./icons/LogoIcon"
import ShareIcon from "./icons/ShareIcon"
import classNames from "classnames"
import style from "./style.module.css"
import GitHubIcon from "./icons/GitHubIcon"
import AppleIcon from "./icons/AppleIcon"

export type IconName = "share" | "logo" | "github" | "apple"

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

const requiresFill: IconName[] = ["logo", "apple", "github"]

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
