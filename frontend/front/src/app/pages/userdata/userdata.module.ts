import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdataRoutingModule } from './userdata-routing.module';
import {UserdataComponent} from "./userdata.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    UserdataComponent
  ],
  imports: [
    CommonModule,
    UserdataRoutingModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class UserdataModule { }
