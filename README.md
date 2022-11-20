# THORØE.com - Frontend

## Development

Start the dev server and storybook by running

```sh
yarn dev
yarn storybook
```

## Code Layout

### Components

Components are saved in `/components`. Each component ships with

- The component iteself in one or more `.tsx` files
- Supporting type declarations if required
- A story file
- A CSS module file
- Versions for different screen sizes identified by `*.(mobile|tablet|laptop|desktop).tsx`
  - The default component contains the desktop component or when required acts as a facade
- Further strongly related components that are only used within the components context
  - Such subcomponents share the CSS file in most cases

### Page Components

Page components are components that are located at `/components/page/*/`. They are
only useful within the given pages context and can fetch data.

### Layout Components

Layout components are similiar to page components. They can be contextualized and
rely on state data. Unlike page components they are used within multiple pages.
