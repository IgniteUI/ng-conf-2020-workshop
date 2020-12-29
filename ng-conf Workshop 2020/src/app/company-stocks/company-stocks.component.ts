import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-company-stocks',
  templateUrl: './company-stocks.component.html',
  styleUrls: ['./company-stocks.component.scss']
})
export class CompanyStocksComponent {
  public chartType = 'Auto';
  public isBrowser = true;

  /**
   *
   */
  constructor(private companiesService: CustomersService, @Inject(PLATFORM_ID) platform: object) {
    this.isBrowser = isPlatformBrowser(platform);
    this.companiesService.getCompaniesStock().subscribe(x => this.data = x);
  }

  data = [];

}
