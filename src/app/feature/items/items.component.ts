import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../service/products.service';
import {Product} from '../../model/product';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allProducts:Product[];
  addorder:Order = new Order(null,"null",null);
  temppro;
  changechoice(item){
    console.log(item);
    this.temppro = item;
  }


  constructor(private proServic:ProductsService,
    private orderService:OrderService
    ) { }

  ngOnInit() {
    this.proServic.getProduct().subscribe(a => {
      this.allProducts = a;
      console.log(this.allProducts);
    });
    this.temppro = {name:"tea",price:0};
  }
  
}
