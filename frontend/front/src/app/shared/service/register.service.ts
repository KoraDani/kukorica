import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/userController';

  constructor(private http: HttpClient) { }

  registerUser(user: Customer){
    return this.http.post<Customer>(this.apiUrl+"/saveUser",user);
  }
}
