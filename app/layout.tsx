import { Inter } from "@next/font/google"
import "../styles/globals.css"
import "../styles/colors.css"
import "../styles/spacing.css"
import "../styles/shadows.css"
import "../styles/layout.scss"
import VStack from "../components/Stack/VStack"
import Header from "../components/layout/Header/Header"

const inter = Inter()

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <VStack alignment="leading">
          <Header />
          <main>{children}</main>
        </VStack>
      </body>
    </html>
  )
}
