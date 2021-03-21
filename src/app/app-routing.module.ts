import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ItemsComponent} from './feature/items/items.component';
import{LoginComponent} from './feature/login/login.component';
import{SignUpComponent} from './feature/sign-up/sign-up.component';
import {addProductComponent} from './feature/add-product/add-product.component'

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"item",component:ItemsComponent},
  {path:"signup",component: SignUpComponent},
  {path:"addproduct",component: addProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
