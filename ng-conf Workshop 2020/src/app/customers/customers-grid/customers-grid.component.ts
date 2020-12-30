import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs } from 'igniteui-angular';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.scss']
})
export class CustomersGridComponent implements OnInit {
  public localData: Customer [];

  constructor(private dataService: CustomersService) {
    this.dataService.getCompanies().subscribe(d => this.localData = d);
  }

  ngOnInit(): void {
  }

  selectionChanged(event: IRowSelectionEventArgs) {
    this.dataService.changeSelected(event.newSelection);
  }

}
