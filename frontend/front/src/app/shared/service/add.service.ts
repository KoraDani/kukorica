import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private apiUrl: string = "http://localhost:8080/productController";
  constructor(private http: HttpClient) { }




}
