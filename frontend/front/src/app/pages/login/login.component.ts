import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../shared/service/login.service";
import {Customer} from "../../shared/model/Customer";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  sessionId: any = "";
  constructor(private loginServ: LoginService, private router: Router) {}

  loginGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    pwd: new FormControl()
  })

  login(){

    console.log(this.loginGroup.get('email')?.value +" " +this.loginGroup.get('pwd')?.value);
    let user: Customer = {
      id: 0,
      name: 'asd',
      password: this.loginGroup.get('pwd')?.value,
      email: this.loginGroup.get('email')?.value,
      coins: 0,
      sessionId: ""
    };

    //TODO token-t beállítani a sessionStrogabe
    this.loginServ.login(user).subscribe((user: Customer) =>{
      this.sessionId = user.sessionId;
      sessionStorage.setItem('token', this.sessionId);

      console.log(this.sessionId);
    },error => {
      console.error(error);
    });
  }

}
