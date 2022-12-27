import path from "path"
import fs from "fs/promises"
import payload from "payload"

/**
 * Reads all snapshot files and returns a stream
 * of parsed objects. Each object represents the entry of
 * the given collection.
 */
export async function* loadSnapshots() {
  const files = await fs.readdir(path.resolve(__dirname, "./snapshots"))

  for (const file of files) {
    const type = path.extname(file)
    const name = path.parse(file)
    const fullPath = path.resolve(__dirname, "snapshots", file)

    if (type.toLowerCase().replace(".", "") === "json") {
      try {
        const content = await fs.readFile(fullPath)
        yield { slug: name.name, data: JSON.parse(content.toString("utf-8")) }
      } catch (e) {
        payload.logger.error(`Failed to load content of ${file}. ${e}`)
      }
    }
  }
}

/**
 * Creates a snapshot for the data of the given slug.
 *
 * The snapshot will be written to a json file under `./snapshots`
 */
export async function createSnapshot(slug: string, data: any) {
  const outFile = path.resolve(__dirname, `./snapshots/${slug}.json`)

  try {
    await fs.rm(outFile)
    payload.logger.info(`Removed snapshot for ${slug}.`)
  } catch {
    payload.logger.info(`Snapshot for ${slug} does not exists. Skipping...`)
  }

  try {
    await fs.writeFile(outFile, JSON.stringify(data, null, 2) + "\n")
    payload.logger.info(`Snapshot for ${slug} successfully written.`)
  } catch {
    payload.logger.error(`Failed to write snapshot for ${slug}.`)
  }
}
