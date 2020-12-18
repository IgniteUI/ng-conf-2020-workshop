import { Component } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-company-stocks',
  templateUrl: './company-stocks.component.html',
  styleUrls: ['./company-stocks.component.scss']
})
export class CompanyStocksComponent {
  public chartType = 'Auto';

  /**
   *
   */
  constructor(private companiesService: CustomersService) {
    this.companiesService.getCompaniesStock().subscribe(x => this.data = x);
  }

  data = [];

}
