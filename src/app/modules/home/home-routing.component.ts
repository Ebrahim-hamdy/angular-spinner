import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductResolver } from './../../shared/resolvers/productResolver';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
    resolve: {
      getProducts: ProductResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ProductResolver],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
