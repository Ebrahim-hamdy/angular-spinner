import { Component, Injectable } from "@angular/core";

import { EndPoints } from './../endpoints'
import { Context } from './../context'

@Component({
  providers: [EndPoints, Context]
})

@Injectable()
export class ProductRepository {

  constructor(private _endpoints: EndPoints, private _context: Context) { }

  getProducts() {
    return this._context.get(this._endpoints.endpoints().Products.GetProducts)
  }
}
