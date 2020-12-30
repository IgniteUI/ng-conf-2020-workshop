import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-company-stocks-chart',
  templateUrl: './company-stocks-chart.component.html',
  styleUrls: ['./company-stocks-chart.component.scss']
})
export class CompanyStocksChartComponent implements OnInit {

  @Input()
  public chartType: string;

  public isBrowser = true;

  public data = [];

  constructor(private companiesService: CustomersService, @Inject(PLATFORM_ID) platform: object) {
    this.isBrowser = isPlatformBrowser(platform);
    this.companiesService.getCompaniesStock().subscribe(x => this.data = x);
  }

  ngOnInit(): void {
  }

}
