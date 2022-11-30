type DefaultKeys = "id" | "createdAt" | "updatedAt"

/**
 * Adds required fields to the provided object, to mock a given
 * payload collection type.
 *
 * @param args The arguments that are content specific
 * @returns An object with mock meta data added
 */
export default function createCollectionMock<T>(args: Omit<T, DefaultKeys>): T {
  return {
    ...args,
    id: "mock-id",
    createdAt: "2022-11-25T17:08:47+00:00",
    updatedAt: "2022-11-25T17:08:47+00:00",
  } as T
}
