import payload from "payload"
import { MongoClient } from "mongodb"
import loadenv from "../../lib/utils/loadenv"
import { loadSnapshots } from "./snapshot"
import { injectEmail, injectPassword, userSlug } from "./inject"

loadenv()

payload.init({
  secret: process.env.PAYLOAD_SECRET_KEY!,
  mongoURL: process.env.MONGO_URL!,
  local: true,
})

async function seed() {
  const client = await MongoClient.connect(process.env.MONGO_URL!)
  const db = client.db(new URL(process.env.MONGO_URL!).pathname.substring(1))

  payload.logger.info(`Droping database '${db.databaseName}'...`)
  await db.dropDatabase()

  for await (const snapshot of loadSnapshots()) {
    payload.logger.info(`Seeding ${snapshot.slug}...`)

    for (let entry of snapshot.data) {
      if (snapshot.slug === userSlug) {
        entry = injectEmail(injectPassword(entry))
      }

      await payload.create({ collection: snapshot.slug, data: entry })
    }

    payload.logger.info(`Seeded ${snapshot.slug}.`)
  }

  payload.logger.info(`Successfully seeded database.`)
  process.exit(0)
}

seed()
