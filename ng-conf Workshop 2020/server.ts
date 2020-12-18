import 'zone.js/dist/zone-node';
import './server.shims';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { Order } from 'src/app/models/order';
import fetch from 'node-fetch';
import * as faker from 'faker';
import { Customer } from 'src/app/models/customer';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/ng-conf-workshop-2020/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  //#region Orders

  let ordersStore: { value: Order[]};
  const getOrdersData =  async () => {
    if (!ordersStore) {
      const response = await fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json');
      ordersStore = await response.json();
    }
    return ordersStore;
  };

  server.get('/api/orders', async (req, res) => {
    const data = await getOrdersData();
    res.json(data);
  });

  server.get('/api/orders/:id', async (req, res) => {
    const data = await getOrdersData();
    const id = parseInt(req.params.id, 10);
    const order = data.value.find(x => x.OrderID === id);

    if (!order) {
      return res.status(404);
    }
    res.json(order);
  });

  server.post('/api/orders', express.json(), async (req, res) => {
    const data = await getOrdersData();
    const order: Order = req.body;

    order.OrderID = data.value.length + 1;
    data.value.push(order);
    res.status(201).json(order);
  });

  server.put('/api/orders', express.json(), async (req, res) => {
    const data = await getOrdersData();
    const updatedOrder: Order = req.body;
    const order = data.value.find(x => x.OrderID === updatedOrder.OrderID);

    if (!order) {
      // TODO: Create 201
      return res.status(404).end();
    }
    Object.assign(order, updatedOrder);
    res.status(204).end();
  });

  server.delete('/api/orders/:id', async (req, res) => {
    const data = await getOrdersData();
    const id = parseInt(req.params.id, 10);
    const index = data.value.findIndex(x => x.OrderID === id);

    if (index === -1) {
      return res.status(404).end();
    }
    data.value.splice(index, 1);
    return res.status(204).end();
  });

  //#endregion Orders

  //#region Companies
  let companyStore: { value: Customer[] };
  const companyStockStore: { value: {}[] } = { value: [] };

  const getCustomersData =  async () => {
    if (!companyStore) {
      const response = await fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json');
      companyStore = await response.json();
    }
    return companyStore;
  };

  server.get('/api/companies', async (req, res) => {
    const companies = await getCustomersData();
    res.json(companies);
  });

  server.get('/api/companies/stock', async (req, res) => {
    if (!companyStockStore.value.length) {
      const companies = await getCustomersData();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      companies.value.forEach(c => {
        companyStockStore.value.push(
          months.map(month => ({ month, companyId: c.CustomerID, [c.CompanyName]: faker.random.number({min: 50, max: 150}) }))
        );
      });
    }
    res.json(companyStockStore);
  });
  //#endregion Companies

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
