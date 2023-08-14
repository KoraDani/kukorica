import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../../shared/service/order.service";
import {Order} from "../../shared/model/Order";
import {Address} from "../../shared/model/Address";
import {User} from "../../shared/model/User";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orderForm: FormGroup = new FormGroup({
    files: new FormControl(),
    file: new FormControl()
  });


  constructor(private orderServ: OrderService) {}

  orderPrint() {
    // console.log(this.addressForm.get('orszag')?.value + " orszag");
    console.log(this.orderForm.get('files')?.value+ "filedes");
    let user: User = {
      id: 0,
      name:"asdf",
      password: "asdf",
      email: "asdf@asdf.hu",
      coins: 0,
      sessionId: ""
    };


    let order: Order = {
      id: 0,
      user: user,
      // @ts-ignore
      address: null,
      orderFileUrl : this.orderForm.get('file')?.value,
      files: this.orderForm.get('files')?.value,
      price: 0,
      orderDate: "asdf",
      finishDate: "asdf",
      shipDate: "asdf"
    };
    this.orderServ.saveOrder(order).subscribe(() =>{
      console.log('sikeres elküldés');
    },error =>{
      console.error(error);
    });
  }
}
