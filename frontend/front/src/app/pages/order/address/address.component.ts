import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Address} from "../../../shared/model/Address";
import {AddressService} from "../../../shared/service/address.service";
import {Router} from "@angular/router";
import {Customer} from "../../../shared/model/Customer";
import {Order} from "../../../shared/model/Order";
import {OrderService} from "../../../shared/service/order.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {


  constructor(private addressServ: AddressService,private orderServ: OrderService ,private route: Router) {
  }

  orderForm: FormGroup = new FormGroup({
    files: new FormControl(),
    file: new FormControl()
  });

  addressForm: FormGroup = new FormGroup({
    orszag: new FormControl(),
    varos: new FormControl(),
    utca: new FormControl(),
    hazszam: new FormControl(),
    emelet: new FormControl(),
    ajto: new FormControl()
  });

  saveAddress(){

    let address: Address = {
      addressID: 0,
      customerID: 1,
      country: this.addressForm.get('orszag')?.value,
      postCardNumber: "",
      city: this.addressForm.get('varos')?.value,
      street: this.addressForm.get('utca')?.value,
      houseNumber: this.addressForm.get('hazszam')?.value,
      floor: Number(this.addressForm.get('emelet')?.value),
      door: Number(this.addressForm.get('ajto')?.value)
    }

    this.addressServ.saveAddress(address).subscribe(() =>{
      console.log("sikerese szállítás mentés");
      this.route.navigateByUrl("/order");
    },error => {
      console.error(error);
    })
  }

  orderPrint() {
    // console.log(this.addressForm.get('orszag')?.value + " orszag");
    console.log(this.orderForm.get('files')?.value+ "filedes");
    let user: Customer = {
      customerID: 0,
      surname: "",
      forename: "",
      password: "asdf",
      email: "asdf@asdf.hu",
      coins: 0,
      sessionId: ""
    };


    let order: Order = {
      orderID: 0,
      customerID: 0,
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
