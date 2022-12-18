import VStack from "../../components/Stack/VStack"
import TimeBeam from "../../components/TimeBeam/TimeBeam"
import getCVEntries from "../../lib/api/load/getCVEntries"

export const revalidate = 3600

export default async function Page() {
  const entries = await getCVEntries()

  return (
    <VStack padding={[50, 0, 0, 0]}>
      <TimeBeam entries={entries} />
    </VStack>
  )
}
