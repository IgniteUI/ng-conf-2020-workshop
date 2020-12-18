import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-v1',
  templateUrl: './orders-v1.component.html',
  styleUrls: ['./orders-v1.component.scss']
})
export class OrdersV1Component implements OnInit {

  public orders: Order[] = [];
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(x => this.orders = x);
  }

  /**
   * addNew
   */
  public addNew() {
    const newOrder = {
      CustomerID: 'NG Conf',
      ShipCountry: 'Bulgaria',
      ShipCity: 'Sofia',
      OrderDate: new Date()
    } as Order;
    this.ordersService.addOrder(newOrder).subscribe(x => this.orders.push(x));
  }
}
