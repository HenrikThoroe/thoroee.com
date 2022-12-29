"use client"

import SyntaxHighlighter from "react-syntax-highlighter"
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs"

const exampleCode = `
func save(_ item: some Encodable, service: String, account: String) throws {
  let data = try encode(item)
  let query = build {
      QueryItem.data(data)
      QueryItem.account(account)
      QueryItem.service(service)
      QueryItem.type(.genericPassword)
  }

  var status = SecItemAdd(query, nil)

  if status == errSecDuplicateItem {
      let query = build {
          QueryItem.account(account)
          QueryItem.service(service)
          QueryItem.type(.genericPassword)
      }

      status = SecItemUpdate(query, build(from: .data(data)))
  }

  try parseError(from: status)
}
`.trim()

export default function CodeBackground() {
  return (
    <SyntaxHighlighter
      language="swift"
      style={xcode}
      customStyle={{ background: "transparent", overflow: "hidden" }}
    >
      {exampleCode}
    </SyntaxHighlighter>
  )
}
