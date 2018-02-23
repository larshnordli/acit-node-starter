# Table of Contents

- [Overview](#overview)
  - [About This Branch](#about-this-branch)
  - [Technology Stack](#technology-stack)
  - [Directory Layout](#directory-layout)
- [Quickstart](#quickstart)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
  - [How to test](#how-to-test)
  - [How to debug](#how-to-debug)
  - [Deploying to IBM cloud](#deploying-to-ibm-cloud)
    - [Delivery Pipeline](#delivery-pipeline)
- [API Documentation](#api-documentation)
- [Demos](#demos)

# Overview

The ACIT NodeJS Starter is a boilerplate and tooling application for bootstrapping [NodeJS](https://nodejs.org/en/) infrastructures with a focus on [IBM Cloud](https://www.ibm.com/cloud/) technologies. It is best suited for developing REST APIs as a stand-alone (micro)service, backing up mobile or web front-ends (See [acit-ng-seed](https://git.ng.bluemix.net/ruben.gomez/acit-ng-seed)). For more information about the ACIT, please visit [us](https://in.accenture.com/ibm/).

This project was forked and based on Kriasoft's [NodeJS API Starter Project](https://github.com/kriasoft/nodejs-api-starter)

## About This Branch

This extension of ACIT NodeJS Starter utilizes a Watson Conversation service. To utilize this service, you need to provide the environment variables needed to access that service. For development, rename `env.example` to `.env` and set your environment variables. Your environment variables will be read by the application at runtime by the `dotenv` npm package (see package.json scripts).

You never check in service credentials to a code repository.

For production, you need to set those variables using a manifest.yaml, CF CLI or in the Deploy stage of a Delivery Pipeline.

## Technology Stack

* [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/), [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript),
[Babel](http://babeljs.io/), 
[Flow](https://flow.org/), 
[ESLint](https://eslint.org/), 
[Prettier](https://prettier.io/) — Core platform and web tools
* [Express](https://expressjs.com/), 
[session](https://github.com/expressjs/session), [cors](https://github.com/expressjs/cors) — Common HTTP server features.
* [Jest](http://facebook.github.io/jest/) - Unit and snapshot testing

## Directory Layout

```bash
.
├── /build/                     # The compiled output (via Babel)
├── /public                     # Basic Watson Conversation front-end client
├── /src/                       # Node.js application source files
│   ├── /__tests__/             # Jest unit, integration, and smoke tests.
│   ├── /lib/                   # IBM Cloud controllers
│   ├── /routes/                # Express endpoints
│   ├── /app.js                 # Express.js application
│   ├── /config.js              # Specific application configuration information
│   ├── /logger.js              # Application information logger 
│   ├── /router.js              # Express endpoints router
│   └── /server.js              # Node.js server (entry point)
├── /tools/                     # Build automation scripts and utilities
├── package.json                # List of project dependencies
```

# Quickstart

## Prerequisites

1) NodeJS [8.9.4](https://nodejs.org/en/download/) or above
2) [Yarn](https://yarnpkg.com/en/docs/install)
3) (Windows only) Download and install the [Visual C++ 2017 Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools)
4) Highly recommended: [Visual Studio Code](https://code.visualstudio.com/) Extensions: EditorConfig, ESLint, Flow and Prettier.

## Getting started
Clone this project and host the code either on Github or IBM's Git repository

`git clone https://github.com/brian-leppez/acit-node-starter <your-project-name>`

`cd <your-project-name>`

Install dependecies.

`yarn install` 

To build the project and launch a development server with hot reload.

`yarn dev`

The NodeJS server will be listening on https://localhost:3000

---

## How to test

```bash
yarn lint              # Find problematic patterns in code
yarn check             # Check source code for type errors
yarn test          # Runs Jest on the project
```

With Visual Studio Code's debugger you can also launch Jest in debug mode with the included configuration.

For more information visit http://facebook.github.io/jest/

## How to debug

In order to run the app with V8 inspector enabled, simply run the server in debug mode `yarn run debug` and use Visual Studio Code's debugger to attach to the running process.

# API Documentation

 Pending

# Demos

[Watson Conversation Demo](https://acit-node-starter.mybluemix.net/)


