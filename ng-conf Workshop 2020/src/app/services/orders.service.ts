import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { EventBusService } from './event-bus.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private eventBus: EventBusService) { }

  public getOrders( ): Observable<Order[]> {
    return this.http.get<{ value: Order[]}>(environment.ordersEndpoint)
      .pipe(
        map(x => x.value),
        catchError(this.handleError)
      );
  }

  public getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.ordersEndpoint}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.ordersEndpoint, order)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(environment.ordersEndpoint, order)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.ordersEndpoint}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError = (handleError: any) => {
    const text = 'Something wrong happened. Try again later.';
    this.eventBus.sendError({ text, payload: handleError });
    return of(null);
  }
}
