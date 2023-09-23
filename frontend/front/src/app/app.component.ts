import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./shared/service/login.service";
import {Customer} from "./shared/model/Customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  page = 'main';
  isUserLogedIn?: boolean = false;
  constructor(private router: Router, private logServ: LoginService) {
  }


  ngOnInit(): void {
    console.log("Isuserlogedin" + this.logServ.isUserLogedIn());
    if(this.logServ.getCurrentCustomer() != null){
      this.isUserLogedIn = true;
    }
  }

  changePage(selectedPage: string){
    this.router.navigateByUrl(selectedPage);
  }
}
