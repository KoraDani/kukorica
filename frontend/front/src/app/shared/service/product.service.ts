import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/productController';
  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get<Product[]>(this.apiUrl+"/getAll");
  }

  getItemById(id: number){
    return this.http.post<Product>(this.apiUrl+"/getItemById", id);
  }

  save(product: Product) {
    return this.http.post<Product>(this.apiUrl+"/saveProduct",product);
  }
}
