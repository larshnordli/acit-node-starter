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

## Overview  :notebook:

The ACIT NodeJS Starter is a boilerplate and tooling application for bootstrapping [NodeJS](https://nodejs.org/en/) infrastructures with a focus on [IBM Cloud](https://www.ibm.com/cloud/) technologies. It is best suited for developing REST APIs as a stand-alone (micro)service, backing up mobile or web front-ends (See [acit-ng-seed](https://git.ng.bluemix.net/ruben.gomez/acit-ng-seed)). For more information about the ACIT, please visit [us](https://in.accenture.com/ibm/).

This project was forked and based on Kriasoft's [NodeJS API Starter Project](https://github.com/kriasoft/nodejs-api-starter)

For examples on how this application can be used to implement a use case, please check out one of our Github branches.

### Technology Stack  :wrench:

* [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/), [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript),
[Babel](http://babeljs.io/), 
[Flow](https://flow.org/), 
[ESLint](https://eslint.org/), 
[Prettier](https://prettier.io/) — Core platform and web tools
* [Express](https://expressjs.com/), 
[Router](https://expressjs.com/en/guide/routing.html), [cors](https://github.com/expressjs/cors) — Common HTTP server features.
* [Jest](http://facebook.github.io/jest/) - Unit and snapshot testing

### Directory Layout  :books:

```bash
.
├── /build/                     # The compiled output (via Babel)
├── /src/                       # Node.js application source files
│   ├── /__tests__/             # Application tests
│   ├── /config.js              # Specific application configuration information
│   ├── /logger.js              # Application information logger 
│   ├── /router.js              # Express endpoints router
│   └── /server.js              # Express.js server (entry point)
├── /tools/                     # Build automation scripts and utilities
├── package.json                # List of project dependencies
```

## Quickstart  :pencil2:

### Prerequisites  :heavy_check_mark:

1) NodeJS [8.9.4](https://nodejs.org/en/download/) or above
2) [Yarn](https://yarnpkg.com/en/docs/install) 
3) (Windows only) Download and install the [Visual C++ 2017 Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools)
4) Highly recommended: [Visual Studio Code](https://code.visualstudio.com/) Extensions: EditorConfig, ESLint, Flow and Prettier.

### Getting started  :checkered_flag:

Clone this project and host the code either on Github or IBM's Git repository

`git clone https://github.com/brian-leppez/acit-node-starter <your-project-name>`

`cd <your-project-name>`

Install dependecies.

`yarn install` 

To build the project and launch a development server with hot reload.

`yarn dev`

The NodeJS server will be listening on https://localhost:3000

---

### How to test  :mag:

```bash
yarn lint              # Find problematic patterns in code
yarn check             # Check source code for type errors
yarn test              # Runs Jest on the project
```

With Visual Studio Code's debugger you can also launch Jest in debug mode with the included configuration.

For more information visit http://facebook.github.io/jest/

## API Documentation  :newspaper:

 Pending

## Demos  :slot_machine:

 Pending

