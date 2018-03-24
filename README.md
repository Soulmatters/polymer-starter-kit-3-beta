
### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli@next
Second install Yarn

    npm install -g yarn (or https://yarnpkg.com/en/docs/install)

##### Initialize project from template

    git clone https://github.com/Soulmatters/polymer-starter-kit-3-beta.git
    cd polymer-starter-kit-3-beta
    yarn install --flat


##### Install new element

yarn add @polymer/some-element --flat

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    polymer serve --npm --module-resolution=node


No build for now