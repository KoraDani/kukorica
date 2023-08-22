import { Injectable } from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  constructor() { }

  getItems(){
    return this.items;
  }

  addToCart(product: Product){
    this.items.push(product);
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  removeItem(product: Product){
    const index = this.items.indexOf(product);
    if(index >= 0){
      this.items.splice(index);
    }
    return this.items;
  }

}
