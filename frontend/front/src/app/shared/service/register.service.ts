import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/userController';

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post<User>(this.apiUrl+"/saveUser",user);
  }
}
