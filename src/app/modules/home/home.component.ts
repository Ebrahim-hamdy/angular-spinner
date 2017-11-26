import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductRepository } from './../../data/repositories/productRepositories'

@Component({
  selector: '',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  pageTitle = 'Product List'
  products: any[];

  constructor(
    private _productRepository: ProductRepository,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products = this._route.snapshot.data['getProducts'];
    console.log(this.products)
  }
}
