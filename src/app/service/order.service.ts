import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/order'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL:string = "http://127.0.0.1:5050/";
  getOrder(){
    return this.http.get<Order[]>(this.baseURL+"Orders");
  }
  addOrder(order:Order){
    return this.http.post<Order>(this.baseURL+"addOrder",order);
  }
  constructor(private http:HttpClient) {
    
   }
}
