import {Customer} from "./Customer";
import {Address} from "./Address";

export interface Order{
  orderID: number;
  customerID: number;
  orderDate: string;
  totalAmount: number;
  status: string;
  files: string;
}
