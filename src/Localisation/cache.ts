function flatJSON(json: any, prefix: string[] = []): Map<string, string> {
    const result = new Map<string, string>()
    const createKey = (name: string) => [...prefix, name].join("-")

    for (const p in json) {
        if (typeof json[p] === "string") {
            result.set(createKey(p), json[p])
        } else {
            const nested = flatJSON(json[p], [...prefix, p])
            
            for (const entry of nested.entries()) {
                result.set(entry[0], entry[1])
            }
        }
    }

    return result
}

// interface Subscriptable {
//     [key: string]: Map<string, string>
// }

// const cachedResources: Subscriptable = {}

// let cachedResources: [string, Map<string, string>][] = []
 
export default async function cache(resource: string): Promise<Map<string, string>> {
    // console.log(cachedResources)
    // for (const cached of cachedResources) {
    //     if (cached[0] === resource) {
    //         return cached[1]
    //     }
    // }

    const response = await fetch(`/loc/${resource}.json`)
    const json = await response.json()
    const dict = flatJSON(json)

    // cachedResources = [...cachedResources, [resource, dict]]
    // console.log(cachedResources)

    return dict
}   