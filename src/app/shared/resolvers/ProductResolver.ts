import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProductRepository } from './../../data/repositories/productRepositories'


@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(
    private _productRepository: ProductRepository
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this._productRepository.getProducts();
  }
}
