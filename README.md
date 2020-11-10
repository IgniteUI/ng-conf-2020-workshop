# Building Better, Scalable Enterprise Angular Applications

In this workshop, we will start from zero (no repo) and we will finish with an Angular application that consumes data from an API. As a prerequisite you need:

 1. [Node.js](https://nodejs.org/en/)
 2. Angular CLI `npm i -g @angular/cli`
 3. Ignite UI CLI `npm i -g igniteui-cli`
 4. [Visual Studio Code](https://code.visualstudio.com/) 

From this point onwards we start the workshop. Steps we will take in this workshop.

 * repository setup
 * front-end angular repository
 * back-end setup (node.js in same repo)
 * SSR
 * data setup (back-end)
 * setup up data services (front-end)
 * setup up UI fast with reusable UI components (Ignite UI for Angular)
 * data transformations – pipes
 * Setting up services for cross-component communications
 * unit testing – optional if time allows
 * deployment – optional if time allows

## Repo setup

To start with our project, we will setup a new repository with the `igniteui-cli`. 

`ig new`

And then we follow the wizard by choosing the Angular framework and the Ignite UI for Angular project template. Choose custom styles.

## Back-end

We will kill two birds with one stone in this step. We will add SSR (server-side rendering) and a node express server with API endpoints.

`ng add @nguniversal/express-engine`

Then lets run it to test:

`npm run dev:ssr`

## Front-end 