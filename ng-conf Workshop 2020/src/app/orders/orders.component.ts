import { Component, OnInit } from '@angular/core';
import { IRowDataEventArgs } from 'igniteui-angular';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(x => this.orders = x);
  }

  /**
   * addNew
   */
  public addNew(args: IRowDataEventArgs) {
    this.ordersService.addOrder(args.data as Order).subscribe(x => {
      const index  = this.orders.findIndex(o => o.OrderID === x.OrderID);
      // replace auto-added record with received update
      this.orders.splice(index, 1, x);
    });
  }
}
