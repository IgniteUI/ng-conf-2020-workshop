import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-v1',
  templateUrl: './orders-v1.component.html',
  styleUrls: ['./orders-v1.component.scss']
})
export class OrdersV1Component implements OnInit {
  public data: Order [];

  constructor(private orderService: OrdersService) {
    this.orderService.getOrders().subscribe(data => this.data = data);
  }

  ngOnInit(): void {
  }

  public addOrder() {
    const order: Order = {
      CustomerID: 'ng-conf',
      ShipCountry: 'Bulgaria',
      ShipCity: 'Sofia',
      OrderDate: new Date()
    };

    this.orderService.addOrder(order).subscribe(x => this.data.push(x));
  }
}
