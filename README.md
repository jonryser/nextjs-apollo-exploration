# nextjs-apollo-exploration

Exploring using Apollo (GraphQL) with NextJs.
This app uses NextJs, React, and Apollo. It is written in Typescript.

## Setup

### Main Dependencies

1. [Node](http://nodejs.org) (`node`) - tested with version 12.16.1
1. [Yarn](https://yarnpkg.com/lang/en/) (`yarn`) - tested with version 1.21.1
1. [Git](https://git-scm.com/) (`git`) - tested with version 2.23.0

Download and install the main dependencies for your specific environment.

### Initial Environment Setup

1. Optional - Install [windows-build-tools](https://www.npmjs.com/package/windows-build-tools) for windows environment only.

   `yarn global add windows-build-tools`

## Running

### Local Devlopment Server

1. Open a terminal in project root.
1. Run `yarn` - Required only when installing packages.
1. Run `yarn dev` this will bootup the local devlopment server.
1. On success, you can view the website in any browser at `http://localhost:3000/`
   - It will open automatically in your default browser

## Environment Variables

Environment variables can be used in the app. The may be set in many ways in the environemnt. The app currently supports dotenv and has a .env file committed to the repo. This is NOT a good practice generally, but for this demo purpose show how this is done. The only value currently stored in the .env is the url to the demo graphql api.
