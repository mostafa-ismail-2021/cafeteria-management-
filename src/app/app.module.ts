import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHeaderComponent } from './_core/admin-header/admin-header.component';
import { UserHeaderComponent } from './_core/user-header/user-header.component';
import { ItemsComponent } from './feature/items/items.component';
import { LoginComponent } from './feature/login/login.component';
import { NgxPopper } from 'angular-popper';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import {addProductComponent} from './feature/add-product/add-product.component'
import {HttpClientModule} from '@angular/common/http';
import { AddToUserComponent } from './feature/add-to-user/add-to-user.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    ItemsComponent,
    LoginComponent,
    SignUpComponent,
    addProductComponent,
    AddToUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPopper,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
