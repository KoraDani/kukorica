import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private apiUrl: string = "http://localhost:8080/productController";
  constructor(private http: HttpClient) { }

  save(product: Product) {
    return this.http.post<Product>(this.apiUrl+"/saveProduct",product);
  }

  getAllProduct() {
    return this.http.get<Product[]>(this.apiUrl+"/getAll");
  }
}
