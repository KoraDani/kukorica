import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AddService} from "../../../shared/service/add.service";
import {Product} from "../../../shared/model/Product";
import {ProductService} from "../../../shared/service/product.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private prodServ: ProductService) {}

  productForm: FormGroup = new FormGroup({
    productName: new FormControl(),
    description: new FormControl(),
    amount: new FormControl(),
    price: new FormControl(),
    photoUrl: new FormControl()
  });

  saveProduct() {
    let product: Product = {
      id : 0,
      name: this.productForm.get('productName')?.value,
      description: this.productForm.get('description')?.value,
      amount: this.productForm.get('amount')?.value,
      price: this.productForm.get('price')?.value,
      photoUrl: this.productForm.get('photoUrl')?.value
    };
    this.prodServ.save(product).subscribe(() =>{
      console.log("sikeres mentés");
    },error => {
      console.error(error);
    });
  }
}
