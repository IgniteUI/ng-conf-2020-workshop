import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CompanyStock } from '../models/company-stock';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  /** Get all Companies */
  public getCompanies(): Observable<Customer []> {
    return this.http.get<{ value: any []}>(environment.companiesEndpoint).pipe(map(x => x.value));
  }

  /** Get all Companies Stock */
  public getCompaniesStock(): Observable<CompanyStock []> {
    return this.http.get<{ value: any []}>(`${environment.companiesEndpoint}/stock`).pipe(map(x => x.value));
  }
}
