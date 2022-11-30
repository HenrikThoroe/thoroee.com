import { buildConfig } from "payload/config"
import CVEntry from "./collections/CVEntry"
import path from "path"
import { Users } from "./collections/Users"
import Projects from "./collections/Projects"

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [CVEntry, Users, Projects],
  csrf: ["http://localhost:3030", "http://localhost:3000"],
  cors: "*",
  typescript: {
    outputFile: path.resolve(__dirname, "./collections/generated-types.ts"),
  },
})
