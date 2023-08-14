import {User} from "./User";

export interface Address{
  id: number;
  user: User;
  country: string;
  city: string;
  street: string;
  house_number: number;
  floor: number;
  door: number;
}
