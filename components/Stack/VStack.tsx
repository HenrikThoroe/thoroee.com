import SharedProps from "./SharedProps"
import Stack, { Alignment } from "./Stack"

interface Props {
  /**
   * The vertical alignment of the
   * undelying `Stack`
   */
  alignment?: Alignment

  /**
   * The horizontal alignment of the
   * undelying `Stack`
   */
  horizontalAlignment?: Alignment
}

/**
 * An `VStack` is a shortcut for using a `Stack` with `column` direction.
 */
export default function VStack(props: SharedProps & Props) {
  return (
    <Stack
      {...props}
      verticalAlignment={props.alignment}
      horizontalAlignment={props.horizontalAlignment ?? "center"}
      direction="column"
    />
  )
}
