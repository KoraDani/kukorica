import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {MatCardModule} from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    OrderComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class OrderModule { }
