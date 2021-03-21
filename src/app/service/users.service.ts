import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from '../model/users';
import { Order } from '../model/order';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL:string = "http://127.0.0.1:5050/";
  getUsers(){
    return this.http.get<Users[]>(this.baseURL+"getUsers");
  }
  addUser(user:Users){
    return this.http.post<Users>(this.baseURL+"addUser",user);
  }
  addOrder(order:Order){
    return this.http.post<Order>(this.baseURL+"addOrder",order);
  }
  constructor(private http:HttpClient) { }
}
