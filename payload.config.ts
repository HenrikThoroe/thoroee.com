import { buildConfig } from "payload/config"
import CVEntry from "./collections/configs/CVEntry"
import path from "path"
import { Users } from "./collections/configs/Users"
import Projects from "./collections/configs/Projects"
import loadenv from "./lib/utils/loadenv"

loadenv()

export default buildConfig({
  serverURL: process.env.API_URL,
  collections: [CVEntry, Users, Projects],
  csrf: [process.env.API_URL!, process.env.NEXT_URL!],
  cors: "*",
  typescript: {
    outputFile: path.resolve(__dirname, "./collections/generated-types.ts"),
  },
  admin: {
    webpack: (config) => {
      config.resolve!.fallback = { os: false, fs: false }

      return config
    },
  },
})
