import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';



const routes: Routes = [{
  path:"",
  component:HomeComponent
},
 {
  path:"products",
  component:ProductCrudComponent
 },
 {
  path:"products/creat",
  component:ProductCreatComponent
 },
 {
  path:"products/update/:id",
  component:ProductUpdateComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
