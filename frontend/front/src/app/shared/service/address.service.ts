import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address} from "../model/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl: string = "http://localhost:8080/addressController";
  constructor(private http: HttpClient) { }
  saveAddress(address: Address){
    return this.http.post<Address>(this.apiUrl+"/saveAddress",address);
  }
}
