import {Customer} from "./Customer";

export interface Address{
  addressID: number;
  customerID: number;
  country: string;
  postCardNumber: string;
  city: string;
  street: string;
  houseNumber: number;
  floor: number;
  door: number;
}
