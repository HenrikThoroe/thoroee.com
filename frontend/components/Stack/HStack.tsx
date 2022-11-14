import SharedProps from "./SharedProps"
import Stack, { Alignment } from "./Stack"

interface Props {
  /**
   * The horizontal alignment of the
   * undelying `Stack`
   */
  alignment?: Alignment

  /**
   * The vertical alignment of the
   * undelying `Stack`
   */
  verticalAlignment?: Alignment
}

/**
 * An `HStack` is a shortcut for using a `Stack` with `row` direction.
 */
export default function HStack(props: SharedProps & Props) {
  return (
    <Stack
      {...props}
      verticalAlignment={props.verticalAlignment ?? "center"}
      horizontalAlignment={props.alignment}
      direction="row"
    />
  )
}
