import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { IgxLayoutModule, IgxRippleModule, IgxNavigationDrawerModule, IgxNavbarModule, IgxGridModule, IgxCheckboxModule, IgxDatePickerModule, IgxActionStripModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule, ExternalAuthService } from './authentication';
import { OrdersV1Component } from './orders-v1/orders-v1.component';
import { OrdersComponent } from './orders/orders.component';
import { CompanyStocksComponent } from './company-stocks/company-stocks.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersV1Component,
    OrdersComponent,
    CompanyStocksComponent
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HammerModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    // NOTE: `AuthenticationModule` defines child routes, must be imported before root `AppRoutingModule`
    AuthenticationModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxActionStripModule,
    IgxCategoryChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private externalAuthService: ExternalAuthService) {
    /**
     * To register a social login, un-comment one or more of the following and add your service provider Client ID.
     * See https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template#add-a-third-party-social-provider
     */
    // this.externalAuthService.addGoogle('<CLIENT_ID>');

    // this.externalAuthService.addMicrosoft('<CLIENT_ID>');

    // this.externalAuthService.addFacebook('<CLIENT_ID>');
  }
}
