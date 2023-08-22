import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../shared/service/order.service";
import {CartService} from "../../shared/service/cart.service";
import {Product} from "../../shared/model/Product";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{


  cart?: Product[];
  constructor(private cartServ: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartServ.getItems()
  }

  increaseAmount(id: number) {
    // @ts-ignore
    for(let item of this.cart){
      if(item.id == id){
        item.amount = item.amount +1;
      }
    }
  }
}
