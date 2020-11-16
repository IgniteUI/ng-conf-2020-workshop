# Building Better, Scalable Enterprise Angular Applications

In this workshop, we will start from zero (no repo) and we will finish with an Angular application that consumes data from an API. As a prerequisite you need:

 1. [Node.js](https://nodejs.org/en/)
 2. Angular CLI `npm i -g @angular/cli`
 3. Ignite UI CLI Schematics `npm i -g @igniteui/angular-schematics` 
    3.1. Optional Ignite UI CLI `npm i -g igniteui-cli`
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

`ng new --collection=@igniteui/angular-schematics`

And then we follow the wizard by choosing the Angular framework and the Ignite UI for Angular project template. Choose custom styles.

Let's see how fast the application renders using the Chrome LightHouse extension (dev tools).

## [SSR] Back-end

We will kill two birds with one stone in this step. We will add SSR (server-side rendering) and a node express server with API endpoints.

`ng add @nguniversal/express-engine`

Then copy `facebook-js-sdk` to `tsconfig.server.json`.

Let's run it to test:

`npm run dev:ssr`

Let's add server transfer cache.

`ServerTransferStateModule` to `server.module` imports.  
`TransferHttpCacheModule` to `app.module` imports.

## Back-end cont.

Let's first setup some oData. For this we will need some fetch API on our express server.

`npm i node-fetch`

Let's setup the endpoints for oData orders now.

In addition, we will generate some data on the server using `faker`.

`npm i faker`

## Front-end

Let's setup data services for the oData endpoints on our server.

`ng g s /services/orders`

Let's create a communication service for success, error and other messages.

`ng g s services/event-bus`

Let's setup a test component that consumes the oData service and displays the data in a table view.

`ng g c orders-v1 --module=app.module.ts`

Let's setup a view with Ignite UI for Angular Grid component.

`ng g @igniteui/angular-schematics:c`

Let's optimize the css size of the application.

 > observe the size diff

Let's add a chart view to our application.

`ng g @igniteui/angular-schematics:c`

Let's add some stuff to `server.shim`.