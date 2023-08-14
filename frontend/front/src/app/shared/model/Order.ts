import {User} from "./User";
import {Address} from "./Address";

export interface Order{
  id: number;
  user: User;
  address: Address;
  files: string;
  orderFileUrl: string;
  price: number;
  orderDate: string;
  finishDate: string;
  shipDate: string;
}
