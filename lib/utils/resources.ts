export type FileType = "png" | "svg" | "ico"

export interface Resource {
  url: string
  type: FileType
  label?: string
}

export interface Resources extends ResourceBranch {
  flags: {
    de: Resource
    no: Resource
  }
  logos: {
    gymAhz: Resource
    knowit: Resource
    swc: Resource
    kit: Resource
  }
  images: {
    blueprint: Resource
    profile: Resource
    rect: Resource
    shareYourWifiBackground: Resource
    waveTop: Resource
    waveBottom: Resource
  }
}

export const resources = {
  flags: {
    de: {
      url: "/flags/de.svg",
      type: "svg",
      label: "Flag Germany",
    },
    no: {
      url: "/flags/no.svg",
      type: "svg",
      label: "Flag Norway",
    },
  },
  logos: {
    gymAhz: {
      url: "/logos/gym-ahz.png",
      type: "png",
    },
    kit: {
      url: "/logos/kit.png",
      type: "png",
    },
    swc: {
      url: "/logos/swc.png",
      type: "png",
    },
    knowit: {
      url: "/logos/knowit.png",
      type: "png",
    },
  },
  images: {
    blueprint: {
      url: "/blueprint.svg",
      type: "svg",
    },
    profile: {
      url: "/profile.png",
      type: "png",
    },
    rect: {
      url: "/rect.svg",
      type: "svg",
    },
    shareYourWifiBackground: {
      url: "/share-your-wifi-bg.svg",
      type: "svg",
    },
    waveBottom: {
      url: "/wave-bottom.svg",
      type: "svg",
    },
    waveTop: {
      url: "/wave-top.svg",
      type: "svg",
    },
  },
} as const

interface ResourceBranch {
  [item: string]: Resource | ResourceBranch
}

interface Option {
  value: string
  label: string
}

function isResource(obj: Resource | ResourceBranch): obj is Resource {
  return "url" in obj && "type" in obj
}

function extractOptions(obj: Resource | ResourceBranch) {
  if (isResource(obj)) {
    let label = obj.label

    if (label === undefined) {
      label = obj.url
        .replace(/\.[a-zA-Z0-9]{1,10}$/g, "")
        .replaceAll(/^.*\//g, "")
        .replaceAll(/[-_]/g, " ")
        .split(" ")
        .map((word) => {
          if (word.length > 0) {
            return word.charAt(0).toLocaleUpperCase() + word.substring(1)
          }

          return word
        })
        .join(" ")
    }

    return [
      {
        value: obj.url,
        label,
      },
    ]
  }

  const options: Option[] = []

  for (const key in obj) {
    options.push(...extractOptions(obj[key]))
  }

  return options
}

/**
 * List of options for each public resource.
 * Each options consists of the resource's url as value and label as label.
 */
export const resourceOptions = extractOptions(resources)
