export interface Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  OrderDate: Date;
  RequiredDate: Date;
  ShippedDate: Date;
  ShipVia: number;
  Freight: number;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipPostalCode: string;
  ShipCountry: string;
}
