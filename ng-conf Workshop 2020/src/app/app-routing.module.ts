import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { OrdersV1Component } from './orders-v1/orders-v1.component';
import { OrdersComponent } from './orders/orders.component';
import { CompanyStocksComponent } from './company-stocks/company-stocks.component';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'orders-v1', component: OrdersV1Component, data: { text: 'Orders V1' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'orders', component: OrdersComponent, data: { text: 'Orders' } },
  { path: 'company-stocks', component: CompanyStocksComponent, data: { text: 'Company Stocks' } },
  { path: 'customers', component: CustomersComponent, data: { text: 'Customers' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
