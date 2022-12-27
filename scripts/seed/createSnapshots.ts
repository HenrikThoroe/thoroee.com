import payload from "payload"
import loadenv from "../../lib/utils/loadenv"
import { hideEmail, userSlug } from "./inject"
import { createSnapshot } from "./snapshot"

loadenv()

payload.init({
  secret: process.env.PAYLOAD_SECRET_KEY!,
  mongoURL: process.env.MONGO_URL!,
  local: true,
})

async function createSnapshots() {
  payload.logger.info(`Creating snapshots...`)

  for (const key in payload.collections) {
    payload.logger.info(`Creating snapshot of ${key}...`)
    const data = await payload.find({ collection: key })
    const docs =
      key === userSlug ? data.docs.map((doc) => hideEmail(doc)) : data.docs

    await createSnapshot(key, docs)
  }

  payload.logger.info(`Successfully created snapshots.`)
  process.exit(0)
}

createSnapshots()
