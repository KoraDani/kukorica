import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/userController';
  // @ts-ignore
  customer: Customer = null;

  constructor(private http: HttpClient) { }

  login(user: Customer) {
    return this.http.post<Customer>(this.apiUrl+"/login",user);
  }
  setCurrentCustomer(customer: Customer){
    this.customer = customer;
  }
  getCurrentCustomer(){
    return this.customer;
  }
  isUserLogedIn(): boolean{
    return this.customer != null;
  }
}
