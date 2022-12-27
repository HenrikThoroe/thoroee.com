# THORØE.com

## Development

### Setup Environment

Before someone can start the services required by the website, a `.env.development.local` file has to be created.
The file must contain the following fields:

```env
DEV_EMAIL=<your email for payload>
DEV_PASSWORD=<your admin password for payload>
PAYLOAD_SECRET_KEY=<random key for the database>
```

The password and secret key do not have to be strong as they are only used for the development database.

### Start Services

The website requires [Docker](https://www.docker.com), [Node.js](https://nodejs.org) and [yarn](https://yarnpkg.com) to be installed.

```sh
# Start the database container
docker compose up

# Install dependencies
yarn install

# Load default data into the database.
# Only required for the first time the database container is started on your local machine.
# When called again, the existing dev database will be dropped and overriden by the snapshot data.
yarn seed

# Start the CMS and other backend services
yarn dev:server

# Start the UI testing framework
yarn storybook

# Start the Next.js dev server
yarn dev
```

### Open Next.js Dev Server

The website can be reached on [localhost:3000](http://localhost:3000).

### Open Storybook

Storybook is hosted on [localhost:6006](http://localhost:6006).

### Open Database Admin Panel

The admin panel of the database can be accessed on [localhost:3030](http://localhost:3030/admin).

### Reset Database

To reset the database and load the default content from `scripts/seed/snapshots` run `yarn seed`.

### Persist Database Content

To add the content of the dev database to version control run `yarn snapshot`.
The command will save the content of the database to `scripts/seed/snapshots`.
When running `yarn seed` for the next time, the newly persisted content will be used.

### Create Types For Database Data

```sh
# Creates type definitions from the database collection configs.
# Required for the frontend dev server to compile the source code.
# Call this script each time changes are made to the database definitions.
yarn create:types
```

## Project Layout

### App

Folder that contains the dynamic website structure. See [Next.js Docs](https://beta.nextjs.org/docs/getting-started) for more info.

### Components

A collection of React components. Each components is made from the files in one of the folders.
A component consists of

- `<name>.tsx`
  - The main component file
- `<name>.stories.tsx`
  - A storybook file, that renders the component with different parameters for visual testing
- `style.module.(s)css`
  - A CSS module for styling
- `<name>.<mobile|desktop|tablet>.tsx`
  - If required drop in components used for specific viewports

Components are mostly stateless. Exceptions are non app related states like the state of a dropdown button, etc.
Content is provided to the components by parameters.

### Layout Components

Layout components are components specifically used by page layouts. Examples are header or footer components.
They are located at `components/layout/*`

### Page Components

Page components are bound to a single page and can contain static content. They are not meant for reuse by other pages.
They are located at `components/pages/<page>/*`

### Collections

The collections directory contans the configs (aka definitions) of database entries as well as access control functions.

### Lib

The lib directory contains shared functions between frontend and backend code. All functionality that is not directly linked to displaying
React components is placed in this directory.

### Public

The public directory contains media files directly accessible on the browser. Public images and some icons are placed in this
directory.

### Server

The server directory contains the logic for the backend. It features an express app, that serves payload as a CMS above the
MongoDB database.

### Style

Global or shared styles. All CSS variables are defined in this directory.

### Utils

Development utils that are not meant to be shipped as part of the production code.

### Scripts

Development scripts used for automation tasks in the repo.
