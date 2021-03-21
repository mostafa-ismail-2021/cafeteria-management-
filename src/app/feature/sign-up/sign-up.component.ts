import { Component, OnInit } from '@angular/core';
import {Users} from '../../model/users';
import {UsersService} from '../../service/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser:Users = new Users(null , null , null , null , null , null);
  saveUser(){
    this.userServic.addUser(this.newUser).subscribe(a=>{
      console.log(a);
    });
  }
  constructor(private userServic:UsersService) { }

  ngOnInit() {
  }

}
