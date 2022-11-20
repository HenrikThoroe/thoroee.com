/**
 * Create a CSS style string. When given a number a string of the style
 * "<number>px" will be returned. Otherwise the given string.
 */
export default function pixelize(arg: number | string) {
  if (typeof arg === "number") {
    return `${arg}px`
  } else {
    return arg
  }
}
