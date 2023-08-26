import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../../shared/service/register.service";
import {Customer} from "../../shared/model/Customer";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(private regServ: RegisterService) {
  }

  registerGroup: FormGroup = new FormGroup({
    nickname: new FormControl(),
    email: new FormControl(),
    pwd1: new FormControl(),
    pwd2: new FormControl()
  });

  register() {
    let pwd1 = this.registerGroup.get('pwd1')?.value;
    let pwd2 = this.registerGroup.get('pwd2')?.value;
    if (pwd1 == pwd2) {
      let user: Customer = {
        id: 0,
        name: this.registerGroup.get('nickname')?.value,
        password: pwd1,
        email: this.registerGroup.get('email')?.value,
        coins: 1,
        sessionId: ""
      };
      console.log(this.registerGroup.get('nickname')?.value + " " + this.registerGroup.get('email')?.value);
      this.regServ.registerUser(user).subscribe(() => {
        console.log('sikeres felhasználó mentés');
      }, error => {
        console.error(error);
      })
    }else {
      console.log("jelszó nem egyezik")
    }
  }
}
