import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  constructor() { }
  getRole():string
  {
    console.log("inside getRole");
    var isMatch=false;
    var paylod=JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    console.log(paylod);
    var userRole=paylod.role;
    console.log("this is user role")
    console.log(userRole)
    return userRole;
    
    // if(userRole=='Customer')
    // {
    //   return false;
    // }
    // else
    // {
    //   return true;
    // }
  
  }
}
