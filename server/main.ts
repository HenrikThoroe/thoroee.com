import express from "express"
import payload from "payload"
import loadenv from "../lib/utils/loadenv"

const app = express()

loadenv()

payload.init({
  secret: process.env.PAYLOAD_SECRET_KEY!,
  mongoURL: process.env.MONGO_URL!,
  express: app,
})

app.get("/", (_, res) => {
  res.redirect("/admin")
})

app.listen(process.env.PAYLOAD_PORT, async () => {
  console.log(
    `Express is now listening for incoming connections on port ${process.env.PAYLOAD_PORT}.`,
  )
})
