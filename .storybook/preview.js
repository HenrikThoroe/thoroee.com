import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import "../styles/globals.css"
import "../styles/colors.css"
import "../styles/spacing.css"
import "../styles/shadows.css"
import "./canvas.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}