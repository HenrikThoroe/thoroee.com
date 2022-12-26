import { ComponentStory } from "@storybook/react"
import { resources } from "../../../../lib/utils/resources"
import createCollectionMock from "../../../../utils/createCollectionMock"
import References from "./References"

export default {
  title: "Website/Components/Pages/Resumé/References",
  component: References,
}

const Template: ComponentStory<typeof References> = (args) => (
  <References
    education={[
      createCollectionMock({
        link: "",
        institution: "Some",
        media: resources.images.shareYourWifiBackground.url,
        degree: "Some Degree",
        start: new Date().toString(),
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        media: resources.images.shareYourWifiBackground.url,
        degree: "Some Degree",
        start: new Date().toString(),
        end: new Date().toString(),
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        media: resources.images.shareYourWifiBackground.url,
        degree: "Some Degree",
        start: new Date().toString(),
        end: new Date().toString(),
      }),
    ]}
    experiences={[
      createCollectionMock({
        link: "",
        institution: "Some",
        media: resources.images.shareYourWifiBackground.url,
        role: "Some Role",
        start: new Date().toString(),
        end: new Date().toString(),
        location: "Some Place",
        country: "no",
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        media: resources.images.shareYourWifiBackground.url,
        role: "Some Role",
        start: new Date().toString(),
        location: "Some Place",
        country: "de",
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        media: resources.images.shareYourWifiBackground.url,
        role: "Some Role",
        start: new Date().toString(),
        location: "Some Place",
        country: "de",
      }),
    ]}
    rewards={[
      createCollectionMock({
        link: "",
        institution: "Some",
        title: "Some Award",
        media: resources.images.shareYourWifiBackground.url,
        date: new Date().toString(),
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        title: "Some Award",
        media: resources.images.shareYourWifiBackground.url,
        date: new Date().toString(),
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        title: "Some Award",
        media: resources.images.shareYourWifiBackground.url,
        date: new Date().toString(),
      }),
      createCollectionMock({
        link: "",
        institution: "Some",
        title: "Some Award",
        media: resources.images.shareYourWifiBackground.url,
        date: new Date().toString(),
      }),
    ]}
  />
)

export const Desktop = Template.bind({})
export const Tablet = Template.bind({})
export const Mobile = Template.bind({})

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad10p",
  },
}

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
}
