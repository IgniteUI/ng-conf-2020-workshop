import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CompanyStock } from '../models/company-stock';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customerSelectionSource = new Subject<string []>();

  public customerSelection = this.customerSelectionSource.asObservable();

  constructor(private http: HttpClient) { }

  /** Get all Companies */
  public getCompanies(): Observable<Customer []> {
    return this.http.get<{ value: any []}>(environment.companiesEndpoint).pipe(map(x => x.value));
  }

  /** Get all Companies Stock */
  public getCompaniesStock(): Observable<CompanyStock []> {
    return this.http.get<{ value: any []}>(`${environment.companiesEndpoint}/stock`).pipe(map(x => x.value));
  }

  public changeSelected(selection: string []) {
    this.customerSelectionSource.next(selection);
  }
}
