import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CompanyStock } from 'src/app/models/company-stock';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-company-stocks-chart',
  templateUrl: './company-stocks-chart.component.html',
  styleUrls: ['./company-stocks-chart.component.scss']
})
export class CompanyStocksChartComponent implements OnInit {

  @Input()
  public chartType: string;

  @Input()
  public title: string;

  public isBrowser = true;

  public data: CompanyStock[] = [];
  public filteredData: CompanyStock [];

  constructor(private companiesService: CustomersService, @Inject(PLATFORM_ID) platform: object) {
    this.isBrowser = isPlatformBrowser(platform);
    this.companiesService.getCompaniesStock().subscribe(x => this.data = this.filteredData = x);
    this.companiesService.customerSelection.subscribe(d => {
      this.filteredData = this.data.filter(c => d.find(entry => entry === c[0].companyId));
      if (!this.filteredData.length) {
        this.filteredData = this.data;
      }
    });
  }

  ngOnInit(): void {
  }

}
