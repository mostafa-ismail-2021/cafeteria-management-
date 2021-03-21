import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product'
import {ProductsService} from '../../service/products.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class addProductComponent implements OnInit {

  newProduct:Product = new Product(null , null , null , null , null);
  saveProduct(){
    this.proServic.addProduct(this.newProduct).subscribe(a=>{
      console.log(a);
    });
  }
  constructor(private proServic:ProductsService) { }
  
  ngOnInit() {
  }

}
