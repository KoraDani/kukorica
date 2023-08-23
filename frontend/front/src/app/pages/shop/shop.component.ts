import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../shared/model/Product";
import {AddService} from "../../shared/service/add.service";
import {CartService} from "../../shared/service/cart.service";
import {ProductService} from "../../shared/service/product.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productList?: Product[] = [];

  constructor(private route: Router,private prodServ: ProductService,private cartServ: CartService) {
  }
  ngOnInit(): void {
    this.prodServ.getAllProduct().subscribe((prod: Product[]) =>{
      this.productList = prod;
    },error => {
      console.error(error);
    })
  }
  changeToView() {
    this.route.navigateByUrl("/view");
  }

  addToCart(id: number){
      this.prodServ.getItemById(id).subscribe((prod: Product) =>{
        this.cartServ.addToCart(prod);
      }, error => {
        console.error(error);
      });
      // @ts-ignore

    // }
  }
}
