import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../shared/model/Product";
import {AddService} from "../../shared/service/add.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productList?: Product[];

  constructor(private route: Router,private addServ: AddService) {
  }
  ngOnInit(): void {
    this.addServ.getAllProduct().subscribe((prod: Product[]) =>{
      this.productList = prod;
    },error => {
      console.error(error);
    })
  }
  changeToView() {
    this.route.navigateByUrl("/view");
  }
}
