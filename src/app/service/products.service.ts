import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL:string = "http://127.0.0.1:5050/";
  getProduct(){
    return this.http.get<Product[]>(this.baseURL+"getProducts");
  }
  addProduct(pro:Product){
    return this.http.post<Product>(this.baseURL+"addProduct",pro);
  }
  constructor(private http:HttpClient) {
    
   }


}
