import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
    ngOnInit() {
    }
  
  constructor(private registerUser:UserService) {}
  AddUser(nf:NgForm) {
    this.registerUser.AddUsertoDb(nf.value)
  }

 

}
