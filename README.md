# ACIT NodeJS Starter

- [Overview](#overview)
  - [Technology Stack](#technology-stack)
  - [Directory Layout](#directory-layout)
- [Quickstart](#quickstart)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
  - [How to test](#how-to-test)
  - [How to debug](#how-to-debug)
- [API Documentation](#api-documentation)
- [Demos](#demos)
- [Reference Articles and Tutorials](#reference-articles-and-tutorials)

## Overview

The ACIT NodeJS Starter is a boilerplate and tooling application for bootstrapping [NodeJS](https://nodejs.org/en/) infrastructures with a focus on [IBM Cloud](https://www.ibm.com/cloud/) technologies. It is best suited for developing REST APIs as a stand-alone (micro)service, backing up mobile or web front-ends (See [acit-ng-seed](https://git.ng.bluemix.net/ruben.gomez/acit-ng-seed)). For more information about the ACIT, please visit [us](https://in.accenture.com/ibm/).

This particular extension of the ACIT NodeJS Starter integrates with a React Client for a full stack application.

This project was forked and based on Kriasoft's [NodeJS API Starter Project](https://github.com/kriasoft/nodejs-api-starter) and Facebook's [create-react-app (CRA)](https://github.com/facebook/create-react-app)

### Technology Stack

* [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/), [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript),
[Babel](http://babeljs.io/), 
[Flow](https://flow.org/), 
[ESLint](https://eslint.org/), 
[Prettier](https://prettier.io/) — Core platform and web tools
* [Express](https://expressjs.com/), 
[Router](https://expressjs.com/en/guide/routing.html), [cors](https://github.com/expressjs/cors) — Common HTTP server features.
* [React](https://reactjs.org/) — Front-end library
* [Jest](http://facebook.github.io/jest/) - Unit and snapshot testing

### Directory Layout

```bash
.
├── /build/                     # The compiled output (via Babel)
├── /client/                    # React client code
├── /src/                       # Node.js application source files
│   ├── /__tests__/             # Application tests
│   ├── /app.js                 # Express.js application
│   ├── /config.js              # Specific application configuration information
│   ├── /logger.js              # Application information logger 
│   ├── /router.js              # Express endpoints router
│   └── /server.js              # Node.js server (entry point)
├── /tools/                     # Build automation scripts and utilities
├── package.json                # List of project dependencies
```

## Quickstart

### Prerequisites

1) NodeJS [8.9.4](https://nodejs.org/en/download/) or above
2) [Yarn](https://yarnpkg.com/en/docs/install)
3) (Windows only) Download and install the [Visual C++ 2017 Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools) 
4) Highly recommended: [Visual Studio Code](https://code.visualstudio.com/) Extensions: EditorConfig, ESLint, Flow and Prettier.

### Getting started
Clone this project and host the code either on Github or IBM's Git repository

`git clone https://github.com/brian-leppez/acit-node-starter <your-project-name>`

`cd <your-project-name>`


Install Server Dependencies (NodeJS)

`yarn install` 

Install Client Dependencies (React)

`cd client`
`yarn install`

To build the project and launch a development server with hot reload. Go back to your project root.

`yarn dev`

IMPORTANT

The React development server will launch on https://localhost:3000 and will proxy requests to your NodeJS server that will be listening on https://localhost:3001. For development, purposes you DO NOT interact with the NodeJS server directly. Instead, you let the React development server proxy the requests to the NodeJS server.

---

### How to test

```bash
yarn lint              # Find problematic patterns in code
yarn check             # Check source code for type errors
yarn test              # Runs Jest on the project
```

With Visual Studio Code's debugger you can also launch Jest in debug mode with the included configuration.

For more information visit http://facebook.github.io/jest/

## API Documentation

 Pending

## Demos

 Pending
