import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  page = 'main';

  constructor(private router: Router) {}

  changePage(selectedPage: string){
    this.router.navigateByUrl(selectedPage);
  }
}
