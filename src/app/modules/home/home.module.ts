import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeRoutingModule } from './home-routing.component';
import { HomeComponent } from './home.component';
import { EndPoints } from './../../data/endpoints'
import { Context } from './../../data/context'
import { ProductRepository } from './../../data/repositories/productRepositories'


@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule
  ],

  declarations: [
    HomeComponent
  ],

  providers: [
    EndPoints,
    Context,
    ProductRepository
  ]
})
export class HomeModule { }
