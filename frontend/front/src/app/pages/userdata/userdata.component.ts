import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../shared/service/login.service";
import {Customer} from "../../shared/model/Customer";

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit{

  customer: Customer = {
    customerID: 0,
    surname: "",
    forename: "",
    email: "",
    password: "",
    coins: 0,
    sessionId: ""
  }
  constructor(private logServ: LoginService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.customer = this.logServ.getCurrentCustomer();
    console.log(this.logServ.isUserLogedIn()+ " valamilegyenmar")
  }


}
