export default function redirect(location: string, newTab: boolean = true) {
    window.open(location, newTab ? "_blank" : "_self")
}