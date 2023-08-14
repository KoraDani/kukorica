import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orderController';

  constructor(private http: HttpClient) { }

  saveOrder(order: Order) {
    return this.http.post<Order>(this.apiUrl+"/saveOrder", order);
  }
}
