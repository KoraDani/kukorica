import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Address} from "../../../shared/model/Address";
import {AddressService} from "../../../shared/service/address.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {


  constructor(private addressServ: AddressService, private route: Router) {
  }

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
      id: 0,
      // @ts-ignore
      user: null,
      country: this.addressForm.get('orszag')?.value,
      city: this.addressForm.get('varos')?.value,
      street: this.addressForm.get('utca')?.value,
      house_number: this.addressForm.get('hazszam')?.value,
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

}
