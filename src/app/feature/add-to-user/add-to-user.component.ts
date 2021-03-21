import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../service/products.service';
import {Product} from '../../model/product';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order'
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-add-to-user',
  templateUrl: './add-to-user.component.html',
  styleUrls: ['./add-to-user.component.css']
})
export class AddToUserComponent implements OnInit {
  allProducts:Product[];
  allUsers:Users[];
  temppro;
  myItem:Number=10;
  addorder:Order = new Order( "1", null);
  changechoice(item){
    console.log(item);
    this.temppro = item;
  }
  
  saveOrder(notes:HTMLElement){
    // console.log(item.value);
    // this.addorder.orderId = 1;
    // this.addorder.orderNotes = "mslamsla";
    // this.addorder.orderUserID = 1;
    // console.log(this.addorder);
    this.addorder.setMyDate();
    this.addorder.orderNotes = notes.value;
    this.userService.addOrder(this.addorder).subscribe(a=>{console.log(a)});
  }
  addOrder(item:HTMLElement){
    this.addorder.setProductsItems(this.temppro._id);
    this.addorder.setProductsPrices(this.temppro.price);
    this.addorder.setProductsQuantity(parseInt(item.value));
    
    
    if(this.addorder.orderUserID == null)
    {
      this.addorder.orderUserID = 1;
    }
    

  }
  /*getUserId(userId:Number){
    this.addorder.orderUserID = userId;
    console.log("ss");
  }*/
  getUserId(userId){
    this.addorder.orderUserID = userId.value;
  }
  constructor(private proServic:ProductsService,
    private orderService:OrderService,
    private userService:UsersService
    ) { }

  ngOnInit() {
    
    this.proServic.getProduct().subscribe(a => {
      this.allProducts = a;
      // console.log(this.allProducts);
    });
    this.userService.getUsers().subscribe(user => {
      this.allUsers = user;
    })
    this.temppro = {name:"tea",price:0 ,_id:1};
  }
  
}
